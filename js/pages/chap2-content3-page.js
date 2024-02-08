var pageId = "#chap2-content3-page";

function onFlipPrevButtonClicked() {
  _goto("chap2-content2-page", "prev");
}

function onFlipNextButtonClicked() {
  unlockChapter(3);
  completeChapter(2);
  _goto("main-page-3", "next");
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
    let dataItem = $(this).data("item");
    $(`.item${dataItem}-img`).addClass("content3-opened");
    
    popup.open("popup");
    setTimeout(() => {
      $(`#chap2-content3-popup${dataItem}`).show();
    }, 200);

    if ($(".item-img.content3-opened").length === 2) {
      flipNext.fadeIn(animationDuration).pulse();
    }
  });
}
