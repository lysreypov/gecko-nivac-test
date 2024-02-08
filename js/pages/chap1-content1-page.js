var pageId = "#chap1-content1-page";

function onFlipPrevButtonClicked() {
  _goto("main-page-1", "prev");
}

function onFlipNextButtonClicked() {
  _goto("chap1-content2-page", "next");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  flipNext.hide();
  setTimeout(() => {
    $(".title").fadeIn(animationDuration);
    setTimeout(() => {
      $(".instruction").show().ins();

      setTimeout(() => {
        $(".group-items").fadeIn(800);

        setTimeout(() => {
          $(".item-img").pulse();
        }, 700);
      }, 1800);
    }, 700);
  }, 400);
}

function gameHandle() {
  $(".item-img").on("click", function () {
    $(this).clearAnim();
    let dataItem = $(this).data("item");
    $(`.item${dataItem}-img`).addClass("opened");

    popup.open("popup");
    setTimeout(() => {
      $(`#chap1-content1-popup${dataItem}`).show();
    }, 200);

    if ($(".item-img.opened").length === 3) {
      flipNext.fadeIn(animationDuration).pulse();
    }
  });
}
