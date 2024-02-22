var animationDuration = 500;

/*  loadPage life cycle
 *  1. empty the content
 *  2. load new content according to page
 *  3. apply the header/footer
 *  4. apply the theme
 */

function goto(page) {
  loadPage(`templates/${page}.html`, `js/pages/${page}.js`);
}

function loadPage(pagePath, script, callback) {
  $("#content").fadeOut(animationDuration, function () {
    $(this)
      .empty()
      .load(pagePath, function () {
        $.getScript(script, function () {
          $("#content").fadeIn(animationDuration);
        });

        if (typeof callback === "function") {
          callback();
        }
      });
  });
}
