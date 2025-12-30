//1
function Contador(){
  this.valor = 0;
}

Contador.prototype.incrementar = function(){
  this.valor++;
}

let contador = new Contador();

contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.valor)//3

//2
let AnimalPrototype = {
  es_mamifero: true,
  dormir(){ console.log("Esta durmiendo")}
}

let perro = Object.create(AnimalPrototype);
perro.dormir();//Esta durmiendo
console.log(perro.es_mamifero);                 // true (heredado)
console.log(Object.getPrototypeOf(perro) === AnimalPrototype); // true

//3
let configuracionBase = {
  tema: 'claro'
}
let usuarioConfig = Object.create(configuracionBase);

console.log(usuarioConfig.tema);//claro

usuarioConfig.tema = "oscuro";

console.log(usuarioConfig.tema)//oscuro
console.log(Object.getPrototypeOf(usuarioConfig).tema); // "claro"
//4
function Punto(x,y){
  this.x=x;
  this.y=y;
}
Punto.prototype.toString = function(){return `(${this.x},${this.y})`}

let punto1 = new Punto(1,2);
console.log(punto1.toString())
//5
function Vehiculo(ruedas){
  this.ruedas=ruedas;
}
function Coche(ruedas,color){
  Vehiculo.call(this,ruedas)// equivalente a this.ruedas = ruedas
  this.color = color;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

Coche.prototype.mostrarColor = function () {
  console.log(this.color);
};
const miCoche = new Coche(4, "rojo");

console.log(miCoche.ruedas); // 4
miCoche.mostrarColor();     // rojo
//6
let moto = new Coche(2, "verde");
console.log(Object.hasOwn(moto, "ruedas"));//true
console.log(Object.hasOwn(moto, "mostrarColor"));//false
let vehiculo1 = new Vehiculo(3)
console.log(Object.hasOwn(vehiculo1, "ruedas"));//true
console.log(Object.hasOwn(vehiculo1, "mostrarColor"));//false

//7
//Mixins metodo
const Logger = {
  log(msg) {
    console.log(`[LOG]: ${msg}`);
  }
};
function Temporizador(nombre) {
  this.nombre = nombre;
}// Añadimos las funciones de Logger al prototipo de Temporizador
Object.assign(Temporizador.prototype, Logger);

// Ahora podemos añadir métodos propios de Temporizador sin borrar el log
Temporizador.prototype.iniciar = function() {
  this.log(`Iniciando temporizador: ${this.nombre}`);
};
const miReloj = new Temporizador("Cronómetro 1");

miReloj.iniciar(); // Salida: "[LOG]: Iniciando temporizador: Cronómetro 1"
miReloj.log("Evento manual"); // Salida: "[LOG]: Evento manual"
//8
// 1. Objeto Abuelo
const A = {
  mostrar() {
    // 'this' no se refiere a quien posee el método (A),
    // sino a quien lo invoca (C)
    console.log(`Valor desde C: ${this.propiedadDeC}`);
  }
};

// 2. Objeto Padre (Hereda de A)
const B = Object.create(A);

// 3. Objeto Hijo (Hereda de B)
const C = Object.create(B);
C.propiedadDeC = "¡Hola desde lo más profundo de la cadena!";

// Prueba
C.mostrar(); // "Valor desde C: ¡Hola desde lo más profundo de la cadena!"

//9
// 1. Extendemos el prototipo global de Array
Array.prototype.primero = function() {
  // 'this' hace referencia al arreglo que invoca el método
  return this[0];
};

// 2. Prueba con un arreglo
const frutas = ["Manzana", "Pera", "Plátano"];
const numeros = [42, 10, 5];

console.log(frutas.primero()); // "Manzana"
console.log(numeros.primero()); // 42

//10
// 1. Definimos la función constructora
function Persona(nombre) {
  this.nombre = nombre;
}

// 2. Agregamos el método al prototipo
Persona.prototype.presentarse = function() {
  console.log(`Hola, mi nombre es ${this.nombre}`);
};

// 3. Creamos una instancia normal
const juan = new Persona("Juan");

// --- Pruebas de ejecución ---

// A. Llamada normal (el contexto 'this' es juan)
juan.presentarse(); // "Hola, mi nombre es Juan"

// B. Uso de .call para cambiar el contexto
// Creamos un objeto literal "extraño" que no es una Persona pero tiene nombre
const intruso = { nombre: "Agente Secreto" };

// Invocamos el método de Juan pero obligamos a que el 'this' sea el intruso
juan.presentarse.call(intruso); // "Hola, mi nombre es Agente Secreto"






//11
class cuenta{
  #monto;// tambien se podria usar _monto
  set monto(monto){
    this.#monto = monto;
  }
  get monto(){
    return this.#monto
  }
}
let cuenta1 = new cuenta();
cuenta1.monto = 500;
console.log(cuenta1.monto)

//12, 13
class Producto{
  constructor(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarInfo(){
    console.log(`${this.nombre} - ${this.precio}`)
  }
}
class Electronico extends Producto{
  constructor(nombre,precio,garantia){
    super(nombre , precio);
    this.garantia = garantia;
  }
  mostrarInfo(){
    super.mostrarInfo();
    console.log(` - ${this.garantia}`)
  }
}
let papas = new Producto("Papas",450);
let tele = new Electronico("Tv",400,2);

papas.mostrarInfo();
tele.mostrarInfo();
//14
class Utilidad{
  static version = 20;
  static formatearFecha(fecha){
    return fecha.toDateString();
  }
}
console.log(Utilidad.version);
console.log(Utilidad.formatearFecha(new Date()));
//15
class CuentaBancaria {
  #saldo = 0;
  depositar(monto){
    this.#saldo += monto;
  }
  consultarSaldo(){
    return this.#saldo
  }
}
let cuenta = new CuentaBancaria();
cuenta.depositar(500);
console.log(cuenta.consultarSaldo());
//16
let voladoMixin = {
  volar(){
    console.log("volar");
  }
}
class Pajaro{};
Object.assign(Pajaro.prototype, voladoMixin)
let pajaro = new Pajaro();
pajaro.volar();
//17
class Figura{
  calcularArea(){
    try {
      throw new Error("Llamalo desde la subclase")
    } catch (error) {
      console.log(error);
    }
  }
}
class Rectangulo extends Figura{
  constructor(base,altura){
    super();
    this.base = base;
    this.altura = altura;
  }
  calcularArea(){
    return this.base * this.altura;
  }
}
let figura = new Figura();
figura.calcularArea();
let rectangulo = new Rectangulo(10,20);
console.log(rectangulo.calcularArea());
//18
class Temporizador{
  constructor(tiempo=60){
    this.tiempo = tiempo;
  }
}
console.log(new Temporizador().tiempo);
//19
class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  presentarse() {
    return `Usuario: ${this.nombre} (${this.email})`;
  }
}

class Administrador extends Usuario {
  constructor(nombre, email, nivelAcceso) {
    super(nombre, email);
    this.nivelAcceso = nivelAcceso;
  }

  eliminarUsuario(usuario) {
    console.log(`${this.nombre} está eliminando al usuario: ${usuario.nombre}`);
  }
}

const usuarioComun = new Usuario("Alex", "alex@correo.com");
const adminPro = new Administrador("Ana", "ana@admin.com", "Nivel 5");

console.log(usuarioComun.presentarse()); // "Usuario: Alex (alex@correo.com)"
console.log(adminPro.presentarse());    // "Usuario: Ana (ana@admin.com)" (Heredado)
console.log(adminPro.nivelAcceso);      // "Nivel 5"
adminPro.eliminarUsuario(usuarioComun); // "Ana está eliminando al usuario: Alex"
//20
const pan = new Producto("Pan Integral");
const movil = new Electronico("Smartphone", "Samsung");

console.log("--- Verificando el objeto 'pan' ---");
console.log(pan instanceof Producto);    // true  (Es su clase directa)
console.log(pan instanceof Electronico); // false (Un producto no siempre es electrónico)
