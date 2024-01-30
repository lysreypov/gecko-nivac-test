var pageId = "#welcome-page-2";

$(function () {
  animationHandle();
  gameHandle();
});

var myVideo;
function animationHandle() {
  setTimeout(() => {
    $(".step1").removeClass("hide");
    $(".wait-video").removeClass("hide");

    setTimeout(() => {
      $(".skip-video").fadeIn(500);
    }, 700);

    myVideo = new Video($("#welcome-video1"), {
      fullScreen: false,
      onEnd: function () {
        $(".wait-video").fadeOut(100);
        header.show();

        setTimeout(() => {
          $(".step2").fadeIn(1000);
          $(".content1-desc, .content2-desc, .point1, .point2").hide();
          $(".time, .text-time, .fade3").hide();
        }, 400);
        setTimeout(() => {
          $(".welcome-text").show().ins();
        }, 700);
        setTimeout(() => {
          $(".content1-desc").fadeIn(animationDuration);
        }, 2100);
        setTimeout(() => {
          $(".content2-desc").fadeIn(animationDuration);
          setTimeout(() => {
            $(".point1").fadeIn(animationDuration);
          }, 1000);
          setTimeout(() => {
            $(".point2").fadeIn(animationDuration);
          }, 1400);
          setTimeout(() => {
            $(".time, .text-time, .fade3").fadeIn(animationDuration);
            setTimeout(() => {
              $(".btn-start").pulse();
            }, 3000);
          }, 2000);
        }, 2500);
      },
    });

    myVideo.play();
  }, 400);
}

function gameHandle() {
  $(".btn-skip").on("click", () => {
    $("#welcome-video1")[0].currentTime = $("#welcome-video1")[0].duration;
    $(".wait-video").fadeOut(100);
  });

  $(".btn-start").one("click", () => {
    _goto("main-page-1");
  });
}
