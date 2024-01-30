// ==================================================
// MENU CONTROL
// ==================================================

// Menu
var navExit = $("#exit");
var navMenu = $("#menu");
var navMenuClose = $("#menu-close");

function menuControl() {
  navExit.on("click", () => {
    _goto("welcome-page");
  });

  navMenu.on("click", () => {
    openMenu();
  });

  navMenuClose.on("click", () => {
    closeMenu();
  });
}

function openMenu() {
  $(".menu-overlay").fadeIn("fast");
  gsap.fromTo(
    ".menu",
    0.5,
    { x: -50 },
    {
      x: 0,
      onComplete: function () {
        $(".menu").clearAnim();
      },
    }
  );
}

function closeMenu() {
  gsap.to(".menu", 0.5, {
    x: -50,
    onComplete: function () {
      $(".menu").clearAnim();
    },
  });
  $(".menu-overlay").fadeOut();
}
