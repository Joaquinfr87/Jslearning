//1
for(let i = ""; i.length<10;i+="*"){
  console.log(i)
}

//2
for(let i = 0; i<100 ; i++){
  let text=""
  if(i%3==0)text+="Fizz"
  if(i%5==0)text+="Buzz"
  console.log(text||i);
}

//3
for(let i = 0; i<8 ; i ++){
  let linea = ""
  for(let j =0 ; j<8 ; j++){
    if((i+j)%2==0)linea+="#" 
    else linea+=" "
  }
  console.log(linea)
}


