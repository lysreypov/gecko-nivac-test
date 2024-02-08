$.fn.clearAnim = function (elem) {
  $(this).removeClass("animate");
  gsap.killTweensOf($(this));

  if ($(this).get(0)) {
    if (typeof elem == "undefined") {
      gsap.set($(this), {
        clearProps: "all",
      });
    } else {
      gsap.set($(this), {
        clearProps: elem,
      });
    }
  }
};

$.fn.scale = function (obj) {
  if (typeof obj == "undefined") obj = {};
  if (typeof obj.delay == "undefined") obj.delay = 0;
  if (typeof obj.alpha == "undefined") obj.alpha = 1;
  if ($(this).get(0)) {
    gsap.fromTo(
      $(this),
      2,
      {
        scale: 0.5,
        alpha: obj.alpha,
        display: "block",
        ease: Power4.easeOut,
      },
      {
        scale: 1,
        alpha: obj.alpha,
        display: "block",
        ease: Power4.easeOut,
        delay: obj.delay,
      }
    );
  }
};

$.fn.pulse = function (obj) {
  if (typeof obj == "undefined") obj = {};
  if (typeof obj.delay == "undefined") obj.delay = 0.4;
  if (typeof obj.alpha == "undefined") obj.alpha = 0.5;
  if ($(this).get(0)) {
    gsap.to($(this), {
      alpha: obj.alpha,
      yoyo: true,
      repeat:
        typeof obj.repeat === "undefined"
          ? -1
          : obj.repeat % 2 == 0
            ? (obj.repeat += 1)
            : (obj.repeat += 2),
      ease: Power1.easeOut,
      delay: obj.delay,
    });
  }
};

$.fn.pulseTwices = function (delay, duration) {
  if (typeof delay == "undefined") delay = 0;
  if (typeof duration == "undefined") duration = 0.6;
  if ($(this).get(0)) {
    gsap.to($(this), {
      alpha: 0.3,
      yoyo: true,
      repeat: 3,
      ease: Linear,
      duration: duration,
      delay: delay,
    });
  }
};

$.fn.ins = function (delay) {
  if (typeof delay === "undefined") delay = 0;

  if ($(this).get(0)) {
    gsap.fromTo(
      $(this),
      0.4,
      {
        x: "-120%",
        alpha: 0,
      },
      {
        x: 0,
        alpha: 1,
        duration: 0.7,
        ease: Power1.linear,
      }
    );

    gsap.to($(this), 0.25, {
      alpha: 0.3,
      yoyo: true,
      repeat: 3,
      ease: Power0.easeOut,
      delay: delay + 0.5,
    });
  }
};

$.fn.insOnce = function (delay) {
  if (typeof delay === "undefined") delay = 0;

  if ($(this).get(0)) {
    gsap.fromTo(
      $(this),
      0.4,
      {
        x: "-120%",
        alpha: 0,
      },
      {
        x: 0,
        alpha: 1,
        duration: 0.7,
        ease: Power1.linear,
      }
    );

    gsap.to($(this), 0.25, {
      alpha: 0.3,
      yoyo: true,
      repeat: 1,
      ease: Power0.easeOut,
      delay: delay + 0.5,
    });
  }
};

$.fn.floatLeft = function (delay) {
  if (typeof delay === "undefined") delay = 0;

  if ($(this).get(0)) {
    gsap.fromTo(
      $(this),
      1,
      {
        x: "-120%",
        alpha: 0,
      },
      {
        x: 0,
        alpha: 1,
        duration: 0.7,
        ease: Power1.linear,
      }
    );
  }
};

$.fn.floatRight = function (delay) {
  if (typeof delay === "undefined") delay = 0;

  if ($(this).get(0)) {
    gsap.fromTo(
      $(this),
      1,
      {
        x: "120%",
        alpha: 0,
      },
      {
        x: 0,
        alpha: 1,
        duration: 0.7,
        ease: Power1.linear,
      }
    );
  }
};
