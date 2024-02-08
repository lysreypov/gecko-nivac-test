var moduleStart = {
  init: function () {
    moduleStart.preloadImg();
    moduleStart.setLang();
    moduleStart.setFirstPage();
    moduleStart.calculateScreen();
    moduleStart.callMenu();
  },

  // Preload general image folder and first page
  preloadImg: function () {
    preloadImages("general");
    preloadImages("welcome-page");
  },

  // Set language
  setLang: function () {
    // If URL parameter is undefined
    if (!GetURLParameter("_lang")) {
      // Switch to English by default
      window.location = "?_lang=en-gb";
      cookieLanguage = "en-gb";
    }
    // If URL parameter is defined
    else {
      // Switch to the chosen language
      cookieLanguage = GetURLParameter("_lang");
    }

    switch (cookieLanguage) {
      case "en-gb":
        userLanguage = "English -(UK)";
        BCP47LanguageTag = "en-GB";
        break;
      default:
        cookieLanguage = "en-gb";
        userLanguage = "English (UK)";
        BCP47LanguageTag = "en-GB";
        break;
    }

    // Save as cookie language
    setCookie("lang", cookieLanguage, 365);

    // Save as html language
    $("html").attr("lang", BCP47LanguageTag);
  },

  // Do the responsive for project with .PSD and .XD
  calculateScreen: function () {
    responsive();
  },

  // Call first page
  setFirstPage: function () {
    loadLocalizableResources(
      "data/" + getCookie("lang") + "/base.json",
      function () {
        loadLocalizableResources(
          "data/" + getCookie("lang") + "/menu.json",
          function () {
            if (GetURLParameter("_goto")) {
              _goto(GetURLParameter("_goto"));
            } else {
              _goto("welcome-page");
            }
          }
        );
      }
    );
  },

  // Call menu control
  callMenu: function () {
    menuControl();
  },
};
