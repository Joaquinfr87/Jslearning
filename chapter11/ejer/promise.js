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
