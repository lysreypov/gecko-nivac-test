var pageId = "#main-page-3";

function onFlipPrevButtonClicked() {
  _goto("main-page-2", "prev");
}

function onFlipNextButtonClicked() {
  _goto("main-page-4", "next");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  header.show();
  if (chapStatus[2].isUnlock) {
    $(".btn").removeClass("locked");
  }
  if (chapStatus[2].isComplete) {
    $("#main-page-3 .btn1").hide();
    $("#main-page-3 .btn2").show();
  }

  checkActiveChap();
  if (checkUnlock === 3) {
    $(".btn").pulse();
  }
}

function gameHandle() {
  $(".btn").one("click", () => {
    _goto("chap3-content1-page");
  });
}
