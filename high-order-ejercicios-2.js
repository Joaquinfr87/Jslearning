let array =["Jose","Pablo","Manolo","Camargo"];
console.log(array.map(x=>x.length));

let array1 =[{nombre:"Joaquin",edad:45},{nombre:"Alvaro",edad:78},{nombre:"Manolo",edad:10}];
console.log(array1.filter(x=>x.edad>18));

let array2 = [1,2,3,4,5,6,7,8,9,10];
console.log(array2.filter(x=>x%2===0).reduce((a,b)=>a+b));

let array3 = ["atomo","jose","alicate","vaca","Alfafor","alimaña","venado"];
console.log(array3.filter(x=>x[0].toLowerCase()==="a"));
console.log(array3.filter(x=>x[0]==="a"||x[0]==="A"));

let palabra = prompt("Ingrese la palabra");

console.log(palabra.split("").reduce((a,b)=>{
  a[b]=(a[b]||0)+1;
  return a;
},{}));

let objeto = [{nombre:"Nicolas"},{nombre:"Joaquin"},{nombre:"Jhoan"},{nombre:"Jose"},];
console.log(objeto.every(x=>x.hasOwnProperty("nombre")));

let producto = [
  {nombre:"Yupi",precio:450},
  {nombre:"Celular",precio:780},
  {nombre:"Playstation",precio:50000},
  {nombre:"Laptop",precio:78000}
];
console.log(producto.find(x=>x.precio>1000))

function factorial(x){
  if(x<1){
    return 1;
  }
  return x * factorial(x-1);
}
function run(x,funcion){
  return funcion(x);
}
console.log(run(5,factorial))


function pow(a,b){
  if(b<1)return 1;
  return a * pow(a,b-1)
}
function recorrido(a,b,funcion){
  let r = funcion(a,b);
  return function(y){
    return funcion(y,r);
  }
}
console.log(recorrido(2,2,pow)(2));

let objetos = [
  {id:1,valor:"queso"},
  {id:2,valor:"tomate"},
  {id:3,valor:"piña"}
];
console.log(objetos);
console.log(objetos.reduce(
  (a,b)=>{
    a.push({clave_valor:`${b.id}: ${b.valor}`});
    return a
  }
  ,[]));
