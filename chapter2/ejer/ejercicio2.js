//1
let pass = prompt("Ingresa tu password")
let intentos = 0;
while(pass != "Joaco"){
  pass = prompt("Escribe nuevamente tu password")
  intentos++
}
console.log("Te equivocaste: "+intentos)
//2
let numero = Math.floor(Math.random() * 100);
do{
  var res = prompt("Adivina, ingresa un numero")
  if(res>100 && res<0)continue
  if(res==numero) break
  if(res<numero+4 && res>numero-4)alert("Muy caliente")
  else if(res<numero+11 && res>numero-11)alert("Caliente")
  else if(res<numero+21 && res>numero-21)alert("Tibio")
  else alert("Frio")
}while(res!= numero)
alert("Lo adivinaste")
//3
for(let i=0;i<10;i++){
  console.log(`=== Tabla ${i+1} ===`)
  for(let j=0;j<10;j++){
    console.log(`${i+1} x ${j+1} = ${(i+1)*(j+1)}`)
  }
  console.log("\n\n")
}
//4
let dia = prompt("Ingrese el dia de la semana del 1 al 7")
let contador=0;
let correcto = false
let termino = false
for(let i=0;i<6;i++){
  let text = "Semana "+(i+1)+" "
  for(let j=0;j<7;j++){
    if((j+1)!=dia && !correcto){text+="   ";continue}
    correcto = true;
    contador++;
    if(contador<10)text += "  "+contador 
    else text += " "+contador
    if(contador==31){termino=true; break}
  }
  console.log(text);
  if(termino==true)break
}
//5
let x = Number(prompt("Ingrese el valor de x"))
let y = Number(prompt("Ingrese el valor de y"))
let z = Number(prompt("Ingrese el valor de z"))

let aux = x + y +z;
alert("La suma debe ser menor o igual que "+aux);
let sum = prompt("Ingresa la suma a alcanzar");
alert("El producto debe ser menor o igual que "+(x*y*z));
let prod = prompt("Ingrese el producto a alcanzar");

let ganador = [];
let combinaciones = [];
let contador5 = 0;
for(let i=0;i<x;i++){
  for(let j=0;j<y;j++){
    for(let k=0;k<z;k++){
      let suma = (i+1)+(j+1)+(k+1);
      let produ = (i+1)*(j+1)*(k+1);
      contador++
      if(suma == sum && produ == prod){ganador.push(`${i+1}, ${j+1}, ${k+1} suma= ${suma} , producto= ${produ}`); continue}
      if(suma == sum){combinaciones.push(`${i+1}, ${j+1}, ${k+1} suma= ${suma}, producto no cumple `)}
      if(produ == prod){combinaciones.push(`${i+1}, ${j+1}, ${k+1} suma no cumple, producto= ${produ}`)}
    }
  }
}
console.log("combinaciones encontradas en el orden x,y,z que cumplen una condicion")
for(let e of combinaciones){
  console.log(e)
}
console.log("combinacion que cumple con las dos condiciones en orde x,y,z")
for(let e of ganador){
  console.log(e)
}
console.log(combinaciones)
