var animationDuration = 500;

/*  loadPage life cycle
 *  1. empty the content
 *  2. load new content according to page
 *  3. apply the header/footer
 *  4. apply the theme
 */
function loadPage(pagePath, script, json, callback) {
  $("#main-container").css("overflow", "hidden");
  $("#logo, #logout, #nav-title, .tip-con").fadeOut(animationDuration);

  $("#content").fadeOut(animationDuration, function () {
    $(this)
      .empty()
      .load(pagePath, function () {
        $("#main-container").attr("class", "");
        $("#main-container").attr("class", pagePath.slice(10, -5));
        loadLocalizableResources(`data/${cookieLanguage}/${json}`, function () {
          $.getScript(script, function () {
            $("#content").fadeIn(animationDuration);
          });

          // Apply header
          inArrayNavMod();
        });

        if (typeof callback == "function") {
          callback();
        }
      });
  });
}

function goto(page) {
  loadPage(`templates/${page}.html`, `js/pages/${page}.js`, `${page}.json`);
}

function inArrayNavMod() {
  var pageName = $(".page").attr("id");
  var hideLogoutBtn = ["select-lang-page", "result-page"];
  var hideNavTitle = [
    "select-lang-page",
    "welcome-page",
    "main-page",
    "result-page",
  ];
  var showLogo = ["select-lang-page", "welcome-page", "result-page"];
  var showMainPageTip = ["main-page"];
  var hideGameTip = ["main-page"];

  var hideTip = ["select-lang-page", "welcome-page", "result-page"];

  var hideArrowNext = [
    "select-lang-page",
    "welcome-page",
    "main-page",
    "chapter1-game",
  ];

  // hide logout button
  if (hideLogoutBtn.includes(pageName)) {
    logoutBtn.hide();
  } else {
    logoutBtn.fadeIn(animationDuration);
  }

  // hide chapter status
  if (hideNavTitle.includes(pageName)) {
    navTitle.hide();
  } else {
    navTitle.fadeIn(animationDuration);
  }

  // show logo
  if (showLogo.includes(pageName)) {
    logo.fadeIn(animationDuration);
  }

  // show main page tip
  if (showMainPageTip.includes(pageName)) {
    mainPageTip.show();
  } else {
    mainPageTip.hide();
  }

  // hide game tip
  if (hideGameTip.includes(pageName)) {
    gameTip.hide();
  } else {
    gameTip.show();
  }

  // hide footer
  if (hideArrowNext.includes(pageName)) {
    arrowNext.hide();
  } else {
    arrowNext.fadeIn(animationDuration);
  }

  // hide tip button
  if (hideTip.includes(pageName)) {
    tipCon.hide();
  } else {
    tipCon.fadeIn(animationDuration);
  }
}
