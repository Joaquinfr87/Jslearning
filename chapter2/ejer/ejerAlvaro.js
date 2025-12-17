// 6. Recursión (Reto Extra)
// Hemos visto que % (el operador de resto) se puede usar para probar si un número es par o impar
// usando % 2 para ver si es divisible por dos.
// Aquí hay otra manera de definir si un número entero positivo es par o impar:
// - El cero es par.
// - El uno es impar.
// - Para cualquier otro número N, su paridad es la misma que N - 2.
// Define una función recursiva 'esPar' que corresponda a esta descripción.
// La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.

function esPar(n){
  if(n == 0) return true
  if(n == 1) return false
  console.log(n)
  return esPar(n-2)
}
console.log(esPar(48))
