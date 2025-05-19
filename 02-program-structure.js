//expresiones
1;
!false;
//enlaces o bidings
let x=5;
let y=4*5;

//let y var son similares pero tienes usos de bloque diferentes

//puedes usar var en funciones 
//ES MEJOR USAR LETy var solo en algunos casos sabiendo el porque 
//const es una constante


console.log(x+y);//25
//x=5, y=20
//x es un enlace a 5, y es un enlace a 20

x+=50; //suma 50 a x
x++; //suma uno a x
x--;//resta uno a x

j=5,nano,nombre="Juan";

//entradas de valor

prompt("Ingresa tu nombre: ");
//prompt es una funcion que pide un valor al usuario y lo devuelve como string
// una funcion tambien es console.log

//$ en string
console.log(`Hola ${nombre}`);
//template string, se usa para concatenar variables dentro de un string
//se usa el simbolo $ para indicar que es una variable se usa otro tipo de comillas ``

//CONTROL DE FLUJO O ESTRUCTURAS DE CONTROL
//if, else, switch, for, while, do while, break, continue

//if
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}

if (1 + 1 == 2) console.log("It's true");
// → It's true

//if else
theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
//if cadena
let num = Number(prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

//while y do loops

let i = 0;

while (i < 5) {
  console.log("Valor de i en while:", i);
  i++;
}

let j = 0;

do {
  console.log("Valor de j en do...while:", j);
  j++;
} while (j < 5);

//for loops
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }

//romper un loop
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }

  //switch
  switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }

  //includes
  const frutas = ['manzana', 'banana', 'cereza'];

  console.log(frutas.includes('banana')); // true
  console.log(frutas.includes('pera'));   // false
  //con indice 
   console.log(frutas.includes('banana',2)); 
  // false


/*Ejercicios de loops*/
/*Nivel intermedio (1–7)

    Cuenta cuántos números del 1 al 100 son divisibles entre 3.

    Dado un array de nombres, imprímelos todos con un for.

    Cuenta cuántas letras "a" hay en una cadena de texto.

    Suma todos los valores de un array numérico.

    Invierte un array sin usar .reverse().

    Imprime solo los caracteres de una cadena que no sean vocales.

    Pide números hasta que el usuario escriba "0", luego muestra la suma total (do...while).
*/
for(let i=0;i<100;i++){
    if(i%3==0){
        console.log(i);
    }
}

let name = prompt("Ingresa tu nombre: ");
for(let i=0;i<name.length;i++){
    console.log(name[i]);
}



name = prompt("Ingresa una oracion: "),c=0;

for(let i =0;i<name.length;i++){
    if(name[i]=='a'){
        console.log(name[i]);c++;}
}
console.log(c);

let nums = [1,2,3,4,5,6,7,8,9,10],s=0;
for(let i=0;i<nums.length;i++){
    s+=nums[i];
}
console.log(s);


for(let i=0;i<=nums.length;i++){
    if(i<nums.length/2){
        let aux=nums[i];
        nums[i]=nums[nums.length-i-1];
        nums[nums.length-i-1]=aux;
    }
}
console.log(nums);

let cadena = prompt("Ingresa una cadena: "),vocales = ['a','e','i','o','u'];
for(let i=0;i<cadena.length;i++){
    if(!vocales.includes(cadena[i])){
        console.log(cadena[i]);
    }
}

let sum=0,number;
do{

    number=prompt("Ingresa un numero: ");
    sum+=Number(number);
    
}while(number!=0);
console.log(sum);
/*    Verifica si un número es primo usando un bucle for.

    Genera los primeros n números de la serie de Fibonacci.

    Crea una pirámide de asteriscos con altura n:

*
**
***
****

*/

let numero=prompt("Ingresa un numero: ");
let EsPrimo=true;
let raiz=Math.sqrt(numero);

for(let i=2;i<=raiz;i++){
  if(numero%i==0){
    EsPrimo=false;
    break;
  }
}
console.log(EsPrimo?"Es primo":"No es primo");

let n = prompt("Ingrese la altura n");

let chain="";
for(let i=0;i<n;i++){
  chain+="*";
  console.log(chain); 
}
//Otra alternativa mucho mejor
for(let line="#";line.length<=n;line+="#"){
    console.log(line);
  }

//fizz buzz
for(let i=0;i<100;i++){
  let cadena="";
  if(i%3==0)cadena+="Fizz"
  if(i%5==0)cadena+="Buzz"
  console.log(cadena||i);
}

//tablero ajedrez
let m=prompt();
for(let i=0;i<m;i++){
  let tablero="";
  for(let j=0;j<m;j++){
    if((i+j)%2==0){
      tablero+="#";
    }
    else{
      tablero+=" "
    }
  }
  console.log(tablero)
}
