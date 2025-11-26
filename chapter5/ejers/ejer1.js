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

