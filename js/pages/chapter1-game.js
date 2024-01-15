var pageId = "#chapter1-game";
var quesNum = $store[pageId].question;
var score = $store[pageId].yourScore;
var mobileBreakPoint = 768;

function nextBtnClicked(e) {
  e.preventDefault();

  $(".arrow-next").fadeOut(animationDuration);
  arrowNext.clearAnim();

  if (quesNum < 2) {
    quesNum++;
    $store[pageId].question = quesNum;
    _goto("chapter1-game");
  } else {
    unlockChap(2);
    _goto($store[pageId].nextPage);
  }
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  textChapStatusControl();

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
      let dropAreaChild = $(this).children();
      let dragElement = ui.helper;

      // Calculate the new position
      let positionX = dropAreaChild.width() - dragElement.width();
      let positionY = dropAreaChild.height() - dragElement.height();

      if ($(window).width() < 768) {
        positionX = positionX * 9.8;
        positionY = positionY / 1.68;
      } else {
        positionX = positionX * 14.7;
        positionY = positionY / 4.1;
      }

      // Change position of dragElement
      function dragElementPos(positionX, delay) {
        setTimeout(function () {
          dragElement.animate(
            {
              left: positionX,
              top: positionY,
            },
            500
          );
        }, delay);
      }

      let gameAns = gameQuestion.data("ans");

      if ($(this).data("ans") === gameAns) {
        $store[pageId].yourAns[quesNum - 1] = true;
        $(ui.draggable).draggable("option", "revert", false);
        $(ui.draggable).draggable("destroy");

        if (gameAns === 1) {
          if ($(window).width() < 768) {
            positionX = positionX / 2.8;
          } else {
            positionX = -positionX / 20;
          }
        }

        dragElementPos(positionX, 100);
        showResultText("Well Done!");
      } else {
        $store[pageId].yourAns[quesNum - 1] = false;
        $(ui.draggable).draggable("option", "revert", false);
        $(ui.draggable).delay(1000).shake();

        if ($(this).data("ans") === 2) {
          if ($(window).width() < 768) {
            positionX = positionX / 2.8;
          } else {
            positionX = -positionX / 20;
          }
        }

        dragElementPos(positionX, 1000);
        showResultText("Not Exactly...");
      }

      setTimeout(function () {
        $("#result-text, .tip-con").fadeOut(animationDuration);
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
      }, 5000);
    },
  });
}

function showResultText(text) {
  setTimeout(function () {
    $("#result-text").text(text).fadeIn(animationDuration);
    setTimeout(function () {
      $("#result-text").pulseTwices();
    }, 1000);
  }, 1000);
}

function setDataAns(gameQuestion) {
  // Set data-ans for each question
  switch (quesNum) {
    case 1:
      gameQuestion.attr("data-ans", "2");
      break;
    case 2:
      gameQuestion.attr("data-ans", "1");
      break;
    default:
      gameQuestion.attr("data-ans", "");
      break;
  }
}

function showResultMobile(gameAns) {
  $(".drag-icon").fadeOut(200);
  $(".group-drop-left").moveLeftRight("0", "-120%").fadeOut(animationDuration);
  $(".group-drop-right").moveLeftRight("0", "100%").fadeOut(animationDuration);
  $("#main-container").css("overflow-y", "auto");

  // $("#main-container").addClass(`correct-ans-bg-${gameAns}`);

  $(pageId).css(
    "background-image",
    `url("assets/images/pages/chapter-game/ysl-bottle-correct-bg-${gameAns}.jpg")`
  );
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
