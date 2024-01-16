var cookieLanguage;
var userLanguage;
var BCP47LanguageTag;

// body
var body = $("body");

// Navigation
var header = $("#header");
var logo = $("#logo");
var logoutBtn = $("#logout");
var navTitle = $("#nav-title");
var footer = $("#footer");

// Footer
var arrowNextCon = $(".arrow-next-con");
var arrowNext = $("#arrow-next");
var tipCon = $(".tip-con");
var mainPageTip = $("#main-page-tip");
var gameTip = $("#game-tip");

// Data
var moduleData = {
  yourScore: 0,
};

// Fix default data
function initialData() {
  return {
    "#select-lang-page": {
      isComplete: false,
      prevPage: "",
      nextPage: "welcome-page",
    },
    "#welcome-page": {
      isComplete: false,
      prevPage: "select-lang-page",
      nextPage: "main-page",
    },
    "#chapter1-game": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 1,
      yourAns: [false, false],
    },
    "#chapter2-game": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 3,
      yourAns: [false, false],
    },
    "#chapter3-game": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 5,
      yourAns: [false, false],
    },
    "#chapter4-game": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 7,
      yourAns: [false, false],
    },
    "#chapter5-game": {
      isComplete: false,
      prevPage: "",
      nextPage: "result-page",
      question: 9,
      yourAns: [false, false],
    },
  };
}

var $store = {
  ...initialData(),
};
