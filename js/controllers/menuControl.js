// ==================================================
// MENU CONTROL
// ==================================================

var chapterStatus = [
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
  { isUnlock: false, isComplete: false },
];

function menuControl() {
  logoutBtn.on("click", function () {
    resetGame();
    _goto("select-lang-page");
  });
}

function textChapStatusControl() {
  let chapterList = $(".text-chapter");
  chapterList.each(function (index) {
    let chap = chapterStatus[index];
    if (chap.isUnlock) {
      $(this).removeClass("inactive").addClass("active");
    } else {
      $(this).removeClass("active").addClass("inactive");
    }
  });
}
