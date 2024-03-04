var moduleStart = {
  init: function () {
    moduleStart.preloadImg();
    moduleStart.calculateScreen();
    moduleStart.setFirstPage();
  },

  // PRELOAD GENERAL IMAGE FOLDER AND FIRST PAGE
  preloadImg: function () {
    preloadImages("general");
    preloadImages("login-page");
  },

  // Do responsive
  calculateScreen: function () {
    responsive();
  },

  // Call first page
  setFirstPage: function () {
    _goto("login-page");
  },
};
