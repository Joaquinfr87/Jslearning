// Función 1: Saludar
function saludar() {
  alert("¡Hola! Esta función viene de mi archivo JS");
  console.log("Función saludar ejecutada");
}

// Función 2: Cambiar color de fondo
function cambiarColor() {
  const colores = ["#ff9999", "#99ff99", "#9999ff", "#ffff99"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}

// Función 3: Calcular algo
function calcular() {
  const numero1 = 10;
  const numero2 = 5;
  const resultado = numero1 * numero2;

  document.getElementById("resultado").innerHTML =
    `Resultado: ${numero1} × ${numero2} = ${resultado}`;
}

// Función 4: Mostrar/Ocultar elemento
function mostrarOcultar() {
  const elemento = document.getElementById("contenido");

  if (elemento.style.display === "none") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}

// Función 5: Con parámetros
function operacionMatematica(operacion) {
  const a = 15;
  const b = 3;
  let resultado;

  switch (operacion) {
    case "suma":
      resultado = a + b;
      break;
    case "resta":
      resultado = a - b;
      break;
    case "multiplicacion":
      resultado = a * b;
      break;
    case "division":
      resultado = a / b;
      break;
  }

  alert(`Resultado de ${operacion}: ${resultado}`);
}

function ventana() {
  window.open(
    "https://example.com",
    "ventanaInfo",
    "width=600,height=400,top=100,left=100,resizable=yes,scrollbars=yes"
  );
  alert("Se abrio la nueva ventana")
}

