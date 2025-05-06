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