let esPalindromo = (texto)=>{
  let nuevoTexto ="";
  for(let i = texto.length-1;i>-1;i--){
    nuevoTexto+=texto[i];
  }
  if(texto == nuevoTexto)return true
  return false
}
document.getElementById("boton").addEventListener("click",()=>{
  let texto = document.getElementById("texto").value.trim().toLowerCase().split(" ").join("");
  if(esPalindromo(texto))alert("Es un Palindromo")
  else alert("No es un Palindromo")
})
