let prepararHamburguesa = new Promise((exito,fracaso)=>{
  let hayIngredientes = true;
  if(hayIngredientes){
    setTimeout(()=>{
      exito("Se puede cocinar la hamburguesa")
    },2000)
  }else{
    fracaso("No se puede cocinar la hamburguesa")
  }
})

prepararHamburguesa.then((MensajeExito)=>{console.log(MensajeExito)})
//----------------------------------------------------------------------------------------------------
let verificarPassword = (usuario,password)=>{
  console.log(`Se esta verificando el password del ${usuario}`)
  return new Promise((exito,fracaso)=>{
    let verificado
    setTimeout(()=>{
      verificado = password == "admin123"?true:false;
      if(verificado){
      console.log("exitoso")
      exito(password)
      }else{
      fracaso("Concha tu mare no es tu cuenta ladron")
    }
    },2000)
    
  })
}

verificarPassword("joaquin","admin123")
  .then((password)=>{
    console.log(`Tu password es ${password}\nHahahahah pendejo`)
  }).catch(error=>{
    console.error(error)
  })
//----------------------------------------------------------------------------------------------------
let ObtenerDatos = new Promise(resolve=>{
  let datos = {
    nombre:"Joaquin",
    edad:100,
    profesion:{
      carrera:"Ingenieria en Sistemas",
      especialidad:"BackEnd"
    }
  }
  resolve(datos)
})

ObtenerDatos.then(datos=>{
  console.log(datos)
  return datos
}).then(({nombre,profesion})=>{
    console.log(nombre+"\n"+profesion.carrera)
  })
//----------------------------------------------------------------------------------------------------

