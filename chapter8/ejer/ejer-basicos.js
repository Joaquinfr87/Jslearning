//1
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

try {
  saludar(apellido);
} catch (e) {
  e.message = "Ese no es el nombre correcto"
  console.log(e.message)
}
//2
function validarEdad(edad){
 try{  if(isNaN(edad)) throw new Error("Ingreso un dato no numerico");
  if(edad<18) throw new Error("Es menor de edad");
  console.log("Es usted validado"); 
  }catch(e){
    console.log(e);
  }
}
validarEdad(19)
//3
let estadoConexion = false;
function conexionBaseDatos(){
  try{
    estadoConexion=true;
  }finally{
    estadoConexion=false;
  }
}
//4

