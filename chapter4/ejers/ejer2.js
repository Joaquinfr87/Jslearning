function reverseArray(array){
  let newArray = []
  for(let i = array.length-1;i>-1;i--){
    newArray.push(array[i])
  }
  return newArray
}

function reverseArrayInPlace(array){
  for(let i=0;i<array.length/2;i++){
    let aux = array[i]
    array[i] = array[array.length - i-1]
    array[array.length - i-1] = aux
  }
  return array
}
