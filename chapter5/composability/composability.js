// ejemplo creado para entender los composability

// usar el reduce propio 
function reduce(array,combinacion,inicial=0){
  let resultado=inicial;//=> este es el almacenador
  for(let e of array){
    resultado = combinacion(e,resultado);
  }
  return resultado;
}

//funciones de prueba (todas recursivas)
let factorial = (a)=>{
  if(a<2)return 1
  return a*factorial(a-1)
}
let pow=(a,n=2)=>{
  if(n==0)return 1
  if(n==1)return a
  return a*pow(a,n-1)
}
function digitosToArray(a,array = []){
  let r = Math.floor(Math.log10(a));
  if(a==0)return array
  array.push(Math.floor(a/pow(10,r)));
  return digitosToArray(a%(Math.pow(10, r)),array);
}

// declaracion de la funcion compose

const compose = (...funciones)=>{
  return(valor)=>{
    return reduce(funciones,(funcion,acumulador)=>{
      return funcion(acumulador)
    },valor)
  }
} 

// el compose hace lo siguiente digitosToArray(pow(factorial(10))) en ese orden
console.log(compose(factorial,pow,digitosToArray)(10))
// si quisiramos que el orden fuera al reves hariamos lo siguiente
console.log(compose(...[factorial,pow,digitosToArray].reverse())(10))


//otra forma de usar composability es esta con las funciones de alto orden
