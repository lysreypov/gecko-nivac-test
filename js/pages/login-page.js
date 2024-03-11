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

      loginBtn.removeClass("locked").pulse();
    });
  });

  loginBtn.one("click", handleBtnClick);
  $("#password").on("keydown", function (e) {
    if (e.which === 13) {
      e.preventDefault();
      handleBtnClick();
    }
  });
}

function handleBtnClick() {
  if (password === "1924") {
    _goto("correct-pwd-page");
  } else {
    _goto("incorrect-pwd-page");
  }
}

// $(function () {
//   animationHandle();
//   gameHandle();
// });

// function animationHandle() {
//   setTimeout(() => {
//     $("#password").pulse();
//   }, 200);
// }

// var password = "";
// function gameHandle() {
//   $("#password").focus(function () {
//     $(this).clearAnim();
//     $("#password").on("input", function (e) {
//       $(this).clearAnim();
//       password = e.target.value;
//       if (password.length > 3) {
//         $(".login-btn").removeClass("locked").pulse();
//       }
//     });
//   });

//   // Handle login button click
//   $(".login-btn").one("click", function () {
//     if (password === "1924") {
//       _goto("correct-pwd-page");
//     } else {
//       _goto("incorrect-pwd-page");
//     }
//   });
// }
