var pageId = "#closing-page-1";

function onFlipPrevButtonClicked() {
  _goto("main-page-5", "prev");
}

function onFlipNextButtonClicked() {
  _goto("closing-page-2", "next");
}

$(function () {
  animationHandle();
});

function animationHandle() {
  header.show();
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
