import { TresEnRaya } from "./algoritmo-v3.js";
let size = $("#tamano");
let condicion = $("#condicion")
let juego;
let turnos;
let matriz;

$("#generar").on("click", () => {
  let n = Number(size.val());
  if (!n || n < 1) { alert("El tamano no es correcto"); return; }
  if (condicion.val() > n) { alert("La condicion es muy alta"); return; }
  turnos = n * n;
  matriz = [];
  let table = $("<table></table>")
  for (let i = 0; i < n; i++) {
    matriz.push([]);
    let fila = $("<tr></tr>")
    for (let j = 0; j < n; j++) {
      let celda = $("<td></td>").text("").attr("data-i", i)
        .attr("data-j", j).on("click", celdaSeleccionada)
      matriz[i].push("");
      fila.append(celda)
    }
    table.append(fila)
  }
  juego = new TresEnRaya(matriz, Number(condicion.val()))
  $("#contenedor").html(table)
  console.log(matriz);
})

let cambioJugador = () => {
  let letra = 'x';
  return () => {
    if (letra == 'x') return letra = 'o'
    if (letra == 'o') return letra = 'x'
  }
}
let symbolo = cambioJugador();
let celdaSeleccionada = function () { //requiere function normal no arrow por que no reconoce el this
  if ($(this).text() != "") return alert("La celda ya esta marcada")
  let letra = symbolo()
  $(this).text(letra)
  turnos--
  let i = $(this).data("i")
  let j = $(this).data("j")
  matriz[i][j] = letra
  juego.matriz = matriz
  console.log(juego.matriz)

  if (turnos == 0) {
    alert("Empate")
    $("#generar").click();
    return
  }

  if (juego.evaluarJugador(letra)(i, j)) {
    alert(`Gana ${letra}`)
    $("#generar").click();
    return
  }
}



