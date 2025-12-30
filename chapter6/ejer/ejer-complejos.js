//1
class MetodoPago {
  constructor(monto) {
    this.monto = monto;
  }
  procesar(cantidad) {
    throw new Error("El metodo debe ser realizado por la subclase");
  }
}
class pagoInsuficiente extends Error {}

class Paypal extends MetodoPago {
  procesar(cantidad) {
    console.log(`Procesando su pago de ${cantidad} por medio de Paypal`);
    console.log(`Ingresando sus credenciales`);
    try {
      if (isNaN(cantidad)) throw new Error("Ingreso un dato no numerico");
      this.monto -= cantidad * 1.05;
      if (this.monto < 0)
        throw new pagoInsuficiente(
          "no cuenta con saldo suficiente para el pago",
        );
      console.log(
        `Pago realizado con un recargo de 5% tiene un monto de ${this.monto}`,
      );
    } catch (e) {
      if (e instanceof pagoInsuficiente) {
        this.monto += cantidad * 1.05;
      }
      console.log(e);
    }
  }
}
function realizarCompra(metodo, pago) {
  try {
    if (metodo instanceof MetodoPago) {
      metodo.procesar(pago);
    } else {
      throw new Error("No es un metodo valido");
    }
  } catch (e) {
    console.log(e);
  }
}
let metodo = new MetodoPago(500);
let paypal = new Paypal(1000);
realizarCompra(metodo, 300);
realizarCompra(paypal, 7000);
realizarCompra(
  {
    procesar: () => {
      console.log("gaa");
    },
  },
  500,
);
//2
//singetoon
class Configuracion {
  static #instancia;
  //el static es como una memoria compartida cualquier instancia la tendra
  // en este caso se compartira a si misma
  #config = {
    tema: "oscuro",
    lenguaje: "es",
    fontSize: 10
  }
  constructor(){
    if(Configuracion.#instancia) return Configuracion.#instancia
    Configuracion.#instancia = this;
  }

  get(clave){
    return this.#config[clave];
  }
  set(clave,valor){
    this.#config[clave] = valor;
  }
}

let config = new Configuracion();
let config2 = new Configuracion();

console.log(config === config2)

console.log(config.get("tema"));
console.log(config2.set("tema","claro"));
console.log(config.get("tema"));

//3
function Vehiculo(marca){
  this.marca = marca
}
Vehiculo.prototype.moverser = function(){
  console.log("Moviendose")
}
function Coche(marca,modelo){
  Vehiculo.call(this,marca);
  this.modelo = modelo;
}
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;
Coche.prototype.tocarBocina = function() {
  console.log(`${this.marca} ${this.modelo} dice: ¡Beep Beep!`);
};
const miCoche = new Coche("Toyota", "Corolla");

miCoche.moverse();      // "Toyota se está moviendo..." (Heredado)
miCoche.tocarBocina();  // "Toyota Corolla dice: ¡Beep Beep!"

console.log("¿Es miCoche un Coche?", miCoche instanceof Coche);      // true
console.log("¿Es miCoche un Vehiculo?", miCoche instanceof Vehiculo); // true

//4
let Volador = {
  despegar(){
    console.log("despegando")
  },
  aterrizar(){
    console.log("aterrizando")
  }
}
let Hablar = {
  decirNombre(){
    console.log(`Yo soy ${this.nombre}`)
  }
}
class Persona {
  constructor(nombre){this.nombre=nombre}
}
class Robot{
  constructor(nombre){this.nombre=nombre}
}
class Dron{
  constructor(nombre){this.nombre=nombre}
}
Object.assign(Robot.prototype,Volador,Hablar)
Object.assign(Persona.prototype, Hablar)
Object.assign(Dron.prototype,Volador)

//5
class CuentaBancaria{
  #saldo=0;
  get saldo(){
    return this.#saldo;
  }
  depositar(monto){
    this.#saldo += monto;
  }
  retirar(monto){
    try{
      if(this.#saldo-monto<0) throw new Error("El monto sobre pasa al saldo en la cuenta")
      else this.#saldo -= monto;
    }catch(e){
      console.log(e)
    }
  }
}
