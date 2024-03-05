$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  setTimeout(() => {
    $("#password").pulse();
  }, 200);
}


function gameHandle() {
  $("#password").focus(function () {
    $(this).clearAnim();
    $(this).on("input", function (e) {
      password = e.target.value;
      if (password.length > 3) {
        $(".login-btn").removeClass("locked").pulse();

        $(".login-btn").one("click", function () {
          if (password === "1924") {
            _goto("correct-pwd-page");
          } else {
            _goto("incorrect-pwd-page");
          }
        });
      }
    });
  });
}
