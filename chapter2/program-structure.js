//expresions
//ejemplos de expresions
//una expresion termina en un semicolon
1;
!false;

//binding
//son las llamadas variables, son expresiones ligadas a un variable

let caught = 5 * 5;
let ten = 11;
console.log(ten * ten);

let mood = "light";
mood = "dark";

console.log(mood);

caught += caught + 10;

let one = 1, two = 2;
console.log(one + two);

//conditional execution
let number = Number(prompt("Ingresa un numero"));
if (!Number.isNaN(number)) { console.log(`la potencia del numero es: ${number * number}`) }

if (1 == 1) console.log("Es Verdad")

let numero = Number(prompt("ingresa un numero"));
if (numero > 10) {
  console.log("Es mayor a 10")
} else if (numero < 10) { console.log("el numero es menor a 10") }
else { console.log("el numero no esta dentro de los parametros") }



//while and do loops
let numerowhile=0;

while(numerowhile<100){
  console.log(numerowhile);
  numerowhile++;
}
let numerodo = 0;
do{
  numerodo++;
  console.log(numerodo);
}while(numerodo<10)

//for loops
let numerofor = Number(prompt("Ingrese su numero"));
for(let i=0;i<numerofor;i++){
  let line = "";
  for(let j=0;j<numerofor;j++){
    line += "*";
  }  
  console.log(line);
}

for(let i="";i.length<10;i+="*"){
  console.log(i);
}

for(let i=1;i<101;i++){
  let word = "";
  if(i%3==0)word+="Fizz"
  if(i%5==0)word+="Buzz"
  console.log(word||i);
}
for(let i=0;i<10;i++){
  let word=""
  for(let j=0;j<10;j++){
    if((i+j)%2==0){word+="#"}
    else{word+=" "} 
  }
  console.log(word);
}


//break
for (let current = 20; ; current++) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

//if Corto 
let edad = 20;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
