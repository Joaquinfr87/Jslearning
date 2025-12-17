//Prototipos
//Es el mecanismo mediante el cual los objetos heredan propiedades y metodos
//de otros objetos que a su vez heredan del ojeto primario


//cadena de Prototipos
//javascript siempre intentra accder a la propiedad o metodo del objeto 
//si no lo encuentra ira a su prototipo, si no lo encuntra ahi ira al prototipo
//del prototipo si no lo encuentra resultara en undefined o en la propiedad buscada

const miObjeto = {
  ciudad: "La Paz",
  saludar() {
    console.log(`Saludos desde ${this.ciudad}`);
  }
};

miObjeto.saludar(); // Saludos desde La Paz

// 1. Intentamos usar un método que NO definimos en miObjeto: toString()
// JavaScript lo encuentra en el prototipo.
console.log(miObjeto.toString()); // [object Object] 

// 2. Verificamos el prototipo de miObjeto
const prototipo = Object.getPrototypeOf(miObjeto);
console.log(prototipo); // { constructor: f, __proto__: null, ... } (Es Object.prototype)

// 3. El final de la cadena: el prototipo de Object.prototype es null
console.log(Object.getPrototypeOf(prototipo)); // null

const miFecha = new Date(2025, 11, 16);

// La cadena de prototipos es:
// miFecha -> Date.prototype -> Object.prototype -> null

// 1. Verificamos el primer prototipo: Date.prototype
console.log(Object.getPrototypeOf(miFecha)); 
// Retorna un objeto que contiene métodos como getTime(), getMonth(), etc.

// 2. Verificamos el siguiente prototipo: Object.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(miFecha))); 
// Retorna Object.prototype

// 3. El final: null
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(miFecha))));
// null



//Herencia
//con los prototipos podemos crear objetos con metodos y propiedades de otros
// Objeto que servirá como PROTOTIPO (el "padre")
const personaPrototype = {
  especie: 'Humano',
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy un ${this.especie}.`);
  }
};

// Creamos un nuevo objeto 'juan' y le asignamos personaPrototype como su prototipo
const juan = Object.create(personaPrototype);

// Le asignamos una propiedad propia a 'juan'
juan.nombre = "Juan Pérez";

// 'juan' hereda 'saludar()' y 'especie' de personaPrototype
juan.saludar(); // Hola, mi nombre es Juan Pérez y soy un Humano.

// Verificamos de dónde viene 'saludar' y 'nombre'
console.log(`¿'nombre' es una propiedad propia? ${Object.hasOwn(juan, 'nombre')}`); // true
console.log(`¿'saludar' es una propiedad propia? ${Object.hasOwn(juan, 'saludar')}`); // false (Viene del prototipo)

//shadowing
//cuando una propiedad o metodo tiene el mismo nombre, siempre retornara la propiedad hija en pirmer lugar
//es basicamente poliformismo de oop


//constructor
//podemos crear funciones constructoras
// 1. La Función Constructora (solo define las propiedades PROPIAS)
function Persona(nombre) {
  this.nombre = nombre; // Esta es una propiedad PROPIA
}

// 2. Agregamos MÉTODOS al prototipo del constructor.
// Todos los objetos creados con 'new Persona()' heredarán esto.
Persona.prototype.saludar = function() {
  console.log(`Hola, soy ${this.nombre}.`);
};

// 3. Creamos instancias
const ana = new Persona("Ana");
const luis = new Persona("Luis");

// Ambas instancias usan el mismo método 'saludar' del prototipo
ana.saludar();  // Hola, soy Ana.
luis.saludar(); // Hola, soy Luis.

// Verificamos la cadena: ana -> Persona.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(ana) === Persona.prototype); // true



//ejemplo 1
var Counter = {
  count: 0,
  add: function () {
    // `this` depende de cómo se llama la función
    this.count++;
  }
};

// Llamada como método del objeto Counter
Counter.add();
// this === Counter → Counter.count pasa de 0 a 1
console.log(Counter.count); // 1

// Se copia la REFERENCIA a la función, no el objeto
var addToCount = Counter.add;

// Llamada SIN objeto
addToCount();
// this === objeto global (window en navegador)
// Se incrementa window.count, NO Counter.count
console.log(Counter.count); // 1



//ejemplo 2
var Counter = {
  count: 0,
  add: function () {
    // `this` apunta al objeto que llama al método
    this.count++;
  }
};

// Llamada como método de Counter
Counter.add();
// this === Counter → Counter.count pasa de 0 a 1
console.log(Counter.count); // 1

var AnotherCounter = {};

// Se copia el VALOR (primitivo), no la referencia
AnotherCounter.count = Counter.count; // 1

// Se copia la referencia a la función
AnotherCounter.add = Counter.add;

// Llamada como método de AnotherCounter
AnotherCounter.add();
// this === AnotherCounter → AnotherCounter.count pasa de 1 a 2
console.log(AnotherCounter.count); // 2

// Counter no cambia porque es otro objeto
console.log(Counter.count); // 1

// Se copia la REFERENCIA al objeto Counter
var YetAnotherCounter = Counter;

// Llamada sobre Counter
Counter.add();
// Counter.count pasa de 1 a 2

// YetAnotherCounter apunta al mismo objeto
console.log(YetAnotherCounter.count); // 2
