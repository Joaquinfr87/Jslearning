//el minimo
const min = (...n)=>{
  let minimo = n[0];
  for(let i of n){
    if(i<minimo)minimo=i
  }
  return minimo;
};
console.log(min( 5,6,7,2,4,9,10 ));

//recursion
function isEven(n){
  if(n==0)return true
  if(n==1)return false
  if(n<0)return isEven(-n)
  return isEven(n-2);
}
console.log(isEven(50));

//bean counting 
function countChar(char){
  return (word)=>{
    let count=0;
    for(let e of word){
      if(e===char)count++
    }
    return count;
  }
}
console.log(countChar('a')("hola mundo"))
