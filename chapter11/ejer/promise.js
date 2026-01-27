//1
//convierto a promise
function esperar(segundos, callback) {
  setTimeout(() => {
    callback(`Han pasado ${segundos} segundos.`);
  }, segundos * 1000);
}

// Uso:
esperar(2, (mensaje) => {
  console.log(mensaje);
});

function esperarPromise(segundos){
  return new Promise(exito=>{
    setTimeout(()=>{
      exito(`Han pasado ${segundos} segundos.`)
    },segundos*1000)
  }
)}
esperarPromise(2).then(mensaje=>console.log(mensaje))
.then(mensaje=>console.log(mensaje))

//2

function esPar(numero, callback) {
  if (numero % 2 === 0) {
    callback(null, "¡Es par!"); // El primer argumento suele ser el error (null aquí)
  } else {
    callback("Error: El número es impar ❌", null);
  }
}

// Uso:
esPar(3, (error, exito) => {
  if (error) {
    console.error(error);
  } else {
    console.log(exito);
  }
});

function esParPromise(numero){
  return new Promise((exito,fracaso)=>{
    if(numero%2==0){
      exito("Es par")
    }else{
      fracaso("no es par")
    }
  })
}
esParPromise(10).then(mensaje=>{console.log(mensaje)})
  .catch(error=>console.error(error))


//3
const getCarne = (cb)=> setTimeout(()=>cb("carne"),500);
const cocinar = (carne,cb)=>setTimeout(cb("hamburguesa"),500);
const servir = (hamburguesa,cb)=>setTimeout(cb("Plato con "+ hamburguesa),500)

getCarne((carne)=>{
  console.log("Tengo Carne" ,carne)
  cocinar(carne,(cocinada)=>{
    console.log("Cocinada ",cocinada);
    servir(cocinada,(plato)=>{
      console.log("Listo ",plato)
    })
  })
})

//promise
const getCarnePromise = (cb)=>{
  return new Promise(()=>{
    setTimeout(()=>{
      cb("Carne")
    },500)
  })
}
const cocinaPromise = (carne,cb)=>{
  return new Promise(()=>{
    setTimeout(()=>{
      cb("Hamburguesa")
    },500)
  })
}
const servirPromesa = (hamburguesa,cb)=>{
  return new Promise(()=>{
    setTimeout(()=>{
      cb("Plato con ",hamburguesa)
    },500)
  })
}
