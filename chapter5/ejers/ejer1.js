//1
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log( arrays.reduce((a,b)=> a.concat(b),[]));
// → [1, 2, 3, 4, 5, 6]

let x = []// no puede ser solo let x;

console.log(x.concat([1,2,3,4,5]));


//2
function loop(n,test,update,func){
  if(!test(n)) return;
  func(n);
  n=update(n);
  return loop(n,test,update,func)

}

//3
function every(array,test){
  for(let e of array){
    if(!test(e)) return false 
  }
  return true
}
// aca usamos la logica y la negamos
// lo que se buscaria: si todos son menores a 10 entonces es verdadero
// aplicamos ley de morgan o lo negamos basicamente
// alguno es mayor igual que 10 
// y negamos
//
//tendriamos algo asi con notacion algebra bool y de codigo
// x*y*z*b*.... =(x'+y'+z'+b')' 
// (a&&b) = !(!a || !b)
//
// no es verdad que alguno es mayor igual que 10 = todos son menores que 10
//
// entonces every su negado o lo contario es some
function everySome(array,test){
  return !array.some(e=>!test(e))
}

//4
// el problema utiliza su arrays de SCRIPTS 
//no me gusta del todo su ejemplo de uso los lenguajes, por lo tanto lo saltare

