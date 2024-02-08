var cookieLanguage;
var userLanguage;
var BCP47LanguageTag;

// Specific devices
var isMobile =
  /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
    navigator.userAgent
  );
var isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
  navigator.userAgent
);

var checkUnlock;

// Navigation
var header = $("#header");
var footer = $("#footer");
var flipPrev = $(".flip-prev");
var flipNext = $(".flip-next");
var indivTitle = $(".indiv-title");
var teamTitle = $(".team-title");

/* Fix default data */
function initialData() {
  return {
    "#chap5-individual-game1": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 1,
      indivAns: {
        ques_1: 0,
        ques_2: 0,
        ques_3: 0,
        ques_4: 0,
        ques_5: 0,
      },
    },
    "#chap5-individual-game2": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 1,
      indivAns: {
        ques_1: 0,
        ques_2: 0,
        ques_3: 0,
        ques_4: 0,
        ques_5: 0,
      },
    },
    "#chap5-individual-game3": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 1,
      indivAns: {
        ques_1: 0,
        ques_2: 0,
        ques_3: 0,
        ques_4: 0,
        ques_5: 0,
      },
    },
    "#chap5-team-game1": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 1,
      indivAns: {
        ques_1: 0,
        ques_2: 0,
        ques_3: 0,
        ques_4: 0,
        ques_5: 0,
      },
    },
    "#chap5-team-game2": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 1,
      indivAns: {
        ques_1: 0,
        ques_2: 0,
        ques_3: 0,
        ques_4: 0,
        ques_5: 0,
      },
    },
    "#chap5-team-game3": {
      isComplete: false,
      prevPage: "",
      nextPage: "main-page",
      question: 1,
      indivAns: {
        ques_1: 0,
        ques_2: 0,
        ques_3: 0,
        ques_4: 0,
        ques_5: 0,
      },
    },
  };
}

let $store = {
  ...initialData(),
};
