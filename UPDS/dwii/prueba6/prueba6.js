let toggleColor = () => {
  let color = "blue";
  return () => {
    if (color == "blue") return color = "red"
    if (color == "red") return color = "blue"
  }
}



$(document).ready(() => {
  let casillas = $(".casilla");
  let matriz = [];
  let turno = $("#turno");
  for (let i = 0; i < 3; i++) {
    let valor = i * 3;
    matriz.push([$(casillas[valor]), $(casillas[valor + 1]), $(casillas[valor + 2])]);
  }

  let cambiarTurno = (color)=>{
    if(color=="red")turno.text("Azul")
    else turno.text("Rojo")
  }

  let color = toggleColor();
  let colortemporal;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //no se pueden usar arrow functions por que el this no tomara el valor adecuado
      $(matriz[i][j]).on("click", function () {
        colortemporal = color();
        cambiarTurno(colortemporal);
        $(this).css("background-color", colortemporal);
      })
    }
  }

  $("#reiniciar").click(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          $(matriz[i][j]).css("background-color", "white");
      }
    }
  })
});
