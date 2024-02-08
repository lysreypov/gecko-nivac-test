function create_popup(elem) {
  $(".group-popup#" + elem).empty();
  $(".group-popup#" + elem + "").load(
    "templates/components/popup.html",
    function () {
      loadLocalizableResources(
        "data/" + getCookie("lang") + "/popup.json",
        function () {
          $.getScript("js/controller/popup.js");
        }
      );
    }
  );
}

var popup = {
  init: function (elem) {
    this.guide(elem);
  },

  close: function (elem) {
    header.show();
    footer.show();
    //   $store["#main-page"].setPlayVideo = 0;
    gsap.to($(".group-popup#" + elem), 0.5, {
      y: 100,
      alpha: 0,
      display: "none",
      ease: Power4.easeOut,
    });
    setTimeout(function () {
      $(".group-popup#" + elem).empty();
    }, 150);
  },

  leave: function (elem) {
    gsap.to($(".group-popup#" + elem), 0.5, {
      y: 100,
      alpha: 0,
      display: "none",
      ease: Power4.easeOut,
    });
  },

  open: function (elem) {
    header.fadeOut(100);
    footer.fadeOut(100);
    // $store["#main-page"].setPlayVideo = 100;
    if (!$("#" + elem).children().length) {
      return (
        create_popup(elem),
        gsap.fromTo(
          $(".group-popup#" + elem),
          0.5,
          {
            y: 100,
            alpha: 0,
            display: "none",
            ease: Power4.easeOut,
          },
          {
            y: 0,
            alpha: 1,
            display: "block",
            ease: Power4.easeOut,
            delay: 0.1,
          }
        )
      );
    } else {
      gsap.fromTo(
        $(".group-popup#" + elem),
        0.5,
        {
          y: 100,
          alpha: 0,
          display: "none",
          ease: Power4.easeOut,
        },
        {
          y: 0,
          alpha: 1,
          display: "block",
          ease: Power4.easeOut,
          delay: 0.1,
        }
      );
    }
  },
};

$(".x-icon").on("click", function () {
  popup.close("popup");
});
