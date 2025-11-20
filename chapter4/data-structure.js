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
console.log(days[squirrel])

//metodos
let Hello = "Hola Mundo como estan";

console.log(typeof Hello)//=> string
console.log(typeof Hello.toUpperCase)//=> function

//metodos para manipular arreglos
let f = [1,2,3,4,5,6]
f.push(7);
f.pop();
f.shift()
f.unshift(1)

//Un objeto de javascript esta lleno de propiedades dnetro de el
//cada propiedad tiene un nombre o un binding
//y un valor que almacena dentro de el
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};


//eliminar propiedades
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


//acceder a lista de propiedades del objeto
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]


//funcion que copia propiedades de un objeto a otro
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}


//identidad de los Objetos
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);//objeto 2 tiene aun el valor de objeto 1, aun cuando fue modificado
// → 15
console.log(object3.value);
// → 10


//los bindigns dentro de un objeto const, pueden ser cambiados
//pero no puedes moficar todo el objeto
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};



//arrayology
//acceder al indice con su valor
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
// partir un array en dos con especificacion
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
// concat que uniras dos arrays
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]




//propiedades de strings
//podemos usar metods de arrays dentro de los stringsd y otros especificos de lso strings
console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("  okay \n ".trim());
// → okay
"5".padStart(3, "0")   // "005"
"hello".padStart(10, "-")  // "-----hello"
"123".padStart(5)  // "  123" (rellena con espacios)


let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping


console.log("LA".repeat(3));
// → LALALA







//REST paramater
function max(...n){
  let result = -Infinity;
  for(let e of n){
    if(e>result)result=e
  }
  return result
}
console.log(max(1,2,5,3,6,1,-12,3,122,3,4,5));

let dias = ["lunes","martes","miercoles"]
console.log("domingo",...dias,"jueves")//=>domingo lunes martes miercoles jueves



//propiedades adicionales
function city(object) {
  return object.address?.city;
}
console.log(city({address: {city: "Toronto"}}));
// → Toronto
console.log(city({name: "Vera"}));
// → undefined
// ?. evita erroes de consola dando un valor que no encuentra como undefined
