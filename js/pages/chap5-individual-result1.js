var pageId = "#chap5-individual-result1";
var swiper;

function onFlipPrevButtonClicked() {
  _goto("chap5-individual-game1", "prev");
}

function onFlipNextButtonClicked() {
  _goto("chap5-individual-game2", "next");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {}

function gameHandle() {
  flipNext.offClick();
  // Set chosen answer for each question
  let answer = $store["#chap5-individual-game1"].indivAns;
  let keys = Object.keys(answer);
  for (var i = 1; i <= keys.length; i++) {
    var value = answer[keys[i - 1]];
    $(`.ques${i}-ans`).html(window[`game1-ques${i}-ans${value}`]);
  }

  swiper = new Swiper("#chap5-individual-result1 .swiper", {
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Unlock chosen category for first question
  $(`.category-${answer["ques_1"]}`).removeClass("locked");

  // Unlock chosen category for each question when user swipe
  swiper.on("slideChange", function () {
    let swiperIndex = swiper.realIndex;
    let category = 4;

    for (var i = 1; i <= category; i++) {
      if (answer[`ques_${swiperIndex + 1}`] === i) {
        $(".category").addClass("locked");
        $(`.category-${i}`).removeClass("locked");
      }
    }

    if (swiperIndex === 4) {
      flipNext.onClick();
      flipNext.pulse();
    }
  });
}
