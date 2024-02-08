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
// End Create Cookie

// Get language parameter frome URL
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

function checkActiveChap() {
  var lastIndexUnlock = -1;

  for (var i = chapStatus.length - 1; i >= 0; i--) {
    if (chapStatus[i].isUnlock) {
      lastIndexUnlock = i;
      break;
    }
  }

  checkUnlock = lastIndexUnlock + 1;
}

function unlockChapter(no) {
  for (var i = 0; i < no; i++) {
    chapStatus[i].isUnlock = true;
  }
}

function completeChapter(no) {
  for (var i = 0; i < no; i++) {
    chapStatus[i].isComplete = true;
  }
}

$.fn.offClick = function () {
  $(this).css("pointerEvents", "none");
};

$.fn.onClick = function () {
  $(this).css({
    pointerEvents: "auto",
    cursor: "pointer",
  });
};

// Preload Imgage
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
};
