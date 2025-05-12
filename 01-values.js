//saber tipo de valor de una variable o dato
console.log(typeof(10));
console.log(typeof("Hello world"));
console.log(typeof(true));
console.log(typeof([1,2,3]));
console.log(typeof({a:1, b:2}));
console.log(typeof(null)); //object
console.log(typeof(undefined)); //undefined
//typeof es un operador que devuelve el tipo de dato de una variable o valor
//null es un objeto en js
//undefined es un tipo de dato en js
//typeof no es un constructor, es un operador
//typeof se usa para saber el tipo de dato de una variable o valor

//concatenacion y otros
console.log("Hello" + " " + "world"); //concatenacion de strings
console.log(10 + 10); //suma de numeros
console.log(10 - 5); //resta de numeros
console.log(10 * 5); //multiplicacion de numeros
console.log(10 / 5); //division de numeros
console.log(10 % 3); //modulo de numeros

//operadores logicos
console.log(true && false); //and
console.log(true || false); //or
console.log(!true); //not

//operadores de comparacion
console.log(10 == "10"); //igualdad (==) compara el valor, no el tipo de dato
console.log(10 === "10"); //igualdad estricta (===) compara el valor y el tipo de dato

//if corto
console.log(true?1:2);//1

console.log(false?1:2);//2
//undefines y null son lo mismo

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

//operadores logicos
//siempre va de izquierda a derecha 
//si el primer valor es verdadero, devuelve el primer valor, si no, devuelve el segundo valor

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

//? hace lo mismo que | pero a la derecha

console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0

//el && devolvera el primer valor falso y sis todos son verdaderos devolvera el ultimo valor
console.log(0 && 100);
// → 0
console.log(100 && 0);
// → 0
console.log(100 && 200);
// → 200
