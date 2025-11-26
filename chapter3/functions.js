//Definir una function
const potencia = function (x) {
  return x * x;
};
console.log(potencia(10));

const makeNoise = function () {
  console.log("Plang");
}
makeNoise();

const roundTo = function (x, step) {
  let reminder = x % step;
  return x - reminder + (reminder < step / 2 ? 0 : step);
}
console.log(roundTo(35, 10));

//nested scopes
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
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

//declaration notation 
function square(x) {
  return x * x;
}

//arrow function
const RoundTo = (x, step) => {
  let remainder = x % step;
  return x - remainder + (remainder < step / 2 ? 0 : step);
}
console.log(RoundTo(34, 10));

let pow = (x, n) => {
  if (n < 1) return 1;
  return x * pow(x, n - 1);
};
console.log(pow(2, 3));


//out of stack
//Cada corrida de una funcion se guarda en la memorica stack, cuando esta funcion se ve sobrepasada 
//en las llamadas entonces se muestra el error out of stack o too much recursion
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");




//optional arguments
//Aunque to solo tengas un parametro para una function, puedes poner parametros extra a ella 
//el lenguaje los ignorara
//si tienes mas argumentos de los que pasaste, entonces los argumentos faltantes tomaran el valor de 
//undefined
console.log(potencia(10, 36, 34, "Cabeza"));

let minus = (a, b) => {
  if (b == undefined) return -a;
  return a - b;
}
console.log(minus(10));
console.log(minus(5, 2));
console.log(minus(4, 5, 6, 7, 8, "Gaaaaa"));
// Tambien podemos dar valores predefinidos en la functiones
let multiplicacion = (a, b = 1) => {
  return a * b;
}
console.log(multiplicacion(2));




//closure 
// Es un una funciones que recuerda su propio contexto
// en el que fue creado
// La funcion puede devolver otra funcion
let contador = ()=>{
  let numero = 0;
  return () => {
    numero++;
    console.log(numero);
  }
}
let contar = contador();
contar();
contar();

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

//recursion
//Es una funcion que se llama a si misma
function fibonacci(n){
  if(n==1)return 1;
  if(n==0)return 0;
  return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(4));

let pow2= (x,n)=>{
  if(n<1)return 1;
  return x*pow(x,n-1);
}
console.log(pow(2,3));


