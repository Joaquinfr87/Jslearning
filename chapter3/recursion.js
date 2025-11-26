// el es la accion de llamar un funcion dentro de la funcion
// puedes verlo con una escalera o una cadena de llaves que se van abriendo una dentro de otra
// esto cuando hablamos de recursividad "lineal" o cuando la llamado de la funcion se da sola una vez 
// dentro de la funcion

function factorial(n){
  if(n==1)return 1
  return n * factorial(n-1);// no puede ser n-- por que esa expresion modifica el n y no lo pone como parametro primero
}

//tambien tenemos las funciones recursivas como un arbol, que va aumentado sus raices en base a otras 
//son aquellas que se llaman mas de una vez dentro de
function fibonacci(n){
  if(n==1) return 1
  if(n==0) return 0
  return fibonacci(n-2)+fibonacci(n-1)
}
console.log(fibonacci(8));//=> 21
