$(function () {
  animationHandle();
  pdfControl();
});

function animationHandle() {}

function pdfControl() {
  $(".btn-download").attr(
    "href",
    "assets/pdf/Montblanc_Competencies_&_Behaviours_Handout_screen.pdf#toolbar=0"
  );

  var downloadPDF = async function () {
    // Fetch an existing PDF document
    var { PDFDocument, rgb } = PDFLib;
    var fontkit = window.fontkit;

    var pdfBytes = await fetch(
      "assets/pdf/Montblanc_Competencies_&_Behaviours_Handout_screen.pdf"
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

    $("#pdf").fadeIn();
  };

  $(".x-icon").one("click", function () {
    $(this).clearAnim();
    $("#pdf").fadeOut();

    _goto("login-page");
  });

  downloadPDF();
}
