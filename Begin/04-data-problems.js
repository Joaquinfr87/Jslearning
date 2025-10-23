//1
function range(start,end,step=start<end?1:-1){
    let nums=[];
    if(start<end){
        for(let i = start;i<=end;i+=step){nums.push(i);}
    }
    else{
        for(let i=start;i>=end;i+=step){nums.push(i);}
    }
    return nums;
}

function sum(nums){
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}

console.log(sum(range(1, 10)))
// 55
console.log(range(5, 2, -1));

// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//2
function reverseArray(array){
    for(let i=0;i<=array.length/2;i++){
        let aux=array[i];
        array[i]=array[array.length-1-i];
        array[array.length-1-i]=aux;
    }
    return array;
};
console.log(reverseArray(["A", "B", "C"]));
//3
const arrayToList=(array)=>{
    let list=null;
  for(let i=array.length-1;i>-1;i--) {
    list={valor: array[i],next: list}
  }
  return list;
};
const listToArray=(list)=>{
  let array=[];
  while(list!==null){
  array.push(list.valor);
  list=list.next;
  }
  return array;
}
const prepend = (valor,list) =>{
    return {valor:valor,next:list}
};
const nth = (list,n)=>{
if(list==null){return undefined;}
if(n==0){return list.valor;}
return nth(list.next,n-1);
};
console.log(arrayToList([10,20,30]));
list=arrayToList([3,4,5,6,7])
console.log(listToArray(list));


console.log(list);

console.log(nth(list,5));

//4
function deepEqual(a,b){
  if(a===b)return true;
  if(a==null||typeof a !="object"||
     b==null||typeof b !="object")return false;
  let keys_a=Object.keys(a),keys_b=Object.keys(b);
  if(keys_a.length!=keys_b.length)return false;
  for(let key of keys_a){
    if(!keys_b.includes(key) || !deepEqual(a[key],b[key]))return false;
  }
  return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(Object.keys(obj))
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
