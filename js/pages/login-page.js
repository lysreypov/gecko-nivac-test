var loginBtn = $(".login-btn");
$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  setTimeout(() => {
    $("#password").pulse();
  }, 300);
}

function gameHandle() {
  $("#password").focus(function () {
    $(this).clearAnim();
    $(this).on("input", function (e) {
      password = e.target.value;
      if (password.length > 3) {
        loginBtn.removeClass("locked").pulse();
      }

      loginBtn.one("click", handleBtnClick);
      $(this).on("keydown", function (e) {
        if (e.which === 13) {
          e.preventDefault();
          handleBtnClick();
        }
      });
    });
  });
}

function handleBtnClick() {
  if (password === "1924") {
    _goto("correct-pwd-page");
  } else {
    _goto("incorrect-pwd-page");
  }
}
