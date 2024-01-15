function preloadImages(expression) {
  switch (expression) {
    // general
    case "general":
      $.preloadImages(
        "assets/images/general/arrow-down.svg",
        "assets/images/general/arrow-next.png",
        "assets/images/general/cross-icon.png",
        "assets/images/general/logout-icon.svg",
        "assets/images/general/ysl-logo.png"
      );
      break;

    // chapter-game
    case "chapter-game":
      $.preloadImages(
        "assets/images/pages/chapter-game/game-bg-desktop.jpg",
        "assets/images/pages/chapter-game/game-bg-mobile.jpg",
        "assets/images/pages/chapter-game/hand.png",
        "assets/images/pages/chapter-game/ysl-bottle-correct-bg-1.jpg",
        "assets/images/pages/chapter-game/ysl-bottle-correct-bg-2.jpg",
        "assets/images/pages/chapter-game/ysl-bottle-correct-left.png",
        "assets/images/pages/chapter-game/ysl-bottle-correct-right.png",
        "assets/images/pages/chapter-game/ysl-bottle-correct-right.png",
        "assets/images/pages/chapter-game/ysl-bottle-left.png",
        "assets/images/pages/chapter-game/ysl-bottle-right.png",
        "assets/images/pages/chapter-game/ysl-drag-icon.png"
      );
      break;

    // main-page
    case "main-page":
      $.preloadImages(
        "assets/images/pages/main-page/main-page-bg-desktop.jpg",
        "assets/images/pages/main-page/main-page-bg-mobile.jpg"
      );
      break;

    // welcome-page
    case "welcome-page":
      $.preloadImages(
        "assets/images/pages/welcome-page/question-mark-icon.svg"
      );
      break;

    // select-lang-page
    case "select-lang-page":
      $.preloadImages(
        "assets/images/pages/welcome-page/welcome-page-bg-desktop.jpg",
        "assets/images/pages/welcome-page/welcome-page-bg-mobile.jpg"
      );
      break;
  }
}
