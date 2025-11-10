let contador = document.getElementById("contador");
let contador2 = document.getElementById("contador2");

let contar= (num,contador)=>{
  return () =>{
    num++;
    contador.textContent=`${num}`
  }
}
let contando = contar(0,contador);
let contando2;
let numero;
document.getElementById("numero").addEventListener("change", ()=>{
  numero = parseInt(document.getElementById("numero").value) || 0;
  contando2 = contar(numero,contador2);
})

document.getElementById("boton").addEventListener("click",contando);
document.getElementById("boton2").addEventListener("click", ()=>{
  return contando2();
})


