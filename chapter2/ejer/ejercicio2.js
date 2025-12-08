//1
do {
  var intentos = 0;
  var pass = prompt("Ingrese su contrasena") == "Alvarado" ? true : intentos++;
} while (pass);

if (pass) console.log(intentos);

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
