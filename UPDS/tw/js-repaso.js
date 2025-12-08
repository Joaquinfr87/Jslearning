//los parametros los especificamos en la funcion 
//argumentos cuando llamamos a la funcion
let sum = (a,b)=>{
  return a+b
};

const factorial = (a)=>{
  if(a==1)return 1
  return a*factorial(a-1)
}
console.log(factorial(5))

let estudiante = {
  notas:{
    primer: 100,
    segundo: 99,
    final:67
  },
  aprobado(){
    let notas = Object.values(this.notas)
    return notas.reduce((a,b)=>a+b)/notas.length
  }
}
console.log(estudiante.aprobado())
