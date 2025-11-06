let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado")
let validar = ()=>{
  if(isNaN(num1.value) || isNaN(num2.value))return false;
  return true;
}
let alerta=()=>{
  alert("ERROR.... num1 o num2 no son valores numericos")
}
let mostrarResultado = (result)=>{
  resultado.textContent = `El resultado es: ${result}`;
}

let sumar= () =>{
  if(validar()){
    let resultado = Number(num1.value)+Number(num2.value);
    return mostrarResultado(resultado);
  }
  return alerta();
}

let restar= () =>{
  if(validar()){
    let resultado = Number(num1.value)-Number(num2.value);
    return mostrarResultado(resultado);
  }
  return alerta();
}

let multiplicar= () =>{
  if(validar()){
    let resultado = Number(num1.value)*Number(num2.value);
    return mostrarResultado(resultado);
  }
  return alerta();
}

let dividir= () =>{
  if(validar()){
    let resultado = Number(num1.value)/Number(num2.value);
    return mostrarResultado(resultado);
  }
  return alerta();
}
