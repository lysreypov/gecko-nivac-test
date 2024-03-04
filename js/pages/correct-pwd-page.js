$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  setTimeout(() => {
    $(".play-btn").pulse();
  }, 3000);
}

function gameHandle() {
  $(".play-btn").one("click", function () {
    _goto("game-page");
  });
}

preloadImages("game-page");
