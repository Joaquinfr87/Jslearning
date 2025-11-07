let validar = ()=>{
  let nombre = document.getElementById("nombre").value.trim();
  let apellidoPaterno = document.getElementById("apellidoPaterno").value.trim();
  let apellidoMaterno = document.getElementById("apellidoMaterno").value.trim();
  let direccion = document.getElementById("direccion").value.trim();
  let edad = document.getElementById("edad").value;
  let fecha = document.getElementById("fecha").value;
  let email = document.getElementById("email").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let genero = document.getElementsByName("genero");
  let ciudad = document.getElementById("ciudad").value.trim();
  let generoChecked;
  
  let validado = true;

  for(let e of genero){
    if(e.checked){
      generoChecked=true;
    }
  }
  if(!generoChecked){
    alert("Selecciona un genero");
    validado=false;
  }
  if(!nombre){alert("Ingrese un Nombre");validado=false;}
  if(!apellidoPaterno){alert("Ingrese un apellido paterno");validado=false;}
  if(!apellidoMaterno){alert("Ingrese un apellido materno");validado=false;}
  if(!direccion){alert("Ingrese una direccion");validado=false;}
  if(!edad){alert("Ingrese una edad");validado=false}
  else if(edad<0 || edad>120){alert("Ingrese una edad realista");validado=false;}

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){alert("Ingrese un correo electronico valido");validado=false;}
  if(!fecha){alert("Ingresa una fecha de nacimiento");validado=false;}
  if(!telefono){alert("Ingrese un numero de telefono");validado=false;}
  else if(telefono.length>8){alert("Ingrese un numero de 8 digitos");validado=false;}
  if(!ciudad){alert("Ingrese una ciudad");validado=false;}

  return(validado)
};
let validado = ()=>{
  if(validar())return alert("El formulario se envio exitosamente")
}
