//array
//
//los array son estructuras de datos encargadas de almacenar valores 
//dentro de ellas 
//puedes acceder a los valores dentro del array de la siguieten forma 

let numeros = [1,2,3,4,5,6,8];
numeros[1];

//metodos
//los array tienen diferentes tipos de metodos que hacen diferentes cosas 
console.log(numeros.length);
let word = 'Hola Mundo';
console.log(word.toUpperCase())

//tenemos tambien metodos para estructuras como lista, pilas 
let lista = [10,20,30,40];
lista.push(50);
lista.shift();
lista.unshift(5);

console.log(lista);




//Objetos en Javascript
let days = [
  {
    squirrel: false,
    events: ["work","touched tree","pizza","running"]
  }
];
console.log(days);
console.log(days[0].squirrel);
console.log(days.wolf);
