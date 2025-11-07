let ventana = ()=>{
  let frase = document.getElementById("frase").value;
  let palabras = frase.toLowerCase().split(" ");
  console.log(frase);
  console.log(palabras);
  let newWindow = window.open("","Resultado","width=900, height=400");
  let titulo = newWindow.document.createElement("h1");
  titulo.textContent="Resultado";
  newWindow.document.body.appendChild(titulo);
  newWindow.document.body.style.backgroundColor = "#ffffff"
  let contenedor = newWindow.document.createElement("div");
  contenedor.innerHTML = `<p>Numero de palabras: ${palabras.length}</p>
  <p>Primera palabra: ${palabras[0]}</p>
  <p>Ultima palabra: ${palabras[palabras.length-1]}</p>
  <p>Orden inverso: ${palabras.reverse()}</p>
  <p>Orden alfabetico: ${palabras.sort()}</p>
  <p>Order alfabetico inverso: ${palabras.sort().reverse()}</p>
  `;
  newWindow.document.body.appendChild(contenedor);
}
