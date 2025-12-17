// Al ser Javascript un lenguajes tan abiertos y flexible, tiene una contra
// de que cosas que no deberian suceder, suceden lo que pueden ocasionar 
// errores o bugs no deseables en nuestro codigo que son dificiles de encontrar
// o incluso dificiles de diagnosticar
// essos bugs pueden nunca manifestarse y correr por todo nuestro codigo dandonos
// una salida erronea que sera muy dificl de detectar

//Strict mode
//el modo stricto te ayuda a mantener una mejor sintaxis en tu codigo
// alugnos aspectos que Javascript paso por alto a veces, y rellena los espacios 
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

//error propagation
//EL codigo que uno puede escribir puede cumplir con el objetivos que el mismo programador 
//le haya dado, pero esto tomando en cuenta que el codigo solo sera corrido por la misma persona
//que la creo, pero el codigo es compartido con demas personas que pueden no entender o conocer nuestro
//codigo y pueden provocar errores, debemos manejar estos errores de alguna forma para poder mantener
//el codigo corriendo sin qeu crashee
//por ejemplo esta funcion que valida si una variables es un numero
function promptNumber(question) {
  let result = Number(prompt(question));
  // Si el resultado no es un número (NaN), devuelve null
  if (Number.isNaN(result)) return null;
  // Si todo salió bien, devuelve el número
  else return result;
}
// el hecho que bote null es muy ambiguo, y no da una solucion verdadera al error 
// pues null puede ser un resultado esperado dependiendo del contexto del codigo 
// que estamos creando 
function lastElement(array) {
  if (array.length == 0) {
    return {failed: true};
  } else {
    return {value: array[array.length - 1]};
  }
}
// otra solucion que podemos dar, es un resultado con un objeto explicito
// que nos diga si es que existe o no un error
// aun asi debemos de tener cuidado de hacerla, puesto que puede hacer
// nuestro codigo repetitivo y dificil de leer

//exceptions
//una manera mucho mas segura de atrapar errores en javascript es mediante el uso 
//del las herramientas throw, try, catch 
//estan nos ayudan a no tener que tener que validar en cada funcion o bloque de codigo que hagamos
//por lo que habra funciones que quedaran libres, dando un codigo mas legible y limpio
function promptDirection(question) {
  letaresult = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
//Cleaning up after exceptions
//ahora si bien la excepciones nos ayudan a controlar los errores, estas pueden parar el flujo de nuestro codigo
//y dejarlo sin terminar en una corrida infinita, y podemos tener erroes pues antes de que ocurriera la excepcion puede haberse modificado
//muchas variablese y datos por lo que puede causar en errores y perdida de informacion graves
//para eso podemos utilizar la herramineta finally
//que hara que no importa lo que suceda ya sea un error o no exista un error siempre se ejecutara una lineas de codigo
//por lo que podemos resarcir cualquier otro error,perdida de informacion o variable modificada 
//a como estaba antes dejandalo como al inicio 

// sin finally
const accounts = {
  a: 100,
  b: 0,
  c: 20
};

function getAccount() {
  let accountName = prompt("Enter an account name");
  if (!Object.hasOwn(accounts, accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }
  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;
  accounts[from] -= amount;
  accounts[getAccount()] += amount; // puede ocurrir un error y el dinero de la cuenta que dara restado sin anadirlo a la otra cuenta
}

//con finally
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}


//selective catching
//No todos los errores son iguales podemos tener errores blandos, que podremos seguir hacinedo correr el codigo
//sin necesidad de cambiar nada, pero tenemos erroes Fuertes que haran que nuestro programa se vuelva zombie
//y nunca parara. El problema con esto es que el el catch no los identifica, es ciego y para el cualquier error
//no tiene categoria o clasificacion por lo tanto todo lo mandara al mismo lugar 
//eso puede resultar en un problema, ya que podemos pensar que el error viene de algo que esperamos 
//por la razon que usamos el catch, pero puede ser que este se otro tipo de error completamente diferente 
//pero nunca sabremos de el
//ejemplo SUPER PELIGROSO
for (;;) {
  try {
    let dir = promtDirection("Where?"); // ← typo!
    console.log("You chose ", dir);//la funcion esta mal escrita, pero pensaremos que es error de input 
    // dandonos un zombie
    break;
  } catch (e) {
    console.log("Not a valid direction. Try again.");
  }
}

//todo esto podemos solucionarlo con clases de Error personalizadas como la siguiente
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

//con esto el catch podra dicernir entre los errores y si es el blando seguira corriendo,
//pero si es el fuerte parara el programa

//con nuevo Error
for (;;) {//BUCLE INFINITO
  try {
    let dir = promptDirection("Where?");
    console.log("You chose ", dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log("Not a valid direction. Try again.");
    } else {
      throw e;
    }
  }
}



//assertions
//podemos nosotros mismo anadir ciertos puntos de control en nuestro codigo
//esto nos sirve para ver posibles errores que podamos cometer y que sean revisado
//estos son para el programador y no para el usuario
//podemos escribir una funcion que nos bote un resultado que siempre esperamos
//pero pasamos por alto que puede botar otros resultados que no son los planeados
//cuando ocurra el error despues, olvidaremos lo que sabiamos
//causando confusion y perdiendo tiempo buscando el problema
//ejemplo
function firstElement(array) {
  // ASERCIÓN:
  // "Oye, se supone que esta función NUNCA debe recibir arrays vacíos.
  // Si recibo uno, es culpa del programador que me llamó."
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}
// no debemos de abusar de esto, pero siempre hacerlo con errores muy repetitivos
// o descuidos que podamos llegar a tener
