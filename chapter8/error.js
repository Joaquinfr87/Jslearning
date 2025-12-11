// Al ser Javascript un lenguajes tan abierto y flexible da la contra
// de que cosas que no deberian suceder, suceden lo que pueden ocasionar 
// errores o bugs no deseables en nuestro codigo que son dificiles de encontrar
// o incluso dificiles de diagnosticar
// essos bugs pueden nunca manifestarse y correr por todo nuestro codigo dandonos
// una salida erronea que sera muy dificl de detectar

//Strict mode
//el modo stricto te ayuda a mantener una mejor sintaxis en tu codigo
//son alugnos aspectos que Javascript paso por alto a veces, y rellena los espacios 
//de codigo pero en strict mode esto ya no sucedera por lo que tendras un condigo
//mas stricto en su sintaxis y declaracion ayudandote a evitar errores

function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // oops
console.log(name);
// → Ferdinand

"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
// → TypeError: Cannot set property 'name' of undefined

//esta mal
function Persona(nombre){
  this.nombre = nombre
}
let franz = Persona("Franz")
console.log(nombre)

//esta bien
function Persona(nombre){
  this.nombre = nombre
}
let franz =new Persona("Franz")
console.log(franz.nombre)


//Types
//Javascript es un lenguaje muy abierto y nada estricto con los typos
//esto resulta en muchos errores, tanto de confusion como de bugs
//por eso es siempre una buena idea agregar un comentario sobre los tipos 
//o usar un dialecto de Javascript como Typescript


//Test 
//Es util escribir una funcion test que comprueba la efectividad de nuestro codigo
//para poder evitar errores
function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}
test("convert Latin text to uppercase", () => {
  return "hello".toUpperCase() == "HELLO";
});
test("Verificar que cuadrado de 5 sea 25", () => {
  return cuadrado(5) == 25;
});


//Debugging
//al momento de debuggear codigo en Javascript y en cualquier lengjuajee en general 
//se debe seguir un plan o estrategia para dar con la causa el bugg
//una estrategia: piensa, analiza y da un una posible respuesta del error 
//sigue observando hasta que pruebes la teoria, si aun no tienes la teoria sigue
//observando hasta tener una 
//unos cuantos console.log() puede ayudarte a observar mejor donde se encuentra el error
//o puedes usar el debugger del navegador


