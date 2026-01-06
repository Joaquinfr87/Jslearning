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
//
