var pageId = "#main-page";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  let chapterList = $(".chapter");
  let countIsUnlock = 0;

  chapterList.each(function (index) {
    let chap = chapterStatus[index];
    if (chap.isUnlock) {
      countIsUnlock++;
      $(this).removeClass("locked");
    }
  });

  setTimeout(function () {
    $(".chapter-" + countIsUnlock).pulse();
  }, 1000);

  var myVideo = new Video($(".video-background"), {
    fullScreen: false,
    onStart: function () {},
  });
  myVideo.play();
}

function gameHandle() {
  $(".chapter").one("click", function () {
    if (!$(this).hasClass("locked")) {
      resetGameChapters();
      _goto($(this).data("goto"));
    }
  });
}

preloadImages("chapter-game");
