var animationDuration = 500;

/*  loadPage life cycle
 *  1. empty the content
 *  2. load new content according to page
 *  3. apply the header/footer
 *  4. apply the theme
 */
function loadPage(pagePath, script, json, callback) {
  $("#content").fadeOut(animationDuration, function () {
    $(this)
      .empty()
      .load(pagePath, function () {
        loadLocalizableResources(`data/${cookieLanguage}/${json}`, function () {
          $.getScript(script, function () {
            $("#content").fadeIn(animationDuration);
          });
        });

        // Apply header
        inArrayMod();
        if (typeof callback == "function") {
          callback();
        }
      });
  });
}

function goto(page) {
  loadPage(`templates/${page}.html`, `js/pages/${page}.js`, `${page}.json`);
}

function inArrayMod() {
  var pageName = $(".page").attr("id");
  var hideHeader = ["welcome-page", "welcome-page-2"];
  var hideFooter = ["welcome-page", "welcome-page-2"];

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
}
