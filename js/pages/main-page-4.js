var pageId = "#main-page-4";

function onFlipPrevButtonClicked() {
  _goto("main-page-3", "prev");
}

function onFlipNextButtonClicked() {
  _goto("main-page-5", "next");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  header.show();
  if (chapStatus[3].isUnlock) {
    $(".btn").removeClass("locked");
  }
  if (chapStatus[3].isComplete) {
    $("#main-page-4 .btn1").hide();
    $("#main-page-4 .btn2").show();
  }

  checkActiveChap();
  if (checkUnlock === 4) {
    $(".btn").pulse();
  }
}

function gameHandle() {
  $(".btn").one("click", () => {
    _goto("chap4-content1-page");
  });
}
