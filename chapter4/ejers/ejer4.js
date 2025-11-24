function deepEqual(obj, obj2) {
  let list = Object.entries(obj);
  let list2 = Object.entries(obj2);
  
  if(list.length != list2.length) return false
  for(let i = 0; i<list.length ; i++){
    if(list[i][0] != list2[i][0]) return false
    if(typeof list[i][1] == "object" && typeof list2[i][1] == "object" && list[i][1] != null && list2[i][1] != null){
      if(!deepEqual(list[i][1],list2[i][1])) return false
    }else if(list[i][1] != list2[i][1]) return false
  }
  return true
}
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
