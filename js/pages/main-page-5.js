var pageId = "#main-page-5";

function onFlipPrevButtonClicked() {
  _goto("main-page-4", "prev");
}

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  header.show();
  // if (chapStatus[4].isUnlock) {
  $(".btn").removeClass("locked");
  // }
  if (chapStatus[4].isComplete) {
    $("#main-page-5 .btn1").hide();
    $("#main-page-5 .btn2").show();
  }

  checkActiveChap();
  if (checkUnlock === 5) {
    $(".btn").pulse();
  }
}

function gameHandle() {
  $(".btn-skip").on("click", () => {
    $("#chap5-video")[0].currentTime = $("#chap5-video")[0].duration;
    $(".wait-video").fadeOut(100);
  });

  $(".btn").one("click", () => {
    _goto("chap5-content1-page");
  });
}
