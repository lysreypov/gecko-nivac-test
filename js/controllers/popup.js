$("#tip-btn").on("click", function () {
  $("#popup").show();
  $(".content").removeClass("close").addClass("open");
  $(this).fadeOut(200);
  setTimeout(function () {
    $(".desc").fadeIn(animationDuration);
  }, 600);
});

$("#close-btn").on("click", function () {
  $(".desc").fadeOut(animationDuration);
  $(".content").removeClass("open").addClass("close");
  setTimeout(function () {
    $("#popup").hide();
    $("#tip-btn").show();
  }, 600);
});
