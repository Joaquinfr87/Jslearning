//Las expresiones regulares son una herramienta muy usada en programacion
//forma sus propio lenguaje que nos sirve para conocer patrones en un texto
//son usadas tanto en javascript como otros lenguajes
//tienen una sintaxis muy poco intuitiva

//Creating regular expresion
//existen 2 formas de crear regex en javascript

let regex1 = new RegExp("abc");
let regex2 = /abc/;

//la segunda forma es mas limpia pero tenenmos problemas con algunos
//caracteres especiales como +,/,etc
//el primero no tenemos ese problema pero es mas largo en sintaxis
//la segunda forma es la mejor, no dependemos del uso de un Objetoo
//ademas de que la sintaxis se mantiene no solo en javascript

//si mi texto debe buscar /user@root+

let regex3 = /\/usr@root\+/;
 // para hacer /  debe hacer \/
// para hacer +  debe hacer \+ 

//Testing for Matches
//la expresiones regulares tiene mucho tipos de metodos uno de ellos
//es el de test, que tendra un texto como parametro y comparar con la declaracion
//regex, si contiene la declaracion regex en algun lugar devolvera true
console.log(/abc/.test("abcd"));//=>true
console.log(/abc/.test("abcHgid reafdajk abc"));//=>true
console.log(/abc/.test("gaaaabcoit"));//=>true
console.log(/abc/.test("a b c"));//=>false
console.log(/abc/.test("aabcc"));//=>true

//Sets of characters
//aca es donde empezamos a ver el verdadero poder de regex
//gracias a los square brackets podemos saber si algun texto
//contine alguno de los valores dentro del regex
//[] - cualquiera texto que coincida con los caracteres dentro de la declaracion regex
console.log(/[0123456789]/.test("Gamorra 1"))//=> true

//podemos acortarlo con - para definir un rango
console.log(/[0-9]/.test("Gamorra 1"))//=> true

//tenemos algunos shortcuts para ello como el \d para digitos [0-9]
// \d  Any digit  [0-9]
// \w  Any alphanumeric (word) character  [a-zA-Z0-9_]
// \s  "Any whitespace (space, tab, newline)"  [ \t\n\r\f\v]
// .  Any character except newline  (Wildcard)

//tambien tenemos los negados de estos
//cualquiera que no sea
// \D
// \W
// \S

console.log(/\d/.test("Curando el mundo"))//=> false
console.log(/\d/.test("1943 enero 12"))//=> true
console.log(/\D/.test("El mundo gira alrededor de la luna, todos los dias"))//=>true

console.log(/\w/.test("2005 - 03 - 14"))//=> true
console.log(/\w/.test("  "))//=> false
console.log(/\w/.test("!@#$%"))//=> false
console.log(/\w/.test("\t\n"))//=> false

console.log(/\s/.test("Joaquin Felipez Rojas"))//=> true
console.log(/\s/.test("joaquinfelipezrojas@hotmail.com"))//=>false

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false


//algunos caracteres especiales dentro de los square brackets pieden su sentido
//y solo tiene su valor como caracter, por ejemplo [\d.]
//el . significa cualquier caracter pero dentro del [] solo significa un .
console.log(/[\d.]/.test("Hola mundo."))//=>true
console.log(/[\d.]/.test("MI nombre es $Joaf-"))//=>false

//podemos tambien comparar excepciones gracias a ^
// [^01] : cualquiera que al menos sea distinto de lo siguiente
// ^ todo lo que no sea lo que esta dentro
console.log(/[^01]/.test("0101010101010111011100110001100111101010"))//=>false
console.log(/[^01]/.test("0101010101010111011100110201100111101010"))//=>true por que tiene un 2


//International characters 
//Javascript fue pensado para el idioma ingles principalmente por lo tanto no tiene buen soporte para otros lenguajes
//por lo tanto tiene un anadido de Unicode para poder trabar con otros lenguajes
// \p{L}	Any letter
// \p{N}	Any numeric character
// \p{P}	Any punctuation character
// \P{L}	Any nonletter (uppercase P inverts)
// \p{Script=Hangul}	Any character from the given script (see Chapter 5)
console.log(/\p{L}/u.test("α"));
// → true
console.log(/\p{L}/u.test("!"));
// → false
console.log(/\p{Script=Greek}/u.test("α"));
// → true
console.log(/\p{Script=Arabic}/u.test("α"));
// → false



//Repeating parts of a pattern 
//podemos usar cuantificadores para poder hallar mas de una coincidencia
//+ para si aparece una vez o mas
console.log(/a+$/.test("Holaaaaaaaaa"))//=> true
//* para si aparece cero o mas veces
console.log(/a*$/.test("Hol"))//=>true
//cobra mas sentido si le damos condicion de inicio y final


//? convierte en un caracter en opcional  
console.log(/\d (dia)?/.test("1 dia"))//=>true
console.log(/\d (dia)?/.test("1 "))//=>true

//{} cantidades precisas 
console.log(/\d{2,3}/.test("23"))//=> true
console.log(/\d{2,3}/.test("245"))// => true
console.log(/\d{4}/.test("2024"))// => true
console.log(/\d{5,}/.test("123456778956262362"))// => true

console.log(/^\d{1,2}-\d{1,2}-\d{4}$/.test("12-31-2025"))

//grouping subexpressions 
//podemos agrupar elementos con () y estos a sus vez podran utilizar las condiciones como ()+, ()*
//el i al final hacer que no sea sensitive case
console.log(/boo+(hoo+)+/i.test("BooooooHoooohoooohoohooooooooo"))//=>true
console.log(/boo+(hoo+)+/i.test("booHOOOOOhoo"))//=>true

//Matches and groups
//con test podemos comprobas si existe la coincidiencia ahora veremos exec con el que podremos 
//saber cuales han sido todas las coincidencias y donde esta
console.log(/\d+/.exec("hora 3 y 45 y 2 seg"))//=> 3

//en el siguiente ejemplo, exec busca la coincidencia general, y tambien subcoincidencias que esten 
//dentro de un parentesis, por lo tanto dara 2 resultados
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]

console.log(/bad(ly)?/.exec("bad"));// → ["bad", undefined]
console.log(/bad(ly)?/.exec("badly"));// => ["badly","ly"]
console.log(/bad(ly)?/.exec("badlysh"));// => ["badly","ly"]

//como repidte el grupo de coincidencia varias veces el ultimo grupo esta con 3
//por lo tanto la subcoincidencia es 3
console.log(/(\d)+/.exec("123"));// → ["123", "3"]

//si quiero que un grupo sea invisible y que no sea parte de la coincidencia
//entonces podemos poner ?: 
console.log(/(na)+/.exec("banana"))//=> ["nana", "na"]
console.log(/(?:na)+/.exec("banana"))//=> "nana"

//the date class 
//Javascript tiene un objeto para crear fechas Date
console.log(new Date())
console.log(new Date(2009,11,9))// tambien puedes especificar las fechas
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));// muy especifico
// por convecion javascript empieza desde 0 con los mesese por lo tanto diciembre es 11

//el conteo en milisegundos empezo de 1970 
console.log(new Date(1387407600000));// → Thu Dec 19 2013 00:00:00 GMT+0100 (CET)
//el date nos da un monton de metodos getFullYear, getMonth, getDate, getHours, getMinutes, and getSeconds

function getDate(string){
  let [_,month,day,year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  // la sintaxixs de [] antes de = es para deestructurar un array
  // el _ representa a un elemento que no nos intereza 
  return new Date(year,month-1,day);
}
console.log(getDate("02-24-2004"))


//Boundaries and look ahead
//a veces deseamos coincidencias exactas que ciertas expresiones no nos la daran 
// "22000-34-2354"
// en este caso tendremos un resultado por exec pero este no nos servira
// para hacer que sea mucho mas especifico podemos poner lintes de inicio y final

console.log(/^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec("123123-3213-4342314"));//=> null

console.log(/^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec("03-89-4597"));//=> ["03-89-4597", "03", "89", "4597"]


console.log(/^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec("03-89-4597"));//=> ["03-89-4597", "03", "89", "4597"]

//con los lookahead hacemos que regex se comporte inteligente
//y podemos darle condiciones
//mira hacia adelante si existe y se cumple la condicion entonces
//te devolverea el resultado

console.log(/a(?=e)/.exec("braeburn"));// → ["a"]
console.log(/a(?! )/.exec("a b"));// → null
console.log(/^(a(?!e))+/.exec("aaaaaaaaaaaaaaee"))// "aaaaaaaaaa","a"

//?= seguido que sea igual que 
//?! seguido que no sea igual que 


//Choice patterns
//si queremos escribir una expresion que valida algo pero tambien otra
//es decir que dos pueden ser validas pero solo una usamos | como el or
console.log(/\d (pig|cow|chicken)s/.test("12 pigs"));
console.log(/\d (pig|cow|chicken)s/.test("12 cows"));


//The replace method
//con Javascript podemos hacer uso del replace un metodo para los strings
console.log("tabla".replace("t", "p"))
//podmeos utilizar el mismo metodo para usarlo con regex
console.log("borudur".replace(/[ou]/, "a"))//=> barudur
//para hacer que este sea global entonces utlizamos el g al finalizar la expresion regular
console.log("borudur".replace(/[ou]/g, "a"))//=> baradar

// \p{L} cualquier caracter de unicode
console.log("Liskov, Barbara\nMcCarthy, John\nMilner, Robin"
  .replace(/(\p{L}+), (\p{L}+)/gu,"$2 $1"))

// ejemplo avanzado de replace
let stock = "1 lemon, 2 cabbages, and 101 eggs";
//al momento de ejecutarse el regex simpre lo hara como exec
//es decir siempre que usemos regex este internamente hara el exec
//por lo tango al hacer replace este hace exec, y como al encontrar una coincidencia
//hara una accion que por lo general esta deberia ser el cambio de un caracter
//pero en este ejemplo ejecuta una funcion que tomara la salida del exec
//y al hacer g lo hara varias veces, es decir que la funcion se llamara varias veces
//pues no solo buscara una unica coincidencia, si no todas las posibles
//match => "1 lemon" coincidencia
//amount => "1" subcoincidencia
//unit => "lemon" subcoincidencia
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) { // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  } else if (amount == 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\p{L}+)/gu, minusOne));
// → no lemon, 1 cabbage, and 100 eggs


//Greed
//. cualquier caracter
//[^] cualquien caracter incluido salto de linea

//podemos tener como ejemplo un regex que elimina las lineas de comentarios
function borrarComentarios(codigo){
  return codigo.replace(/\/\/.*|\/\*[^]*\*\//g,'')
}
console.log(borrarComentarios("x = x + 1; // este aumentara en cada iteracion"))
console.log(borrarComentarios("/* Javascrip es un lengujae no typado por lo tanto \n puedes hacer cosas como esta let i = \"gagagaga\"; i = 1; */ let x = suma * suma"))
console.log(borrarComentarios("1 /* a */+/* b */ 1"));// 1 1

// por como funciona regex el ultimo ejemplo no da el resultado esperado 
//regex siempre intentara primero buscar la mayor cantidad posibles
//es decir la mas grande coincidencia y de ahi ira reduciendo
//por esta razon se dice que los operaoders *,+,?,{} con codiciosos o greedy
//para solucionar ese problema debemos de usar 
// el uso de *? que hace que no sean codiciosos none greedy
// con el * seria la coincidencia de toda la linea 

function borrarComentariosCorregido(codigo){
  return codigo.replace(/\/\/.*|\/\*[^]*?\*\//g,'')
}
console.log(borrarComentariosCorregido("1 /* a */+/* b */ 1"));// 1 1


//Dynamically creating RegExp objects
//Ahora veremos como utrilizar regex con variables, es decir que le diremos al motor regex que palabra
//debe de buscar dentro, para esto usamos el la clase de objeto RegExp

let nombre = 'harry'
//para este caso ya no estamos haciendo uso de la forma clasica de escribir regex //
let regexp = new RegExp('(^|\\s)'+nombre+'($|\\s)','gi')
console.log(regexp.exec("Hola HarRY como estas patron, harryingi harrysito super harry"))

//imagina que una persona tiene un nombre que puede causar problemas con nuestro codigo regex
//por ejemplo este nombre
let name = "dea+hl[]rd";
//tiene algunos operadores de regex que podrian causar problemas al momento
//de ponerlo dentro del objeto regex 
//para evitar este tipo de problemas utilzaremos otro regex que nos ayude a limpiar y 
//cambiar el texto que puede darnos problemas por uno que el objeto lo puede
//ejecutar sin problemas
let escaped = name.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp2 = new RegExp("(^|\\s)" + escaped + "($|\\s)",
                        "gi");
let text = "This dea+hl[]rd guy is super annoying.";
console.log(regexp2.test(text));
// → true


//search method
//con regex podemos hacer metodos mas potentes para buscar palabras o cosas dentro del texto
//este nos dara el indcie de la coincidencia es mucho mejor que indexOf

console.log("  Saul Vargas".search(/\S/))//=> 2
//buscara el primer caracter que no sea un espacio


//The lastIndex property
//en javascript los regex no son solo declaraciones si no que son objetos con estado 
//por lo tanto pueden recordar la posicion de la busqueda y continuar con la siguiente
//esto gracias a lastIndex y exec
//para ello se deben cumplir lo siguiente 
//debe de tener la bandera global g o sticky y
//y se debe se usar el metodo exec 
const pattern = /y/g;
pattern.lastIndex = 3; // Forzamos el inicio de búsqueda en el índice 3

const match = pattern.exec("xyz y");

console.log(match.index);      // 4 (Encontró la 'y' en la posición 4)
console.log(pattern.lastIndex); // 5 (Queda listo para buscar después de la coincidencia)

//diferencia entre global g y sticky y
//global busca hacia adelante despues de lastIndex si no lo encuentra seguira buscando
//sticky es extricta si no esta  donde esta lastIndex, si no falla inmediatamente 
const text2 = "xyz abc";

// GLOBAL: Busca adelante
const globalRegex = /abc/g;
globalRegex.lastIndex = 0;
console.log(globalRegex.exec(text2)); // -> ["abc"] (Lo encontró más adelante)

// STICKY: Busca solo en la posición exacta
const stickyRegex = /abc/y;
stickyRegex.lastIndex = 0;
console.log(stickyRegex.exec(text2)); // -> null (En la pos 0 hay "xyz", no "abc")


//las instancias de RegExp son globales por lo que hay que tener mucho cuidado 
//el valor de algunas propiedades pueden manteneres y no resetearse para otros
//usos que hagamos con ellos, por ejemplo lastIndex
const digit = /\d/g;

// Primera llamada: Encuentra el 1, lastIndex avanza.
console.log(digit.exec("Opción: 1")); // -> ["1"] 

// Segunda llamada: Empieza a buscar desde donde quedó la anterior.
// Falla aunque el string tenga un número, porque busca demasiado adelante.
console.log(digit.exec("Opción: 2")); // -> null


//si queremos obtener todas las coincidencias de un texto y sus posiciones exactas debemos de hacer uso
//de el metodo matchAll que generara un Iterator con el cual podremos utilizar para saber la informacion
//de manera detallada
const input = "Clave: 42, Valor: 88";
// Requiere la bandera 'g'
const matches = input.matchAll(/\d+/g);

for (const match of matches) {
  // match[0] es el valor, match.index es la posición
  console.log(`Encontrado ${match[0]} en índice ${match.index}`);
}
// Salida:
// Encontrado 42 en índice 7
// Encontrado 88 en índice 18
