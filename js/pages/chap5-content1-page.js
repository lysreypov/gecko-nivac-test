var pageId = "#chap5-content1-page";

function onFlipPrevButtonClicked() {
  _goto("main-page-5", "prev");
}

$(function () {
  animationHandle();
  gameHandle();
});

var myVideo;
function animationHandle() {
  setTimeout(() => {
    $(".wait-video").removeClass("hide");

    setTimeout(() => {
      $(".skip-video").fadeIn(animationDuration);
    }, 700);

    myVideo = new Video($("#chap5-video"), {
      fullScreen: false,
      onEnd: function () {
        header.show();
        footer.show();
        $(".wait-video").fadeOut(100);
        $(".chap5-content1-page").show();

        $(".quotation-left").floatLeft();
        $(".quotation-right").floatRight();

        setTimeout(() => {
          $(".quote-anim").fadeIn(animationDuration);
          setTimeout(() => {
            $(".chap-desc").fadeIn(animationDuration);
            setTimeout(() => {
              $(".instruction").show().ins();
              setTimeout(() => {
                $(".group-button").fadeIn(animationDuration);
              }, 700);
            }, 700);
          }, 1000);
        }, 1000);
      },
    });

    myVideo.play();
  }, 400);
}

function gameHandle() {
  $(".btn-skip").on("click", () => {
    $("#chap5-video")[0].currentTime = $("#chap5-video")[0].duration;
    $(".wait-video").fadeOut(100);
  });

  $(".btn-individual").one("click", function () {
    _goto("chap5-individual-game1");
  });

  $(".btn-team").one("click", function () {
    _goto("chap5-team-game1");
  });
}
