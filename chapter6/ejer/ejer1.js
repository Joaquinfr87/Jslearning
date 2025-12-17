//1
function Contador(){
  this.valor = 0;
}

Contador.prototype.incrementar = function(){
  this.valor++;
}

let contador = new Contador();

contador.incrementar();
contador.incrementar();
contador.incrementar();

console.log(contador.valor)//3

//2
