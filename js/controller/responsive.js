/*  ==================================================
    responsive.js || Update 24/02/24

    mode:                   single service
    to use:                 just complie this file with your project, and call responsive(), it will auto resize the element
    support:                desktop, mobile, tablet

    feature:
    calculateScreenSize:    adjust the scale of html font size
================================================== */

function responsive() {
  setScreen();
  calculateScreenSize();
  $(window).resize(function () {
    setScreen();
    calculateScreenSize();
  });
}

function setScreen() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  setHeight($("#main-container"));
  $("#main-container").css("width", "100%");
  // check mobile
  if (isMobile && !isTablet)
    $("#main-container").css("width", window.innerWidth);
  // check tablet
  else if (isTablet) $("#main-container").css("width", (height * 1080) / 1920);
  // desktop but width is less than 768 and ratio is more than 4:3 (like 4:3.1)
  else if (width <= height && (width / 3) * 4 >= height)
    $("#main-container").css("width", (height * 1080) / 1920);
  // desktop but width is less than 768
  else if (width <= height)
    $("#main-container").css("width", window.innerWidth);
  // desktop default
  else $("#main-container").css("width", (height * 1080) / 1920);
}

function setHeight($rightSidebar) {
  var new_height = $(this).height();
  if (typeof mobileSafari === "string") new_height += 60;
  $rightSidebar.css("height", new_height);
}

// control html font-size
function calculateScreenSize() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var font_size;
  // screen is mobile
  if (isMobile && !isTablet) {
    font_size = (width * 62.5) / 320;
    return $("html").css("font-size", font_size + "%");
  }
  // screen is more than 768
  if (width >= height) width = (height * 1080) / 1920;
  // screen is less than 768 but ratio is more than 4:3 (like 4:3.1)
  else if (width <= height && (width / 3) * 4 >= height)
    width = (height * 1080) / 1920;
  font_size = (width * 62.5) / 320;

  return $("html").css("font-size", font_size + "%");
}
