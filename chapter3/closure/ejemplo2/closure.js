let ayudaTexto = document.getElementById("ayuda");


let cambioAyuda = (texto)=>{
  ayudaTexto.textContent = texto;
}

let mostrarAyuda=()=>{
  const ayuda = [
    {id: "email",text:"Tu email debe ser de google"},
    {id: "edad",text:"Debes ser mayor de 18"},
    {id: "nombre",text:"Solo puedes poner un unico nombre"}
  ]

  for(let e of ayuda){
    document.getElementById(e.id).onfocus = () => cambioAyuda(e.text);
    // document.getElementById(e.id).onfocus = cambioAyuda(e.text);
    // este no funciona por que se llama ese instante 
    // y sale undefined
    // debe esperar una funcion y no una salida con la llamada ();
  }
  
}

mostrarAyuda();
