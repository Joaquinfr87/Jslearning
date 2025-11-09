$(document).ready(() => {
  $("h1").html("modificado por jQuery");
  $("#uno").click(() => {
    let cambiara = $("#cambiara");
    $("#cambiara").text("Cambio concha tu mare");
    $("#cambiara").css("color", "red");
    $("#cambiara").append(" Tu madre");
    cambiara.prepend("HAHAHAHHAHAHAHAHA ");
  })
  $(document).click(() => {
   $("body").css("background-color","blue");
  }
  )
});
