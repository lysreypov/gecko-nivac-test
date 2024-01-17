$("#tip-btn").on("click", function (e) {
  e.preventDefault();
  $("#popup").show();
  $(".content").removeClass("close").addClass("open");
  $(this).fadeOut(200);
  setTimeout(function () {
    $(".desc").fadeIn(animationDuration);
  }, 600);
});

$("#close-btn").on("click", function (e) {
  e.preventDefault();
  $(".desc").fadeOut(animationDuration);
  $(".content").removeClass("open").addClass("close");
  setTimeout(function () {
    $("#popup").hide();
    $("#tip-btn").show();
  }, 600);
});
