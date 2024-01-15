var popup = {
  init: function (elem) {
    this.guide(elem);
  },

  close: function (elem) {
    gsap.fromTo(
      $(".group-popup#" + elem),
      0.5,
      {
        scale: 1,
        alpha: 1,
        display: "block",
        ease: Power4.easeOut,
      },
      {
        scale: 0,
        alpha: 0,
        display: "none",
        ease: Power4.easeOut,
        delay: 0.1,
      }
    );
  },

  open: function (elem) {
    if (!$("#" + elem).children().length) {
      return gsap.fromTo(
        $(".group-popup#" + elem),
        1,
        {
          scale: 0,
          alpha: 1,
          display: "none",
          ease: Power4.easeOut,
        },
        {
          scale: 1,
          alpha: 1,
          display: "block",
          ease: Power4.easeOut,
          delay: 0.1,
        }
      );
    } else {
      gsap.fromTo(
        $(".group-popup#" + elem),
        1,
        {
          scale: 0,
          alpha: 1,
          display: "none",
          ease: Power4.easeOut,
        },
        {
          scale: 1,
          alpha: 1,
          display: "block",
          ease: Power4.easeOut,
          delay: 0.1,
        }
      );
    }
  },
};

$("#tip-btn").on("click", function () {
  popup.open("popup");
  $(this).fadeOut(animationDuration);
});

$("#close-btn").on("click", function () {
  popup.close("popup");
  $("#tip-btn").fadeIn(animationDuration);
});
