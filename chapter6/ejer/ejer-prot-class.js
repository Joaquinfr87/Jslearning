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
