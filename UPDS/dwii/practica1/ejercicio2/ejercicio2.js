let num1 = document.getElementById("num1");
let resultado = document.getElementById("resultado");

let numeros = [];
let collatz = (n) => {
  numeros.push(n)
  if (n == 1) return numeros
  if (n % 2 == 0)return collatz(n / 2)
  return collatz((n * 3) + 1)
}

let collatzMostrar = ()=>{
  resultado.textContent = "Resultado: ";
  resultado.innerHTML+="<br>";
  collatz(Number(num1.value));
  for(let e of numeros){
    resultado.innerHTML+= `${e}<br>`;
  }
  numeros=[];
}


