$.fn.clearAnim = function (elem) {
  $(this).removeClass("animate");
  if ($(this).get(0)) {
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

$.fn.moveUpDown = function (distance, duration) {
  if (typeof distance == "undefined") distance = 40;
  if (typeof duration == "undefined") duration = 0.7;
  return this.each(function () {
    gsap.to($(this), {
      y: distance,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });
};

$.fn.moveLeftRight = function (initPos, targetPos, duration) {
  if (typeof distance == "undefined") initPos = initPos;
  if (typeof distance == "undefined") targetPos = targetPos;
  if (typeof duration == "undefined") duration = 0.7;

  return this.each(function () {
    gsap.fromTo(
      $(this),
      {
        x: initPos,
      },
      {
        x: targetPos,
        duration: duration,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  });
};

$.fn.shake = function (anim, callback) {
  if (typeof anim == "undefined" || anim == null) anim = "4";
  var self = this;
  gsap.fromTo(
    $(self),
    0.08,
    {
      x: "-" + anim,
    },
    {
      x: anim,
      yoyo: true,
      repeat: 7,
      ease: Power1.linear,
      onComplete: function () {
        $(self).css("transform", "none");
      },
    }
  );
};
