// ==================================================
// MENU CONTROL
// ==================================================

// Menu
var navExit = $("#exit");
var navMenu = $("#menu");
var navMenuClose = $("#menu-close");
var menuList = $(".menu li");
var menuUnlock = [false, false, false, false, false];
var chapStatus = [
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
];

function menuControl() {
  navExit.on("click", () => {
    _goto("welcome-page");
  });

  navMenu.on("click", () => {
    openMenu();
    unlockMenu();
  });

  navMenuClose.on("click", () => {
    closeMenu();
  });

  menuList.on("click", function () {
    var pageName = $(this).data("goto");

    closeMenu();
    _goto(pageName);
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

function unlockMenu() {
  var dataMenu = $(".page").data("menu");

  // Unlock menu
  menuList.each(function (index) {
    if (index < dataMenu) {
      $(this).removeClass("locked");
      menuUnlock[index] = true;
    }
  });

  // Active current menu
  $(".menu.active").removeClass("active");
  $(`.menu[data-menu=${dataMenu}]`).addClass("active");
}
