let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado")
let validar = ()=>{
  if(isNaN(num1.value)&&isNaN(num2.value)){
    alert("ERROR... ingrese numero en los valores para numero 1 y numero 2")
    return false;
  }else{
    return true;
  }
}
let sumar= ()=>{
  if(validar()){
    let suma = Number(num1.value) + Number(num2.value);
    resultado.textContent= suma;
  }
};
