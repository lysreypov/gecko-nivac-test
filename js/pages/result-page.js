$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  let i = 0;
  let timer;
  setTimeout(function () {
    timer = setInterval(function () {
      $("#your-score").text(i);
      i == moduleData.yourScore ? clearInterval(timer) : i++;
    }, 300);

    $(".title h1").pulseTwices();

    setTimeout(function () {
      $(".close-btn").pulse();
    }, 4000);
  }, 500);
}

function gameHandle() {
  let allAns = $store["#chapter1-game"].yourAns.concat(
    $store["#chapter2-game"].yourAns,
    $store["#chapter3-game"].yourAns,
    $store["#chapter4-game"].yourAns,
    $store["#chapter5-game"].yourAns
  );

  moduleData.yourScore = $.grep(allAns, function (value) {
    return value === true;
  }).length;

  $(".redo-btn").on("click", function () {
    resetGame();
    _goto("welcome-page");
  });

  $(".close-btn").on("click", function () {
    resetGame();
    _goto("select-lang-page");
  });
}

preloadImages("");
