var pageId = "#main-page-2";

function onFlipPrevButtonClicked() {
  _goto("main-page-1", "prev");
}

function onFlipNextButtonClicked() {
  _goto("main-page-3", "next");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  header.show();
  if (chapStatus[1].isUnlock) {
    $(".btn").removeClass("locked");
  }
  if (chapStatus[1].isComplete) {
    $("#main-page-2 .btn1").hide();
    $("#main-page-2 .btn2").show();
  }

  checkActiveChap();
  if (checkUnlock === 2) {
    $(".btn").pulse();
  }
}

function gameHandle() {
  $(".btn").one("click", function () {
    _goto("chap2-content1-page");
  });
}
