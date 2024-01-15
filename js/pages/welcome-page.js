var pageId = "#welcome-page";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  setTimeout(() => {
    $(".start-btn").removeClass("locked").pulse();
  }, 3000);
}

function gameHandle() {
  $(".start-btn").on("click", function () {
    $(this).clearAnim();
    unlockChap(1);
    _goto($store[pageId].nextPage);
  });
}

preloadImages("main-page");
