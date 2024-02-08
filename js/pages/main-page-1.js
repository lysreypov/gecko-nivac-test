var pageId = "#main-page-1";

function onFlipNextButtonClicked() {
  _goto("main-page-2", "next");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  header.show();
  if (chapStatus[0].isUnlock) {
    $(".btn").removeClass("locked");
  }
  if (chapStatus[0].isComplete) {
    $("#main-page-1 .btn1").hide();
    $("#main-page-1 .btn2").show();
  }

  checkActiveChap();
  if (checkUnlock === 1) {
    $(".btn").pulse();
  }
}

function gameHandle() {
  $(".btn").one("click", () => {
    _goto("chap1-content1-page");
  });
}
