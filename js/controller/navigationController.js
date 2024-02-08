var animationDuration = 500;

/*  loadPage life cycle
 *  1. empty the content
 *  2. load new content according to page
 *  3. apply the header/footer
 *  4. apply the theme
 */

$(function () {
  setNavigationButtonClicked();
});

function setNavigationButtonClicked() {
  $(".flip-prev").on("click", function () {
    $(this).clearAnim();
    if (!$(".flip-prev, .flip-next").hasClass("clicked")) {
      $(".flip-prev, .flip-next").addClass("clicked");
      setTimeout(() => {
        $(".flip-prev, .flip-next").removeClass("clicked");
      }, 1000);
      onFlipPrevButtonClicked();
    }
  });

  $(".flip-next").on("click", function () {
    $(this).clearAnim();
    if (!$(".flip-prev, .flip-next").hasClass("clicked")) {
      $(".flip-prev, .flip-next").addClass("clicked");
      setTimeout(() => {
        $(".flip-prev, .flip-next").removeClass("clicked");
      }, 1000);
      onFlipNextButtonClicked();
    }
  });
}

function loadPage(pagePath, script, json, nav) {
  $("#content .page").addClass("current");
  if (nav) {
    $.get(pagePath, function (data) {
      if (nav === "next") {
        $(".page").after(data);
        pageAnimationNext();
      } else {
        $(".page").before(data);
        pageAnimationBack();
      }
      initLoadPage(script, json);
    });
  } else {
    $("#content")
      .fadeOut(animationDuration, function () {
        $(this)
          .empty()
          .load(pagePath, function () {
            initLoadPage(script, json);
          });
      })
      .fadeIn();
  }
}

function goto(page, nav) {
  loadPage(
    `templates/${page}.html`,
    `js/pages/${page}.js`,
    `${page}.json`,
    nav
  );
}

function initLoadPage(script, json) {
  loadLocalizableResources(`data/${cookieLanguage}/${json}`, function () {
    $.getScript(script, function () {
      $("#content").fadeIn(animationDuration);

      // Active current menu and unlcok previous menu
      unlockMenu();

      // Pagename control
      var getChapterNO = $(".page:not(.current)").data("menu");
      $(".nav__page").hide();
      $(`.nav__page.name${getChapterNO}`).show();
    });
  });

  // Apply header
  inArrayMod();
}

function inArrayMod() {
  var pageName = $(".page:not(.current)").attr("id");
  var hideHeader = ["welcome-page", "welcome-page-2", "chap5-content1-page"];
  var hideFooter = ["welcome-page", "welcome-page-2", "chap5-content1-page"];
  var prevHide = ["main-page-1"];
  var nextHide = [
    "main-page-5",
    "chap5-content1-page",
    "chap5-individual-game1",
    "chap5-individual-game2",
    "chap5-individual-game3",
    "chap5-team-game1",
    "chap5-team-game2",
    "chap5-team-game3",
  ];
  var showIndivTitle = [
    "chap5-individual-game1",
    "chap5-individual-result1",
    "chap5-individual-game2",
    "chap5-individual-result2",
    "chap5-individual-game3",
    "chap5-individual-result3",
  ];

  var showTeamTitle = [
    "chap5-team-game1",
    "chap5-team-result1",
    "chap5-team-game2",
    "chap5-team-result2",
    "chap5-team-game3",
    "chap5-team-result3",
  ];

  // Hide header
  if (hideHeader.includes(pageName)) {
    header.hide();
  }

  // Hide footer
  if (hideFooter.includes(pageName)) {
    footer.hide();
  } else {
    footer.fadeIn(animationDuration);
  }

  // Hide prev and next filp button
  if (prevHide.includes(pageName)) {
    flipPrev.hide();
  } else {
    flipPrev.show();
  }

  if (nextHide.includes(pageName)) {
    flipNext.hide();
  } else {
    flipNext.show();
  }

  // Show behaviour title
  if (showIndivTitle.includes(pageName)) {
    indivTitle.fadeIn(animationDuration);
  } else {
    indivTitle.hide();
  }

  if (showTeamTitle.includes(pageName)) {
    teamTitle.fadeIn(animationDuration);
  } else {
    teamTitle.hide();
  }
}

function pageAnimationBack() {
  $(".page.current").addClass("prev");
  setTimeout(() => {
    header.fadeIn();
    $(".page.current").remove();
    $(".page").clearAnim();
    $("html").css("cursor", "default");
  }, 1000);
}

function pageAnimationNext() {
  $(".page.current").addClass("next");
  setTimeout(() => {
    header.fadeIn();
    $(".page.current").remove();
    $(".page").clearAnim();
    $("html").css("cursor", "default");
  }, 1000);
}
