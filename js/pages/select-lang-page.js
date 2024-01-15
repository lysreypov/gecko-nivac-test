var pageId = "#select-lang-page";

$(function () {
  animationHandle();
  gameHandle();
});

function animationHandle() {
  customizeSelectsObject($("#languageSelect"));

  $(".enter-btn").addClass("locked");

  var myVideo = new Video($(".video-background"), {
    fullScreen: false,
    onStart: function () {},
  });
  myVideo.play();
}

function gameHandle() {
  $("#languageSelect").on("change", function () {
    cookieLanguage = $(this).val();

    switch (cookieLanguage) {
      case "en-gb":
        userLanguage = "English -(UK)";
        BCP47LanguageTag = "en-GB";
        break;
      case "fr":
        userLanguage = "French";
        BCP47LanguageTag = "fr";
        break;
      default:
        cookieLanguage = "en-gb";
        userLanguage = "English (UK)";
        BCP47LanguageTag = "en-GB";
        break;
    }

    // save as cookie language
    setCookie("lang", cookieLanguage, 365);

    // save as html language
    $("html").attr("lang", BCP47LanguageTag);

    $.get("data/" + cookieLanguage + "/select-lang-page.json", function () {
      setCookie("lang", cookieLanguage, 365);
      loadLocalizableResources(
        "data/" + cookieLanguage + "/select-lang-page.json"
      );
      loadLocalizableResources("data/" + cookieLanguage + "/base.json");
    }).fail(function () {
      cookieLanguage = "en-gb";
      setCookie("lang", cookieLanguage, 365);
      loadLocalizableResources("data/en-gb/select-lang-page.json");
      loadLocalizableResources("data/en-gb/base.json");
    });

    $(".enter-btn").removeClass("locked").pulse();
  });

  $(".enter-btn").on("click", function () {
    if (
      $("#languageSelect").val() == null ||
      $("#languageSelect").val() == ""
    ) {
      return;
    } else {
      $(this).clearAnim();
      _goto($store[pageId].nextPage);
    }
  });
}

preloadImages("welcome-page");
