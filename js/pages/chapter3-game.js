var pageId = "#chapter3-game";
var quesNum = $store[pageId].question;

function nextBtnClicked(e) {
  e.preventDefault();

  arrowNext.clearAnim();
  arrowNextCon.fadeOut(animationDuration);
  
  if (quesNum < 6) {
    quesNum++;
    $store[pageId].question = quesNum;
    _goto("chapter3-game");
  } else {
    unlockChap(4);
    _goto($store[pageId].nextPage);
  }
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  textChapStatusControl();
  body.css("overflow", "hidden");

  $(".arrow-next").fadeIn(animationDuration);

  $("#result-text").hide();
  $(".hand-icon").moveUpDown();

  $(".group-drop-left").moveLeftRight("-120%", "0");
  $(".group-drop-right").moveLeftRight("100%", "0");

  removeHand();
}

function gameHandle() {
  let gameQuestion = $(".game-question");

  $("#game-round-text").text(quesNum);

  gameQuestion.html(window[`game-question-${quesNum}`]);

  setDataAns(gameQuestion);

  $(".drag-icon").draggable({
    revert: true,
    snapTolerance: 20,
    zIndex: 10,
    start: function (event, ui) {
      $(".hand-box").remove();
    },
  });

  $(".drop-area").droppable({
    drop: function (event, ui) {
      let gameAns = gameQuestion.data("ans");

      if ($(this).data("ans") === gameAns) {
        $store[pageId].yourAns[quesNum - 5] = true;
        $(ui.draggable).draggable("option", "revert", false);
        $(ui.draggable).draggable("destroy");
        showResultText("Well Done!");
        setTimeout(function () {
          $(".ysl-logo").hide();
          $(`.ysl-logo-correct-ans-${gameAns}`).fadeIn(500);
        }, 100);
      } else {
        $store[pageId].yourAns[quesNum - 5] = false;
        $(ui.draggable).draggable("option", "revert", false);
        $(ui.draggable).delay(1000).shake();
        showResultText("Not Exactly...");
        setTimeout(function () {
          $(".ysl-logo").hide();
          $(`.ysl-logo-correct-ans-${gameAns}`).fadeIn(500);
        }, 800);
      }

      setTimeout(function () {
        $("#result-text, .tip-con").fadeOut(200);
        arrowNextCon.fadeIn(200);
        $(".game-ans-debrief").html(window[`game-ans-debrief-${quesNum}`]);

        if (!isVertical()) {
          showResultDesktop(gameAns);
        } else {
          showResultMobile(gameAns);
        }

        setTimeout(function () {
          arrowNext.pulse();
        }, 3000);

        arrowNext.one("click", nextBtnClicked);
      }, 4000);
    },
  });
}

function showResultText(text) {
  setTimeout(function () {
    $("#result-text").text(text).fadeIn(animationDuration);
    setTimeout(function () {
      $("#result-text").pulseTwices();
    }, 1000);
  }, 500);
}

function setDataAns(gameQuestion) {
  // Set data-ans for each question
  switch (quesNum) {
    case 5:
      gameQuestion.attr("data-ans", "2");
      break;
    case 6:
      gameQuestion.attr("data-ans", "1");
      break;
    default:
      gameQuestion.attr("data-ans", "");
      break;
  }
}

function showResultMobile(gameAns) {
  $(".group-drop-left").moveLeftRight("0", "-120%").fadeOut(animationDuration);
  $(".group-drop-right").moveLeftRight("0", "100%").fadeOut(animationDuration);
  $("#main-container").css("overflow-y", "auto");

  $("#main-container").addClass(`correct-ans-bg-${gameAns}`);
  $(pageId).addClass(`chapter-game-page-correct-bg-${gameAns}`);

  $(".group-correct-answer-" + gameAns).fadeIn(animationDuration);
}

function removeHand() {
  if (quesNum > 1) {
    $(".hand-box").remove();
  }
}

function showResultDesktop(gameAns) {
  if (gameAns === 1) {
    $(".game-debrief-d").removeClass("hide").moveLeftRight("200%", "100%");
  } else {
    $(".game-debrief-d").removeClass("hide").moveLeftRight("-100%", "0");
  }
}
