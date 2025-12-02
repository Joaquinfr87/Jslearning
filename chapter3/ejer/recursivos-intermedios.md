# **10 Ejercicios de Recursividad en JavaScript**  

---
## **Ejercicio 0: Serie de Fibonacci**
Escribe una funcion recursiva que te de el n-esimo numero de Fibonacci
`Fibonacci(8) → 21`   

## **Ejercicio 1: Suma de dígitos recursiva**
Escribe una función recursiva que sume todos los dígitos de un número entero positivo.  
**Ejemplo:**  
`sumaDigitos(1234) → 10` (1+2+3+4)  
**Restricción:** No convertir el número a string.

---

## **Ejercicio 2: Contar dígitos de un número**
Implementa una función recursiva que cuente cuántos dígitos tiene un número entero.  
**Ejemplo:**  
`contarDigitos(9876) → 4`  
**Pista:** Usa división entera (`Math.floor(n / 10)`).

---

## **Ejercicio 3: Encontrar máximo en un array**
Crea una función recursiva que encuentre el valor máximo en un array de números sin usar bucles.  
**Ejemplo:**  
`maximoArray([3, 10, 2, 8]) → 10`  
**Restricción:** Solo usar `array.slice()` o índices.

---

## **Ejercicio 4: Palíndromo recursivo**
Escribe una función recursiva que determine si una cadena es palíndromo (se lee igual al derecho y al revés).  
**Ejemplo:**  
`esPalindromo("radar") → true`  
`esPalindromo("hola") → false`  
**Regla:** Comparar primer y último carácter, luego llamar recursivamente con la subcadena.

---

## **Ejercicio 5: Binario a decimal recursivo**
Crea una función recursiva que convierta un número binario (representado como string) a decimal.  
**Ejemplo:**  
`binarioADecimal("1101") → 13`  
**Fórmula:** `decimal = último_dígito * 2^posición + resto`

---

## **Ejercicio 6: Decimal a binario recursivo**
Implementa la conversión inversa: de decimal a binario (string) usando recursión.  
**Ejemplo:**  
`decimalABinario(13) → "1101"`  
**Algoritmo:** Dividir por 2 y concatenar restos en orden inverso.

---

## **Ejercicio 7: Suma de un rango recursivo**
Crea una función recursiva que sume todos los números en un rango [a, b].  
**Ejemplo:**  
`sumaRango(3, 6) → 18` (3+4+5+6)  
**Caso base:** Cuando a > b, retornar 0.

---

## **Ejercicio 8: Números primos recursivos**
Implementa una función recursiva que determine si un número es primo.  
**Ejemplo:**  
`esPrimo(17) → true`  
`esPrimo(15) → false`  
**Pista:** Usar función auxiliar que pruebe divisores desde 2 hasta √n.

---

## **Ejercicio 9: Secuencia de Collatz recursiva**
La conjetura de Collatz: si n es par, dividir entre 2; si es impar, multiplicar por 3 y sumar 1.  
Crea una función recursiva que imprima la secuencia hasta llegar a 1.  
**Ejemplo:**  
`collatz(6) → 6, 3, 10, 5, 16, 8, 4, 2, 1`  
**Salida:** Console.log de cada número.

---

## **Ejercicio 10: Torres de Hanoi**
**Problema clásico:** Mover n discos de la torre A a la torre C, usando B como auxiliar, sin colocar un disco grande sobre uno pequeño.  
**Implementar:**  
```javascript
function torresHanoi(n, origen, destino, auxiliar) {
  // Tu código recursivo aquí
}
```
**Salida esperada para n=3:**  
```
Mover disco 1 de A a C
Mover disco 2 de A a B
Mover disco 1 de C a B
Mover disco 3 de A a C
Mover disco 1 de B a A
Mover disco 2 de B a C
Mover disco 1 de A a C
```
**Reglas:**  
1. Solo un disco puede moverse a la vez.  
2. Cada movimiento toma el disco superior de una torre.  
3. No colocar disco grande sobre pequeño.


