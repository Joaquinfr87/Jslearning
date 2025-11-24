// ejemplo creado para entender los composability

// usar el reduce propio 
function reduce(array,combinacion){
  let resultado=0;//=> este es el almacenador
  for(let e of array){
    resultado = combinacion(e,resultado);
  }
  return resultado;
}


