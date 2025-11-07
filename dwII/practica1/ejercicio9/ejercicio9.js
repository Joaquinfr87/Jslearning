let navegador = document.getElementById("navegador");
let pagina = document.getElementById("pagina");
let caracter = document.getElementById("caracter");
let codigo = document.getElementById("codigo")

document.addEventListener("mousemove", (e)=>{
  navegador.textContent = `[${e.clientX}], [${e.clientY}]`;
  pagina.textContent = `[${e.pageX}], [${e.pageY}]`;
})
document.addEventListener("keydown",(e)=>{
  caracter.textContent = `[${e.key}]`;
  document.getElementById("teclado").style.backgroundColor="#CCE6FF";
  codigo.textContent = `[${e.keyCode}]`
} )
let colorRaton = ()=>{
  document.getElementById("raton").style.backgroundColor = "#FFFFCC";
}
document.addEventListener("click", colorRaton);
document.addEventListener("mousemove",()=>{
  document.getElementById("raton").style.backgroundColor = "#FFFFFF";
  document.getElementById("teclado").style.backgroundColor="#FFFFFF";
})
