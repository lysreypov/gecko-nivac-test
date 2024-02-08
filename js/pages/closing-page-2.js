var pageId = "#closing-page-1";

function onFlipPrevButtonClicked() {
  _goto("closing-page-1", "prev");
}

function onFlipNextButtonClicked() {
  _goto("main-page-1");
}

$(function () {
  animationHandle();
  gameHandle();
  pdfControl();
});

function animationHandle() {
  header.show();
  setTimeout(() => {
    $(".congrat, .bao").show().insOnce();
    setTimeout(() => {
      $(".congrat-desc").fadeIn(animationDuration);
      setTimeout(() => {
        $(".group-content").fadeIn(animationDuration);

        setTimeout(() => {
          $(".btn-download").pulse();
        }, 1000);
      }, 1000);
    }, 1000);
  }, 400);
}

function gameHandle() {
  myVideo = new Video($("#result-video1-content"), {
    fullScreen: false,
  });
  setTimeout(() => {
    myVideo.play();
  }, 3000);
}

function pdfControl() {
  getLang();

  $(".btn-download").attr(
    "href",
    "assets/pdf/Montblanc_Competencies_&_Behaviours_Handout_screen_" +
      cookieLanguage +
      ".pdf#toolbar=0"
  );

  $(`.btn`).on(`click`, function () {
    $(this).clearAnim();
  });

  $(".btn-download").one("click", async function () {
    popup.open("popup");
    setTimeout(() => {
      $(".closing-page-2").hide();
    }, 500);

    // Fetch an existing PDF document
    var { PDFDocument, rgb } = PDFLib;
    var fontkit = window.fontkit;

    var pdfBytes = await fetch(
      "assets/pdf/Montblanc_Competencies_&_Behaviours_Handout_screen_" +
        cookieLanguage +
        ".pdf"
    ).then((res) => res.arrayBuffer());

    // Load a PDFDocument from the existing PDF bytes
    var pdfDoc = await PDFDocument.load(pdfBytes);
    await pdfDoc.registerFontkit(fontkit);

    pdfDoc.setTitle("Montblanc_Competencies_&_Behaviours_Handout_screen.pdf");
    var pdfDataUri = await pdfDoc.saveAsBase64();
    var byteCharacters = atob(pdfDataUri);
    var byteNumbers = new Array(byteCharacters.length);

    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], {
      type: "application/pdf;base64",
    });
    var url = window.URL.createObjectURL(file);

    var pdfBytes = await pdfDoc.save();

    $(".pdf-viewer iframe").attr(
      "src",
      "assets/pdf/web/viewer.html?file=" + url
    );

    $("#popup-pdf").fadeIn();
  });

  $(".x-icon").on("click", function () {
    $(this).clearAnim();
    $(".popup").fadeOut();
    $("#popup-pdf").fadeOut();

    _goto("main-page-1");
  });
}

function getLang() {
  if (!GetURLParameter("_lang")) {
    cookieLanguage = "en-gb";
  } else {
    cookieLanguage = GetURLParameter("_lang");
  }

  switch (cookieLanguage) {
    case "ar-ae":
      userLanguage = "Arabic";
      BCP47LanguageTag = "ar";
      break;
    case "bg":
      userLanguage = "Bulgarian";
      BCP47LanguageTag = "bg";
      break;
    case "bs":
      userLanguage = "Bosnian";
      BCP47LanguageTag = "bs";
      break;
    case "cs":
      userLanguage = "Czech";
      BCP47LanguageTag = "cs";
      break;
    case "da":
      userLanguage = "Danish";
      BCP47LanguageTag = "da";
      break;
    case "de":
      userLanguage = "German";
      BCP47LanguageTag = "de";
      break;
    case "en-gb":
      userLanguage = "English (UK)";
      BCP47LanguageTag = "en-GB";
      break;
    case "es":
      userLanguage = "Spanish";
      BCP47LanguageTag = "es";
      break;
    case "fi":
      userLanguage = "Finnish";
      BCP47LanguageTag = "fi";
      break;
    case "fr":
      userLanguage = "French";
      BCP47LanguageTag = "fr";
      break;
    case "hr":
      userLanguage = "Croatian";
      BCP47LanguageTag = "hr";
      break;
    case "hu":
      userLanguage = "Hungarian";
      BCP47LanguageTag = "hu";
      break;
    case "it":
      userLanguage = "Italian";
      BCP47LanguageTag = "it";
      break;
    case "ja":
      userLanguage = "Japanese";
      BCP47LanguageTag = "ja";
      break;
    case "ko":
      userLanguage = "Korean";
      BCP47LanguageTag = "ko";
      break;
    case "lt":
      userLanguage = "Lithuanian";
      BCP47LanguageTag = "lt";
      break;
    case "lv":
      userLanguage = "Latvian";
      BCP47LanguageTag = "lv";
      break;
    case "nl":
      userLanguage = "Dutch";
      BCP47LanguageTag = "nl";
      break;
    case "pl":
      userLanguage = "Polish";
      BCP47LanguageTag = "pl";
      break;
    case "pt":
      userLanguage = "Portuguese";
      BCP47LanguageTag = "pt-PT";
      break;
    case "ro":
      userLanguage = "Romanian";
      BCP47LanguageTag = "ro";
      break;
    case "ru":
      userLanguage = "Russian";
      BCP47LanguageTag = "ru";
      break;
    case "sl":
      userLanguage = "Slovenian";
      BCP47LanguageTag = "sl";
      break;
    case "sr":
      userLanguage = "Serbian";
      BCP47LanguageTag = "sr";
      break;
    case "tr":
      userLanguage = "Turkish";
      BCP47LanguageTag = "tr";
      break;
    case "el":
      userLanguage = "Greek";
      BCP47LanguageTag = "el";
      break;
    case "uk":
      userLanguage = "Ukrainian";
      BCP47LanguageTag = "uk";
      break;
    default:
      cookieLanguage = "en-gb";
      userLanguage = "English (UK)";
      BCP47LanguageTag = "en-GB";
  }

  setCookie("lang", cookieLanguage, 365);
  $("html").attr("lang", BCP47LanguageTag);
  loadLocalizableResources(
    "data/" + cookieLanguage + "/base.json",
    function () {
      loadLocalizableResources(
        "data/" + cookieLanguage + "/closing-page-2.json"
      );
    }
  );

  // $("#name").attr("placeholder", $(".place-type").text());
  // $("#surname").attr("placeholder", $(".place-type").text());
  // $("#date").attr("placeholder", $(".place-date").text());
}
