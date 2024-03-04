function preloadImages(expression) {
  switch (expression) {
    // general
    case "general":
      $.preloadImages(
        "assets/images/general/arrow-button.png",
        "assets/images/general/drag-icon.png",
        "assets/images/general/hermes-bat.png",
        "assets/images/general/hermes-logo.png"
      );
      break;

    // game-page
    case "game-page":
      $.preloadImages(
        "assets/images/pages/game-page/keys.png",
        "assets/images/pages/game-page/labyrinth.png",
        "assets/images/pages/game-page/player.png"
      );
      break;
  }
}
