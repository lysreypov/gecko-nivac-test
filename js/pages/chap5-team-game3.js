var pageId = "#chap5-team-game3";
var quesNum = $store[pageId].question;

function onFlipPrevButtonClicked() {
  _goto("chap5-team-game2", "prev");
}


$(function () {
  animationHandle();
  gameHandle();
});

var swiper;

function animationHandle() {
  flipNext.hide();

  setTimeout(() => {
    $(".group-content").fadeIn(animationDuration);
    setTimeout(() => {
      $(".instruction").show().ins();
      setTimeout(() => {
        $(".group-quiz").fadeIn(animationDuration);
        setTimeout(() => {
          $(".btn").fadeIn(animationDuration);
        }, 700);
      }, 1800);
    }, 700);
  }, 1000);
}

function gameHandle() {
  showQuestion(quesNum);
  $(".btn-validate").on("click", function () {
    $(`.choices-ques-${quesNum} .swiper-slide-active`).addClass("selected");

    let selectedAns = parseInt(
      $(`.choices-ques-${quesNum} .swiper-slide-active.selected`)
        .attr("aria-label")
        .slice(0, 1)
    );
    $store[pageId].indivAns[`ques_${quesNum}`] = selectedAns;

    if (quesNum < 5) {
      $(this).offClick();

      setTimeout(() => {
        $(`.choices-ques-${quesNum}`).hide();
        quesNum++;
        showQuestion(quesNum);
        $(this).onClick();
      }, 800);
    } else {
      $(this).offClick();
      _goto("chap5-team-result3");
    }
  });
}

function showQuestion(quesNum) {
  swiper = new Swiper(
    `#chap5-team-game3 .swiper.choices-ques-${quesNum}`,
    {
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
  );

  $(`.choices-ques-${quesNum}`).fadeIn(animationDuration);
  let gameQuestion = $(".game-question");
  $("#game-round-text").text(quesNum);

  gameQuestion.html(window[`game3-question-${quesNum}`]);
  $(`.ques${quesNum}-ans1`).html(window[`game3-ques${quesNum}-ans1`]);
  $(`.ques${quesNum}-ans2`).html(window[`game3-ques${quesNum}-ans2`]);
  $(`.ques${quesNum}-ans3`).html(window[`game3-ques${quesNum}-ans3`]);
  $(`.ques${quesNum}-ans4`).html(window[`game3-ques${quesNum}-ans4`]);
}
