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

