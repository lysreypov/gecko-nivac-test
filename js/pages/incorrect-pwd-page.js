$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  setTimeout(() => {
    $(".ok-btn").pulse();
  }, 3000);
}

function gameHandle() {
  $(".ok-btn").on("click", function () {
    _goto("login-page");
  });
}