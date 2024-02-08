var pageId = "#chap2-content1-page";

function onFlipPrevButtonClicked() {
  _goto("main-page-2", "prev");
}

function onFlipNextButtonClicked() {
  _goto("chap2-content2-page", "next");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  $(".quotation-left").floatLeft();
  $(".quotation-right").floatRight();

  setTimeout(() => {
    $(".quote-anim").fadeIn(animationDuration);
    setTimeout(() => {
      $(".chap-desc").fadeIn(animationDuration);
      setTimeout(() => {
        flipNext.pulse();
      }, 3000);
    }, 1000);
  }, 1000);
}
