// Preload Imgage
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
};

// Create Cookie
function setCookie(cName, cValue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
// END Create Cookie

// get lageuage parameter frome URL
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}

function isEmpty(el) {
  return !$.trim(el.html());
}

function isVertical() {
  if ($(window).height() > $(window).width()) {
    return true;
  } else {
    return false;
  }
}

function unlockChap(no) {
  for (var i = 0; i < no; i++) {
    chapterStatus[i].isUnlock = true;
  }
}

function completeChap(no) {
  for (var i = 0; i < no; i++) {
    chapterStatus[i].isComplete = true;
  }
}

$.fn.offClick = function () {
  $(this).css("pointerEvents", "none");
};

/**
 * GAME FUNCTIONALITY
 */

function resetGame() {
  // lock all chapters
  for (var i = 0; i < chapterStatus.length; i++) {
    chapterStatus[i].isUnlock = false;
  }

  // reset game answer for each chapter
  $store["#chapter1-game"].yourAns = [false, false];
  $store["#chapter2-game"].yourAns = [false, false];
  $store["#chapter3-game"].yourAns = [false, false];
  $store["#chapter4-game"].yourAns = [false, false];
  $store["#chapter5-game"].yourAns = [false, false];
}

function resetGameChapters() {
  $store["#chapter1-game"].question = 1;
  $store["#chapter2-game"].question = 3;
  $store["#chapter3-game"].question = 5;
  $store["#chapter4-game"].question = 7;
  $store["#chapter5-game"].question = 9;
}
