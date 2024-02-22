var moduleStart = {
  init: function () {
    moduleStart.calculateScreen();
    moduleStart.setFirstPage();
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
