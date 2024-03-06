$.fn.clearAnim = function (elem) {
  $(this).removeClass("animate");
  gsap.killTweensOf($(this));
  if (typeof elem == "undefined") {
    gsap.set($(this), {
      clearProps: "all",
    });
  } else {
    gsap.set($(this), {
      clearProps: elem,
    });
  }
};

$.fn.pulse = function (obj) {
  if (typeof obj == "undefined") obj = {};
  if (typeof obj.delay == "undefined") obj.delay = 0.4;
  if (typeof obj.alpha == "undefined") obj.alpha = 0.5;
  if ($(this).get(0) && !$(this).data("pulseAnimation")) {
    // Check if animation is not already running
    $(this).data("pulseAnimation", true);
    gsap.to($(this), {
      alpha: obj.alpha,
      yoyo: true,
      repeat: obj.repeat || -1, // Simplified repeat option
      ease: Power1.easeOut,
      delay: obj.delay,
      onComplete: function () {
        $(this.target).data("pulseAnimation", false); // Reset animation flag when animation completes
      },
    });
  }
};
