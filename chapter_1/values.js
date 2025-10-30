// todo en el mundo de la programacion es data, la cual se guarda en secuencias de bits (0 y 1)

//esta data se separa en chunks que los llamamos values, los values tienen types que cumplen 
//diferentes roles, veremos los diferente types acontinuacion:
//
//numeric
//13
//9.18
//-0.5
//2.9999e8

//arithmetic
//(100+4)*2

//special numbers
//Infinity => mas que un numero es un concepto el mayor de todos
//NaN => not a number un numero que deberia ser numero pero no es ejm 0/0
//undefined => una variable declarada pero no tiene valor
//null => ausencia de valor de manera intencional 

//strings
//"" =>string vacio
//"hello" => string
//'hello' => string
//`hello` => string
"This is the first line\nAnd this is the second"
  //=>This is the first line
  //And this is the second

  //concatenateon
  //"con"+"cen"+"cin"+19+x

  //operation and actions
  `El resultado es: $(4+4)`




//unary operators
//typeof => devuelve el type de un value ejm typeof 4 => "number"
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string



//boolean values
console.log(2 > 3)
//=> false
console.log(2 < 4)
//=> true
console.log("Nombre" == "Name")
//=> false
console.log(4 != 3)
//=> true


//logical operators
// los llamados ands, ors de sistemas digitales con sus tablas de valor
console.log(true && false)
// → false
console.log(true && true)
// → true
console.log(false || true)
// → true
console.log(false || false)
// → false



//automatic type conversion
//javascript convierte los valores de manera automatica 
//segun reglas propias 
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)// en este ejemplo es 51 por que el + tambien funciona para concatenar
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
console.log(null == undefined);
// → true
console.log(null == 0);
// → false


//Short-circuiting of logical operators (IMPORTANTE)
//&& se detines en el primer valor falsy y va de izquierda a deracha si todo es truthy retorna el ultimo valor
//|| se detiene en el primer valor truthy y va de izquierda a derecha si todo es falsy retorna el ultimo valor
//?? se detiene en el primer valor que no sea NULL o undefined va de izq a der si todos son vacios retorna el ultimo
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
