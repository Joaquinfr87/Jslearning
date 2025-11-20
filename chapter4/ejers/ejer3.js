function arrayToList(array){
  array.reverse();
  let list;
  for(let e of array){
    list = {value: e, rest:list}
  }
  return list
}

function listToArray(list){
  let array = []
  for(let nodo = list;nodo;nodo = nodo.rest){
    array.push(nodo.value)
  }
  return array
}
console.log(arrayToList([1,2,3,4]))
console.log(listToArray(arrayToList([10, 20, 30])));
