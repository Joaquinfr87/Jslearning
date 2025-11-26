//programar se trata de abstraer procesos que parecen complejos
//en resultados simple y concretos con los cuales puedas 
//crear y construir progrmas mas grandes

// por esa razon existen las funciones de alto orden 
// son funciones que toman como parametros otras funciones
// de esta forma podemos realizar operacion que parecen complejas
// de un afomral mas sencilla y entendible para el programador


// fucniones que toman como parametros otras funciones
function repetirAccion(n,action){
  for(let i = 0 ; i<n; i++){
    action(i);
  }
}
repetirAccion(5,console.log);
repetirAccion(3,(i)=>{console.log(i*2)});
repetirAccion(5,(i)=>{
  let n = i;
  repetirAccion(i,(i)=>{
    console.log(n," ",i);
  })
})

//funciones que retornan funciones
function MasGrandeQue(n){
  return m => m>n
}
let MasGrandeQue10 = MasGrandeQue(10)
console.log(MasGrandeQue10(11))//=> true
console.log(MasGrandeQue10(9))// => false

//funciones que modifican funciones y las devuelven
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
console.log(noisy(Math.min)(3, 2, 1));
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1


//funciones que dan un nuevo control de flujo
function hastaQue(test,then){
  if(!test)then();
}
repetirAccion(5,n=>hastaQue(n%2==0,()=>{
  console.log(n," es Impar");
}))

//las funciones de alto orden brillan cuando se habla de manejo y procesamiento de datos 
//filtering datos
let objetos = [
  {id:1,nombre:"Cubo 3x3",categoria:"Puzzle"},
  {id:2,nombre:"Cubo 4x4",categoria:"Puzzle"},
  {id:3,nombre:"Guantes",categoria:"Ropa"},
  {id:4,nombre:"Pantalon",categoria:"Ropa"}
]

function filter(array,test){
  let validos= [];
  for(let e of array){
    if(test(e)) validos.push(e);
  }
  return validos;
}
console.log(filter(objetos,(e)=>{
  return e.categoria == "Puzzle";
}))
console.log(filter(objetos,(e)=>{if(e.id%2==0)return true})) 
console.log(filter(objetos,e=>e.id%2==0)) //   este es igual al de arriba pero mas corto



//map
//tranforma un array y lo devulve como un nuevo array
function map(array,transform){
  let transformado = [];
  for(let e of array){
    transformado.push(transform(e));
  }
  return transformado;
}

console.log(map(objetos,(e)=>{
  return e.nombre;
}))
console.log(map(objetos,e=> e.nombre))
//las dos lineas del codigo hacen lo mismo, pero uno lo hace simplificado


//reduce
//otra operacion muy usada es la de operarar todos los elementos de un array
//en un resultado y retornarlo 
//como su nombre indica ca reduciendo todos los elementos a un unico valor
function reduce(array,combinacion,inicial=0){
  let resultado=inicial;//=> este es el almacenador el inicial es muy
  //importante para cuando se vayan a hacer uso de los compose por ejemplo ver en
  //  ./composability
  for(let e of array){
    resultado = combinacion(e,resultado);
  }
  return resultado;
}
console.log(reduce([1,2,3,4,5,6,7,8,9,10],(inicio,almacenador)=>{
  return inicio+almacenador
}))// el codigo de abajo hace lo mismo , pero esta mas simplificado
console.log(reduce([1,2,3,4,5,6,7,8,9,10],(a,b)=>a+b));

console.log(reduce([1,2,3,4,5,6,7,8,9,10],(a,b)=>a*(b==0?1:b)))


//composibility
//se trata de acoplar codigo entre si para crear funciones mas complejas
// ver en ./composability para enteder mejor
let sumar10 = a => a+10
let duplicar = a => a*2

let procesar = a => duplicar(sumar10(a));
console.log(procesar(10));
 

//
