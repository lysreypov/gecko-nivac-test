var pageId = "#chap3-content2-page";

function onFlipPrevButtonClicked() {
  _goto("chap3-content1-page", "prev");
}

function onFlipNextButtonClicked() {
  _goto("chap3-content3-page", "next");
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
    $(`.item${dataItem}-img`).addClass("content2-opened");

    popup.open("popup");
    setTimeout(() => {
      $(`#chap3-content2-popup${dataItem}`).show();
    }, 200);

    if ($(".item-img.content2-opened").length === 2) {
      flipNext.fadeIn(animationDuration).pulse();
    }
  });
}
