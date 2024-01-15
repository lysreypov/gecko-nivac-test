var moduleStart = {
  init: function () {
    moduleStart.preloadImg();
    moduleStart.setLang();
    moduleStart.setFirstPage();
    moduleStart.calculateScreen();
    moduleStart.callMenu();
  },

  // PRELOAD GENERAL IMAGE FOLDER AND FIRST PAGE
  preloadImg: function () {
    preloadImages("general");
    preloadImages("select-lang-page");
  },

  // SET LANGUAGE
  setLang: function () {
    // if URL parameter is undefined
    if (!GetURLParameter("_lang")) {
      // switch to English by default
      window.location = "?_lang=en-gb";
      cookieLanguage = "en-gb";
    }
    // if URL parameter is defined
    else {
      // switch to the chosen language
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

    // save as cookie language
    setCookie("lang", cookieLanguage, 365);

    // save as html language
    $("html").attr("lang", BCP47LanguageTag);
  },

  // DO THE RESPONSIVE FOR PROJECT WITH .PSD AND .XD
  calculateScreen: function () {
    responsive();
  },

  // CALL THE FIRST PAGE
  setFirstPage: function () {
    loadLocalizableResources(
      "data/" + getCookie("lang") + "/base.json",
      function () {
        if (GetURLParameter("_goto")) {
          _goto(GetURLParameter("_goto"));
        } else {
          _goto("result-page");
        }
      }
    );
  },

  // INIT THE MENU FUNCTION
  callMenu: function () {
    menuControl();
  },
};
