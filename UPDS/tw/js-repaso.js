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

console.log(estudiante.aprobado())
let estudiante = {
  nombre: "Joaquin",
  apellido: "Felipez",
  notas: [
    { materia: "Programacion", parcial: "Primer parcial", nota: 100 },
    {materia: "Algoritmos",parcial: "Segundo parcial", nota:79},
    {materia: "Programacion", parcial:"Segundo parcial",nota: 99}
  ],
  telefono: [45651312,23234525,76756756],
  agregarTelefono(numero){
    this.telefono.push(numero)
  },
  get estado (){
    let notaTotal = this.notas.reduce((a,b)=> b.nota + a)
    if(notaTotal/this.notas.length>50)return true
    return false
  }
};





class Persona{
  constructor(nombre,apellido,fecha_nac){
    this.nombre=nombre
    this.apellido=apellido
    this.fecha_nac=fecha_nac
  }
  get edad(){
  let fecha = new Date();
    return fecha.getFullYear()-fecha_nac.getFullYear
  }
  mostrar(){
    console.log(`nombre: ${this.nombre}\n
    apellido: ${this.apellido}\nombre
    edad: ${this.edad}`)
  }
}
class Estudiante extends Persona{
  
  constructor(nombre,apellido,fecha_nac,carrera){
    this.nombre=nombre
    this.apellido=apellido
    this.fecha_nac=fecha_nac
    this.carrera=carrera
  }

  mostrar(){
    console.log(`nombre: ${this.nombre}\n
    apellido: ${this.apellido}\nombre
    edad: ${this.edad}\n 
    carrera: ${this.carrera}`)
  }
}
