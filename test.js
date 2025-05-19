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
