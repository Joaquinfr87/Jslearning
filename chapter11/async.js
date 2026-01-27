//asynchronicity
//En general las tareas que se realizan o corren en un codigo se realizan de manera secuencial
//termina una y empieza la otra, mientra se ejecuta uno de los paso tu programa se detines hasta
//que este acabe lo que esta haciendo 
//la programcion asyncrona hace que esto no suceda, multiples task o tareas se ejecutan al mismo 
//tiempo haciendo uso de procesamiento para ello, por lo tanto algunas task que se vuelven o pueden
//estar lentos por consecuencia de la conectividad, ya no se requiere esparar que terminen para que las otras
//tareas empiecen a trabajar
//lo cual da un mejor uso del tiempo para la eficiencia del codigo


//callback
//un callback es una funcion que se pase como argumento a otra funcion
//se considera asyncrona por que solo se leera al momento de que se llame la funcion 
//el callback se mantendra en espera hasta que se haga la llamada
//o tambien mejor dicho se considera asyncrono por que se ejecuta en un momento posterior
//cuando una operacion termina o un evento ocurre
//un callback no es asyncrono por definicion 
setTimeout(console.log("Hola Mundo"), 500);// despues de medio segundo ocurrira el console.log


console.log("Inicio")
setTimeout(() => { console.log("Gaaaa") }, 500)
console.log("Fin")
//esta primera funcion es asyncrona por que espera a que termine la operacion de medio segundo y se llama al callback
console.log("Inicio")
setTimeout(console.log("Gaaaa"), 500)
console.log("Fin")
//esta no es asyncrona por que se esta dando como parametro directamente el resultado, es decir que console.log
//se ejecuta ese instante
//se dice que los callback tienen una naturaleza contagios por que un callback dependera de otro y demas
function procesarTodo() {
  const datos = obtenerDatos(); // ❌ Esto fallará, 'datos' estará vacío
  return datos + " procesados";
}

// ✅ La asincronía te obliga a cambiar la estructura:
function procesarTodo(callback) {
  obtenerDatos(datos => {
    callback(datos + " procesados");
  });
}
//esto puede generar un callback Hell
//donde varias tareas ayncronas dependes de otras
obtenerUsuario(id, (usuario) => {
  obtenerDireccion(usuario.id, (direccion) => {
    calcularEnvio(direccion, (costo) => {
      generarFactura(costo, (factura) => {
        console.log(factura);
        // ¡Y así hasta el infinito!
      });
    });
  });
});
//algo que es muy dificil de arreglas y entender


//promises
//la promesa es un objeto que representa la terminacion o el fracaso de una funcion asyncrona 
//pendiente,resuleta,rechazada

const miPromesa = new Promise((resolve, reject) => {
  const exito = true;
  setTimeout(() => {
    if (exito) {
      resolve("Toma tus datos")
    } else {
      reject("No se pudo poner tus datos")
    }
  }, 2000)
});
miPromesa.then((resultado) => {
  console.log(resultado)
}).catch((error) => {
  console.error(error)
}).finally(()=>{
    console.log("proceso finalizado")
  })



