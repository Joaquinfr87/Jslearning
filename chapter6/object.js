//Tipos de datos abstractos
//
//El objetivo de realizar o desarrollar un programa es que
//podemos entender la forma en la que esta compuesta
//sin la necesidad de entender el codigo complejo que esta
//detras de el
//
//los objetos nos ayudan a organizar mejor estas ideas
//por lo tanto podemos abastraer de ellos solo lo relevante
//el codigo dentro de ellos podra ser complejo pero su uso sera su uso sera sencillo 
//de entender, y lo podremos usar en otros objetos o programas
//para asi crear estructuras mas complejas
//
//esto nos da un estructura menos enredada y facil de fixear si algun
//error llegara a suceder
//
//los objetos no son mas que un tipo mas de datos
//y nosotros interactuamos con el por medio de una interfaz
//todo lo demas que no esta en esa superficie esta encapsulado 
//dentro del tipo de dato y no afecta al programa


//Metodos
//son propiedades que almacenan funciones
function hablar(linea) {
  console.log(`${this.tipo} esta hablando: ${linea}`)
}
let Rufus = { tipo: "Mascota", hablar }
Rufus.hablar("Hola mundo");//=> Mascota esta hablando: Hola mundo
//un metodo hace algo con el objeto
//pueden pensar en this como un parametro mas
//
//o puedes usar un call
hablar.call(Rufus, "Hola weyes")//=> Mascota esta hablando: Hola weyes

//funciones arrow son distintas por que por que no manejan su propio this
//si no manejan otro tipo de this del scope que lo envuelve


//Prototypes
//son el mecanismo mediante el cual un objeto obtiene las propiedades de otro
const animal = {
  comer: function () {
    console.log("Estoy comiendo");
  }
};

const perro = {
  ladrar: function () {
    console.log("Guau!");
  }
};

// Establecemos el prototipo de perro a animal
Object.setPrototypeOf(perro, animal);

perro.ladrar(); // Guau!
perro.comer();  // Estoy comiendo

//las clases son a su vez prototipos


//clases
//la clase define la forma que tendra ese tipo de objeto
//sus metodos y propiedades
//para crear un instancia de una clase se debe asegurar que el objeto tenga
//ciertas propiedades que deberia tener esto es el constructor
//es basicamente como una funcion que recibirar parametros para cuando el 
//prototipo sea usado estas se defirinar ese instante tambien
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
//la funcion es igual que el constructor de abajo
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
//esta funcion tiene forma unica que es llamada, no puede ser como cualquier funcion 
let killerRabbit = new Rabbit("killer");

//Propiedades privadas
// Js maneja propiedades privadas de la siguiente forma
class Oveja {
  #propiedad
  constructor(propiedad) {
    this.#propiedad = propiedad;
  }
  getPropiedad() {
    return this.#propiedad
  }

  // Estas propiedades solo alcanzan el scope de la clase y no asi lo externo
  // Estas pueden tanto propiedades como mismamente métodos
  #hablar() {
    return "beeeeeee"
  }
  Hablar(text){
    let result = this.#hablar();
    return text + result;
  }
}


//SobreEscribiendo propiedades derivadas
//un objeto creado puede sobreescribir la propieada del propotipo con el que
//fue creado
const animalito = { sonido: "genérico" };

const perrito = Object.create(animalito);
console.log(perro.sonido);  // "genérico" (lo hereda)

perro.sonido = "guau";
console.log(perro.sonido);  // "guau" (sobrescribió)
console.log(animal.sonido); // "genérico"

//MAP
//no confundir con las funciones de alto ordem, es una estructura que relaciona claves con valores
const mapa = new Map();

// Puedes usar:
// - Strings
// - Números
// - Objetos
// - Funciones
// - Arrays
// - Otros Maps
// - Cualquier tipo de dato

// Ejemplos:
mapa.set('nombre', 'Juan');  // string como clave
mapa.set(123, 'número');     // número como clave
mapa.set({}, 'objeto');      // objeto como clave
mapa.set(() => {}, 'función'); // función como clave

// SET - agregar o actualizar
mapa.set('clave', 'valor');
mapa.set('nombre', 'Ana');
mapa.set('edad', 25);

// GET - obtener valor
console.log(mapa.get('nombre')); // 'Ana'

// HAS - verificar existencia
console.log(mapa.has('edad')); // true

// DELETE - eliminar
mapa.delete('nombre');

// SIZE - cantidad de elementos
console.log(mapa.size); // 2

// CLEAR - eliminar todo
mapa.clear();

// CON OBJETO
const obj = {};
const clave1 = {};
const clave2 = {};

obj[clave1] = 'valor1';
obj[clave2] = 'valor2'; // ¡Sobrescribe el anterior!

console.log(obj); // {"[object Object]": "valor2"}
// Ambas claves se convierten en string "[object Object]"

// CON MAP
const mapa2 = new Map();
const claveObj1 = {};
const claveObj2 = {};

mapa2.set(claveObj1, 'valor1');
mapa2.set(claveObj2, 'valor2'); // No sobrescribe

console.log(mapa.get(claveObj1)); // 'valor1'
console.log(mapa.get(claveObj2)); // 'valor2'
// Cada objeto mantiene su identidad como clave única

// Map es una estructura de datos más flexible y poderosa que los objetos
// tradicionales para ciertos casos de uso, especialmente cuando necesitas
// claves complejas o preservar el orden de inserción.


//Polyformismo
//mismas operaciones pero con comportamientos diferentes 

class Animal {
  speak() {
    console.log("El animal hace un sonido");
  }
}

class Perro extends Animal {
  speak() {
    console.log("El perro ladra");
  }
}

class Gato extends Animal {
  speak() {
    console.log("El gato maulla");
  }
}

let animales = [new Perro(), new Gato()];

animales.forEach(a => a.speak());
// el anterior fue el ejemplo clasico sobre Polyformismo
// pero viendolo desde el punto de vista de polyformismo este toma un nuevo sentido
// al ser todo un objeto de js
//En JavaScript, casi todos los valores tienen un prototipo, y ese prototipo
//define métodos comunes
//los cuales pueden ser remplazados para crear comportamientos personalizados

const obj = {};
console.log(obj.toString());
// → "[object Object]"


Object.prototype.toString // viene de aca

let persona = {
  nombre: "Joaquin",
  toString(){
    return "Este es mi propio metodo toString mi nombre es "+this.nombre
  }
}
class gato{
  constructor(nombre,edad){
    this.nombre = nombre;
    this.edad= edad;
  }
}
let michi = new gato("Lolo",3);
gato.prototype.toString = function(){return "El gato se llama: "+this.nombre+" y tiene "+this.edad;}

console.log(String(persona))
console.log(String(michi))
console.log(String([1,2,3,4]))


//podemos hacer esta locura camiar la propia estructura de los metodos de los arrays :mindblowing:

Array.prototype.forEach = function(callback){
  console.log("Se ejecutó mi forEach personalizado");
  for(let i=0; i<this.length; i++){
    callback(this[i], i, this);
  }
};

[1,2,3].forEach(n => console.log(n));



//Getters, Setter y statics
//un getter es una propiedad que ejecuta una funcion cuando se lee esto permite
//calcularlo ese instante sin almacenarlo en el objeto
//lo vuelve dinamicamente
let obj = {
  get hora() {
    return new Date().getHours();
  }
};

console.log(obj.hora); // → calcula la hora actual cada vez que la lees

//es una propiedad que funciona como un metodo para asignar valores 
//a una propiedad de un objeto 
//util para validar, transformar y reaccionar a cambios de valor
let obj = {
  _edad: 0,//propiedad interna
  get edad(){
    return this._edad +1;
  },
  set edad(valor) {
    if(valor < 0) throw new Error("No puede ser negativo");
    this._edad = valor;
  }
};

obj.edad = 25; // llama al setter
console.log(obj.edad); // → 26

//static es un metodo estatico que pertenece a la CLASE y no a la instancia u objeto, no necesitas llamarlo con new
// puede usarlo para crear un objeto o para muchas otras cosas mas

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método normal, se llama desde la instancia
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }

  // Método estático, se llama desde la clase
  static crearJoven(nombre) {
    return new Persona(nombre, 18);
  }
  static hablar(texto){
    return "Una persona dice: "+texto
  }
}

// Crear instancia normalmente
let p1 = new Persona("Joaquín", 30);
p1.saludar(); // → "Hola, soy Joaquín"

// Usar el método estático para crear otra instancia
let p2 = Persona.crearJoven("Ana");
console.log(p2.nombre); // → "Ana"
console.log(p2.edad);   // → 18
console.log(persona.hablar("Hola mundo"))// no requiera de una instancia de la clase para ser usada directamente puede ser usada de la clase

// p2.saludar(); // ✅ Funciona, es método de instancia
// Persona.saludar(); // ❌ Error, saludar no es estático




//Symbols
//permiten crear propiedades que nunca se mezclaran unas con otras
//no puede colisionar
//ejemplo con el length, podemos usarlos en objetos para reprentar cosas diferentes
//que el length de js representa
const length = Symbol("length");
Array.prototype[length] = 0;

console.log([1,2].length);   // 2  (propiedad normal)
console.log([1,2][length]);  // 0  (propiedad symbol)

let myTrip = {
  length: 2,            // propiedad normal
  0: "Lankwitz",
  1: "Babelsberg",
  [length]: 21500       // propiedad symbol
};

console.log(myTrip[length]); // 21500
console.log(myTrip.length);  // 2

//Interface iterator
