function rgbToHex(r, g, b) {
  // Convert each component to hexadecimal and concatenate them
  var hexR = r.toString(16).padStart(2, "0"); // Convert red component to hexadecimal
  var hexG = g.toString(16).padStart(2, "0"); // Convert green component to hexadecimal
  var hexB = b.toString(16).padStart(2, "0"); // Convert blue component to hexadecimal
  return "#" + hexR + hexG + hexB; // Concatenate the components with a '#' symbol
}

//-----------------------------------------------
//      Preload Imgage
//-----------------------------------------------
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
};

function offKey() {
  $(document).off("keydown");
}

function offSwipe(elem) {
  if ($.fn.swipe) {
    elem.swipe("destroy");
  }
}
