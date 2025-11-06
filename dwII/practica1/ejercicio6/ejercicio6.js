let mostrarContenido = ()=>{
  document.getElementById("contenido").style.display = "block";
}
let desaparecerContenido = () => {
  document.getElementById("contenido").style.display = "none";
}
document.getElementById("enlace").onmousedown = mostrarContenido;
document.getElementById("enlace").onmouseup= desaparecerContenido;
