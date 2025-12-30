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
console.log(/abc/.test("abcd"));
console.log(/abc/.test("abcHgid reafdajk abc"));
console.log(/abc/.test("gaaaabcoit"));
console.log(/abc/.test("a b c"));
console.log(/abc/.test("aabcc"));

//Sets of characters

