//Definir una function
const potencia = function(x){
  return x*x;};
console.log(potencia(10));

const makeNoise = function(){
  console.log("Plang"); 
}
makeNoise();

const roundTo = function(x,step){
  let reminder = x%step;
  return x-reminder+(reminder<step/2?0:step);
}
console.log(roundTo(35,10));

//nested scopes
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

//declaration notation 
function square(x){
  return x*x;
}

//arrow function

