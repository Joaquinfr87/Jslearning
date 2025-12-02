function dominantCharType(text){
  let obj = [...text].reduce((a,b) => {
    // [...string] lo convierte en un array 
    let char = b.charCodeAt();
    if(char > 64 && char < 91 || char > 96 && char <123){
      a.letter=(a.letter??0)+1;
    }else if(char > 47 && char < 58){
      a.digit=(a.digit??0)+1;
    }else if(".,!?;:".includes(b)){
      a.punctuation=(a.punctuation??0)+1;
    }
    else if(char == 32 || char == 9 || char == 10 || char ==13){
      a.whitespace=(a.whitespace??0)+1;
    }
    return a;
  }, {})
  let max = Math.max(...Object.values(obj));
  console.log(obj);
  return Object.entries(obj).find(a=>a[1]==max)[0];
}
console.log(dominantCharType("Hola mundo, como estas yo estoy de 100"));
//=> letter: 25
console.log(dominantCharType("Hello, world! 123"));
