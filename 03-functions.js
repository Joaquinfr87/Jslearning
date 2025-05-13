//ejemplo de una funcion
function square(x){
    return x*x;
}
console.log(square(3));

//podemos usar constante para crear un funcion
const pow = function(x,y){
    if(y==0){
        return 1;
    }
    return x* pow(x,y-1)
};
console.log(pow(4,2));//funcion recursiva en js

//redondeo
const roundTo = function(n, step) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
  
  console.log(roundTo(23, 10));
//function de ratios funcion dentro de una funcion
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };
  console.log((hummus(2)))

  //distintas formas de declarar una funcion
  //al final
  console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
//funciones flechas
const suma=(x,y)=>{
    return x+y;
};
const square2=x=>x*x;
const hola=()=>console.log("Hola");
//error de stack o de mucha recursividad o iteraciones infinitas
function chicken() {
    return egg();
  }
  function egg() {
    return chicken();
  }
  console.log(chicken() + " came first.");
//js ignora los argumentos extra en la funcion
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));

//argumentos default
function roundTo(n, step = 1) {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
  
  console.log(roundTo(4.5));

  //closure clausura
  //funcion que recuerda el entorno donde fue creada
  function wrapValue(n) {
    let local = n;
    return () => local;
  }
  
  let wrap1 = wrapValue(1);
  let wrap2 = wrapValue(2);
  console.log(wrap1());
  // → 1
  console.log(wrap2());
  // → 2

  function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2);
  console.log(twice(5));
  // → 10

//ejercicios
//minimo dos numeros
const min=(x,y)=>{
  if(x<y)return x
  return y
};
//maximo dos numeros
const max=(x,y)=>{
  if(x>y)return x
  return y
};
