var pageId = "#chap-content3-page";

function onFlipPrevButtonClicked() {
  _goto("chap3-content2-page", "prev");
}

function onFlipNextButtonClicked() {
  unlockChapter(4);
  completeChapter(3);
  _goto("main-page-4", "next");
}
$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  setTimeout(() => {
    $(".question").fadeIn(animationDuration);
    setTimeout(() => {
      $(".chap-desc").fadeIn(animationDuration);
      setTimeout(() => {
        $(".instruction").show().ins();
        setTimeout(() => {
          $(".group-items").fadeIn(800);
          setTimeout(() => {
            $(".item-img").pulse();
          }, 700);
        }, 1800);
      }, 700);
    }, 1000);
  }, 400);
}

function gameHandle() {
  $(".item-img").on("click", function () {
    $(this).clearAnim();
    $(`.item-img`).addClass("opened");

    popup.open("popup");
    setTimeout(() => {
      $("#chap3-content3-popup").show();
    }, 200);

    if ($(".item-img.opened").length === 1) {
      flipNext.fadeIn(animationDuration).pulse();
    }
  });
}
