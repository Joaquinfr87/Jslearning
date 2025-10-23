//arraylogy

//  pop eliminar ultimo elemento y retorna
//  push agrega un ultimo elemento
// shift eliminia primer elemento y retorna
// unshift agrega primer elemento

let lista=[];

lista.push("Maria");
lista.push("Jose")
lista.push("Canchari")

lista.pop();
lista.shift("Alvaro")

console.log(lista);

//indexOf y lastIndexOf
// son lo mismo

let letras=['a','b','c','d','e','f','g','h'];
console.log(letras.indexOf('b'));//-> 1
console.log(letras.lastIndexOf('e'));//-> 4

//slice
//parte un array y te da la parte que requieras

console.log(letras.slice(0,3));//-> a b c
console.log(letras.slice(3));//-> d e f g h

//concat para unir arrays
let letras2=['i','k','l','m','n','ñ','o']

console.log(letras.concat(letras2));//-> a b c d e f g h i j k l m n ñ o

//funcion que elimina un elemento y parte y vuelve unir el array
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11
//trim
//elimnas espacios en blanco final e inicio
console.log("        Hola como estas \n ".trim());
// → Hola como estas

//padStart
console.log(String(87).padStart(5,"ga"));//-> gag87

//split y join 

let oracion = "Hola como estas manito";
let palabras = oracion.split(" ");
console.log(palabras);//-> 
console.log(palabras.join(" "));

//repeat
console.log("La".repeat(5));//->lalalalala

//rest parametros ...
let max=(...nums)=>{
    let result=-Infinity;
    for(let num of nums){
        if(num>result)result=num;
    }
    return result;
};

console.log(max(1,2,3,4,5,6,7,8,9,10))

let numeros=[1,2,3,4,5,6,7,8,9,10];
console.log(...numeros);
console.log(0,...numeros,11);

let coordinates = {x: 10, y: 0};
console.log({...coordinates, y: 5, z: 1});
// → {x: 10, y: 5, z: 1}
//math object
Math.random();
Math.PI;
Math.cos();
//deconstruyendo
let {name} = {name: "Faraji", age: 23};
console.log(name);
// → Faraji

let numbs=[10,20,30];
let [x,y,z]=numbs;
console.log(x,y,z)

const persona={
    nombreM:"Ana",
    edad:40
}
let {nombreM,edad}=persona;
console.log(nombreM,edad)

