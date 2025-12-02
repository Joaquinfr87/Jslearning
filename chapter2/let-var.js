//let tiene un rango mas reducido no puede salir del {} donde fue creado
let x = 0

if(true){
 console.log(x)
}

if(true){
  let x =10
  console.log(x)
}
console.log(x)


console.log("------------");
// var
//var si puede salir del bloque, pero no sale de la funcion, las declareaciones dentro
//for o if salen del bloque
var y = 0
if(true){
 console.log(y)
}

if(true){
  var y =10
  console.log(y)
}
console.log(y)
