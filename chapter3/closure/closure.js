//Podemos definir function closure
//como una funcion que recuerda su propio entorno en el que fue creado
//por lo tanto recuerda la variables con las que fue creadas y si estas
//ya fueron establecidas

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


//En javascript tradicional las bloques con {} curly braces no crean scopes

if(true){var x =1}
console.log(x); // => 1

//para eso javascript introdujo let y const para solucionarlo 
 if(true){let y=1}
console.log(y);//=> undefined

// las closure son una combinacion de funciones y su entorno en que fue creado
// esto deberias ser algo que no sucede en otros lenguajes de programacion
// pero si es posible en javascript

function sumar(x){
  return function(y){
    return x + y;
  };
}

let suma5 = sumar(5);
console.log(suma5(2));//=> 7

//los closure tambien sirven para imitar los private metodos de otros lenguajes
const counter = (init) => {
  let privateCounter = init;
  function changeBy(num){
    privateCounter += num;
  }
  return {
    increment(){
      changeBy(1);
    },
    decrement(){
      changeBy(-1);
    },
    value(){
      return privateCounter;
    },
  }
}

let Counter = counter(19);

console.log(Counter.value());
Counter.increment();
Counter.decrement();
Counter.increment();
Counter.increment();
console.log(Counter.value());


