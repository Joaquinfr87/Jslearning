//1
let i = 1;
do{console.log(i);i++}while(i<11);
//2
i=1;
while(i<51){console.log(i);i+=2}
//3
for(let i=20;i>=0;i--){
  if(i%3==0)console.log(i)
}
//4
let sum4=0;
for(let i=1;i<101;i++){sum4+=i}
console.log(sum4);
//5
let pot5 = 2;
while(pot5 < 1025){
  console.log(pot5);
  pot5*=2;
}
//6
for(let i = 0; i<10 ;i++){
  console.log(7*( i+1 ))
}
//7
let letracontador = 0;
let palabra = "Hola Mundo";
for(let e of palabra){
  if(e==='a')letracontador++
}
console.log(letracontador);

//8
for(let piramide ="";piramide.length<10;piramide+="#"){
  console.log(piramide);
}
//9
for(let i = 0;i<50;i++){
  if(i%5==0)continue
  console.log(i);
}
//10
let contador=0,sumador=0;
while(sumador<1000){
  contador++;
  sumador+=contador;
  console.log(contador," ",sumador);
}
console.log(contador);
//11
let piramideInv="";
for(let i = 10; i>0;i--){
  for(let j = 0; j<i;j++){
    piramideInv+="#";
  }
  console.log(piramideInv);
  piramideInv = "";
}
//12
let tablero="";
for(let i = 0;i<8;i++){
  for(let j=0;j<8;j++){
    if((i+j)%2==0)tablero+="#"
    else tablero+=" "
  }
  console.log(tablero);
  tablero="";
}
//13
let filas=5;
let col = filas*2-1;
for(let i=0;i<filas;i++){
  let linea = "";
  for(let j=0;j<col;j++){
    if(j>=( Math.floor( col/2 )-i)&& j<( Math.ceil(col/2) )+i){linea+="#";continue;}
    linea+=" ";
  }
  console.log(linea);
}
//14
for(let i = 2 ; i<51;i++){
  let esPrimo = true;
  for(let j=2;j<i;j++){
    if(i%j==0){esPrimo=false;break;}
  }
  if(esPrimo)console.log(i+" es Primo");
}
//15
let factorial = 1;
for(let i = 1;i<=10;i++){
  factorial*=i;
}
console.log(factorial);
//16
let numero1=0;
let numero2=1;
for(let i =0;i<15;i++){
  if(i==0){console.log(numero1);console.log(numero2);}
  let temp = numero2;
  numero2 += numero1;
  numero1 = temp;
  console.log(numero2);
}
//17
let suma17=0;
for(let i = 1;i<=1000;i++){
  if(i%3==0 || i%5==0) suma17+=i
}
console.log(suma17);
//18
let palabra18="Hola Mundo, que tal va el dia";
let reves="";
for(let i=0;i<palabra18.length;i++){
  reves+=palabra18[palabra18.length-1-i];
}
console.log(reves);
//19

