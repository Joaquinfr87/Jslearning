let range = (n, m, s = 1) => {
  let nums = []
  if (m >n) {
    for (let i = n; i <= m; i += s) {
      nums.push(i)
    }
  }
  else{
    for (let i = n; i >= m; i += s) {
      nums.push(i)
    }
  }
  return nums
}
let sum = (num)=>{
  let suma=0;
  for(let e of num){
    suma+=e;
  }
  return suma
}
