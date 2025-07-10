for(let i=1;i<100;i++){
    let word="";
    if(i%3==0)word+="Fizz";
    if(i%5==0)word+="Buzz";
    console.log(word||i);
}

function speak(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}
let rabbit = {type: "White",speak};
console.log(rabbit.type)
rabbit.speak("GAAAAA")
speak.call(rabbit,"Gaaaaa")//esta funcion llama al objeto call(thisArg,arg1,arg2,...)


let finder = {
    
    find(array){
        return array.some(x=>x==this.value)
    },
    value:5
}

console.log(finder.find([1,2,3,4,5]));//=>true

let empty={}
console.log(empty.toString);
console.log(empty.toString());

let ardilla = {nombre:"Alvin",Cantar(){return "AAAAAA"}}
console.log(ardilla.Cantar)
console.log(ardilla.Cantar())

console.log(ardilla.Cantar.toString)
console.log(ardilla.Cantar().toString())

//prototype

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");

let automovil = {
  encendido(){
    console.log(`El ${this.type} se esta encendiendo`);
  }
}
let Volkswagen = Object.create(automovil)
Volkswagen.type="T-cross"
Volkswagen.encendido()

//class

class dog{
  constructor(type){
    this.type=type;
  }
  speak(line){
    console.log(`The ${this.type} dog says ${line}`)
  }
}
let dobberman = new dog("dobberman");
dobberman.speak();

//private properties
class RamdonNumber{
  #max;
  constructor(max){
    this.#max=this.#max;
  }
  getNumber(){
    return Math.floor(Math.random()*this.max);
  }
}
//sobreescribiendo propiedades

dog.prototype.teeth="Pequeñas";//agrega esta propiedad como default para la clase dog
let chabby = new dog("Salchicha");
chabby.speak("Hola mundo");
console.log(chabby.teeth);
chabby.teeth="Afilada"//puedes modificar la propiedad
console.log(chabby.teeth);
//=>Pequeñas Afiladas


//Map 
let estudiantes = new Map();
estudiantes.set("Joaquin",20);
estudiantes.set("Jose",25);
estudiantes.set("Nicolas",27);

console.log(`${estudiantes.get("Joaquin")}`)
console.log(`${estudiantes.has("Joaquin")}`)
console.log(`${estudiantes.has("toString")}`)


//polymorphism
dog.prototype.toString = ()=>{`Un perro ${this.type}`}//no funciona

dog.prototype.toString = function(){return `Un perro${this.type}`}
console.log(String(chabby));

Array.prototype.forEach.call({length:2,
                      0:'A',
                      1:'B'}, elt=>console.log(elt));

//getters y setter estaticos
class Temperatura{
  constructor(celsius){
    this.celsius=celsius;
  }
  get fahrenheit(){
    return this.celsius*1.8+32};
  set fahrenheit(value){
    this.celsius=(value-32)/1.8;
  }
  static fromFahrenheit(value){
    return new Temperatura((value-32)/1.8);
  }
}
let tmp =new Temperatura(20);
console.log(tmp.fahrenheit);
tmp.fahrenheit=120;
console.log(tmp.celsius);
console.log(Temperatura.fromFahrenheit(200).celsius);
tmp = Temperatura.fromFahrenheit(300);

//
