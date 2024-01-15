$("#tip-btn").on("click", function () {
  $("#popup").show();
  $(this).fadeOut(animationDuration);
  setTimeout(function () {
    $(".desc").fadeIn(animationDuration);
  }, 400);
});

$("#close-btn").on("click", function () {
  $(".desc").fadeOut(animationDuration);
  $("#popup").hide();
  $("#tip-btn").fadeIn(animationDuration);
});
