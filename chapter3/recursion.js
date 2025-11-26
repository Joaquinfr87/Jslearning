// el es la accion de llamar un funcion dentro de la funcion
// puedes verlo con una escalerar o una cadena de llaver que se van abriendo una dentro de toUpperCase()
// esto cuando hablamos de recursividad "lineal"

function factorial(n){
  if(n==1)return 1
  return n * factorial(n-1);// no puede ser n-- por que esa expresion modifica el n y no lo pone como parametro primero
}

//tambien tenemos las funciones recursivas como un arbol, que va aumentado sus raices en base a otras 
function fibonacci(n){
  if(n==1) return 1
  if(n==0) return 0
  return fibonacci(n-2)+fibonacci(n-1)
}
console.log(6);
