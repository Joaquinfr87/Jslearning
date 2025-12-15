//1 
let par=0;
let impar=0;
for(let numero = Number(prompt("Ingresa un numero"));numero>0;numero= numero%Math.pow(10, Math.floor(Math.log10(numero)))){
  if(Math.floor(numero/Math.pow(10, Math.floor(Math.log10(numero))))%2==0) par++;
  else impar++
}

console.log("par= "+par);
console.log("impar= "+impar);
//2
let num = Number(prompt("Ingresa un numero para la piramide"))
for(let i=0;i<num;i++){
  let text=""
  for(let j=num-i;j>0;j--){
    text+=(num - j+1) + " "
  }
  console.log(text)
}
// 1 2 3 4 5 6 7 
// 2 3 4 5 6 7 
// 3 4 5 6 7 
// 4 5 6 7 
// 5 6 7 
// 6 7 
// 7 
for(let i=0;i<num;i++){
  let text=""
  for(let j=num-i;j>0;j--){
    text+=(num - j-i+1) + " "
  }
  console.log(text)
}
// 1 2 3 4 5 6 7 
// 1 2 3 4 5 6 
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 



//3
let nums = [];
for(let numero = Number(prompt("Ingresa un numero de Armstrong a verificar"));numero>0;numero= numero%Math.pow(10, Math.floor(Math.log10(numero)))){
  nums.push(Math.floor(numero/Math.pow(10,Math.floor(Math.log10(numero)))))
}
let suma = 0;
for(let e of nums){
  suma+= Math.pow(e,nums.length)
}
if(Number(nums.join("")==suma)){
  console.log("Es un numero Armstrong")
}
else{ console.log("No es un numero Armstrong")}
//4
let segundos = prompt("Ingrese los segundos");
let sec = segundos%60;
let min = ((segundos-sec)/60)%60;
let horas = ((((segundos-sec)/60)-min)/60)%24
let dias = (((((segundos-sec)/60)-min)/60)-horas)/24


console.log(`${dias} dias ${horas} horas ${min} min ${sec}`)
//5
let fib1=0
let fib2=1
let parFib=1
let imparFib=1
while(fib2<10000){
  let aux = fib2;
  fib2+=fib1;
  fib1=aux;
  console.log(fib2);
  (fib2%2)?parFib++:imparFib++
} 
