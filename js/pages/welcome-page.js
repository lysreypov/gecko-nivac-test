var pageId = "#welcome-page";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  $("#welcome-logo").scale();

  setTimeout(() => {
    $(".stain-yellow").fadeIn(animationDuration);
    setTimeout(() => {
      $(".info, .btn-start").fadeIn(animationDuration);
      $(".btn-start").pulse();
    }, 500);
  }, 1000);
}

function gameHandle() {
  $(".btn-start").one("click", function () {
    _goto("welcome-page-2");
  });
}
