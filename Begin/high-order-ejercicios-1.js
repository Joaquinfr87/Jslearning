//FACIL
let array = [1,2,3,4,5,6,7,8,9,10];
console.log(array.map(x=>x*2));

let array1 =["jose","maria","julio","bertho"];
console.log(array1.map(x=> x.toUpperCase()))

let array2 = [,1,2,3,4,5,6,7,8,9,10];
console.log(array2.filter(x=>x%2===0));

let array3 = ["Armando","Michael","Ana","Jose","Thiago"];
console.log(array3.filter(x=>x.length>5));

let array4 = [2,4,6,8,10,12,14,16,18,20];
console.log(array4.reduce((a,b)=>a+b))

let array5 = [1,2,3,4,5];
console.log(array5.reduce((a,b)=>a*b));

let array6=[1,3,5,7,11,13];
array6.forEach(x=>console.log(x))

let array7=[1,2,3,4,5,6,7,8,9,10];
console.log(array7.some(x=>x<0));

let array8=[1,2,3,4,5,6,7,8,9];
console.log(array8.every(x=>x<10));

let array9=[2,4,6,8,9,10];
console.log(array9.find(x=>x%2===1));

let array10=[0,5,7,8,2,1,9];
console.log(array10.sort((a,b)=>a>b));

let array11=["Gonzalo","Pedro","Ana","Alejandro"];
console.log(array11.sort((a,b)=>a.length>b.length));

function operacion(x,funcion){
  let result = funcion(x);
  return result;
}
console.log(operacion(4,function(x){
  let r = x*x;
  return r;
}));

let sum = (a)=>{
  return b => a+b;
}
console.log(sum(4)(10));

let obj = [{nombre:"Joaquin",edad:25},{nombre:"Jesus",edad:40},{nombre:"Alvaro",edad:24}];

console.log(obj.map(x=>({nombre:x.nombre})));

console.log(obj.map(function(x){
  return {nombre:x.nombre}
}))
