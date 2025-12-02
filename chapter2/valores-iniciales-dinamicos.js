// existen varias formas de establecer valores dinamicos para objetos y otros
// con en lenguaje de javascript

// que paso si queremos establecer un objeto con propiedades dinamicas y que los valores
// tambien se vayan moficando de manera dinamica
// tenemos unas cuantas opciones para realizar esto

let obj = {}

for(let i=0;i<20; i++){
  for(let j=0;j<Math.random()*100;j++){
    obj["valor "+i] = (obj["valor "+i]??0)+1;
  }
}
/* el resultado seria tal que asi{
valor 0:	18
valor 1:	10
valor 2:	17
valor 3:	8
valor 4:	5
valor 5:	13*/


// podemos hacerlo de varias formas
obj["valor"+i] = obj["valor"+i]+1||1
//esta forma es buena pero si por alguna razon llegamos a cero entonces el valor se reiniciara en 1
//para contadores no es tan buena
obj["valor"+i] = (obj["valor"+i]??0)+1
//esta evalua siempre si el valor no sea null o undefined es la mejor opcion 
obj["valor"+i] = obj["valor"+i]?obj["valor"+i]+1:0
//esta utilizamod un operador ternario parecido al primero hay que tener cuidado con llegar a 0
//el menos util
// 
// si trabajermos con string u otro tipo de datos entonces el uso de uno u otro
// sera mejor en ciertos escenarios
