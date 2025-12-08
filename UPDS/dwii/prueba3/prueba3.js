let parrafo = document.getElementById("parrafo1");
parrafo.textContent = "Texto dado desde javascript"
//eventos
let mostrarMensaje = ()=>{
  alert("Este en un mensaje mandado desde una funcion externa");
}
let mostrarMensaje2 = ()=>{
  alert("Este es otro mensaje");
  console.log("Nada que ver aqui")
}
//eventos aninimas
document.getElementById("divsito").onclick=mostrarMensaje2;

function verDatos(){
  let texto1 = document.getElementById("texto1").value;
  let pass = document.getElementById("password1").value;
  alert(texto1+" "+pass);
}
