var pageId = "#chap1-content2-page";

function onFlipPrevButtonClicked() {
  _goto("chap1-content1-page", "prev");
}

function onFlipNextButtonClicked() {
  unlockChapter(2);
  completeChapter(1);
  _goto("main-page-2", "next");
}

$(function () {
  animationHandle();
});

function animationHandle() {
  flipNext.hide();
  $(".title").show();
  setTimeout(() => {
    $(".chap1-desc1").fadeIn(animationDuration);
    setTimeout(() => {
      $(".chap1-desc2").fadeIn(animationDuration);
      setTimeout(() => {
        $(".instruction").show().ins();

        setTimeout(() => {
          $(".swiper").fadeIn(animationDuration);
        }, 1800);
      }, 700);
    }, 1000);
  }, 1200);

  let swiper = new Swiper("#chap1-content2-page .swiper", {
    speed: 500,
    slidesPerView: 1,
    allowTouchMove: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  swiper.on("slideChange", function () {
    let swiperIndex = swiper.realIndex;

    if (swiperIndex === 2) {
      setTimeout(() => {
        flipNext.fadeIn(animationDuration).pulse();
      }, 700);
    }
  });
}
