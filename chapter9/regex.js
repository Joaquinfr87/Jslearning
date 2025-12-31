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


//? 
