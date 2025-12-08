let contenedor = document.getElementById("contenedor");
let elementos = [];

let agregar=()=>{
  let nuevo = document.createElement("p");
  nuevo.textContent="Soy un nuevo elemento";
  elementos.push(nuevo);
  contenedor.appendChild(nuevo);
}
