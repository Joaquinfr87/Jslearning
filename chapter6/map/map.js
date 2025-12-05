//Ejercicio 1
const comandos = new Map();//const para que Map no se modificado excepto por la funciones

function registrarComando(FnClave,FnHandler){
  if(comandos.has(FnClave)){
    return console.log("El comando ya existe");
  }
  comandos.set(FnClave, FnHandler);
}
function ejecutarComando(FnClave,...args){
  if(!comandos.has(FnClave)){
    return console.log("El comando no existe");
  }
  let funcion = comandos.get(FnClave)
  if(args.length==0){
    funcion();
  }
  for(let e of args){
    funcion(e);
  }
}
function eliminarComando(FnClave){
  if(!comandos.has(FnClave)){
    return console.log("El comando no existe");
  }
  comandos.delete(FnClave);
}
function imprimirComandos(){
  for(let [k,v] of comandos.entries()){
    console.log(k+" "+v);
  }
}

registrarComando("crear", () => console.log("Creado"));
registrarComando("editar", (id) => console.log("Editando", id));
registrarComando("borrar", (id) => console.log("Borrando", id));

ejecutarComando("crear");              // "Creado"
ejecutarComando("editar", 15);         // "Editando 15"
ejecutarComando("borrar", 99);         // "Borrando 99"

eliminarComando("crear");

ejecutarComando("crear");   // ERROR -> "Comando no encontrado"

imprimirComandos();
