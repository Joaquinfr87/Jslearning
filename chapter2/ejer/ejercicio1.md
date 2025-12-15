## Ejercicios de nivel medio (1–10)

1. **Contador simple:**
   Usa un bucle `for` para imprimir los números del 1 al 10, cada uno en una línea.
   

2. **Números impares:**
   Escribe un bucle `while` que imprima todos los números impares entre 1 y 50.

3. **Cuenta regresiva:**
   Crea un bucle `for` que empiece en 20 y llegue a 0, mostrando solo los múltiplos de 3.

4. **Suma de enteros:**
   Usa un bucle `for` para sumar los números del 1 al 100 y mostrar el resultado total.

5. **Potencias de 2:**
   Escribe un bucle `while` que imprima todas las potencias de 2 menores o iguales a 1024.

6. **Tabla de multiplicar:**
   Usa un bucle `for` para mostrar la tabla del 7, del 1 al 10.

7. **Contador de letras:**
   Dada una cadena fija, recórrela con un `for` y cuenta cuántas veces aparece la letra “a”.

8. **Triángulo de caracteres:**
   Con un bucle `for`, imprime una figura de este tipo:

   ```
   #
   ##
   ###
   ####
   #####
   ```

9. **Números saltados:**
   Usa un bucle `for` que imprima los números del 1 al 50, **pero salte** (con `continue`) los divisibles por 5.

10. **Acumulador hasta cierto valor:**
    Usa un `while` que vaya sumando números consecutivos hasta que la suma total sea mayor a 1000, y muestra cuántos números fueron sumados.

---

## 🔁 Ejercicios de nivel difícil (11–20)

11. **Triángulo invertido:**
    Crea un bucle que imprima:

    ```
    #####
    ####
    ###
    ##
    #
    ```

12. **Tablero de ajedrez:**
    Con dos bucles anidados, genera un patrón de 8×8 alternando `#` y espacio.

13. **Pirámide centrada:**
    Crea un patrón como este con `#` y espacios:

    ```
        #
       ###
      #####
     #######
    #########
    ``` 

14. **Números primos (con bucles anidados):**
    Usa un bucle exterior que recorra del 2 al 50, y dentro otro bucle que pruebe divisores para imprimir solo los primos.

15. **Factorial:**
    Calcula el factorial de un número `n = 10` usando un bucle `for`.

16. **Serie Fibonacci:**
    Usa un bucle `for` para generar los primeros 15 números de la secuencia Fibonacci.

17. **Suma de múltiplos:**
    Usa un bucle para sumar todos los números entre 1 y 1000 que sean múltiplos de 3 o de 5.

18. **Inversión de cadena:**
    Dada una cadena `"javascript"`, usa un bucle `for` para imprimirla al revés.

19. **Contar dígitos pares:**
    Dado un número entero, conviértelo a cadena y recórrelo con un `for` para contar cuántos dígitos son pares.

20. **Buscar el número máximo (manual):**
    Dado un array `let nums = [12, 45, 2, 67, 34, 89, 11];`, usa un bucle `for` (sin `Math.max`) para encontrar el valor máximo.


## 🔁 Ejercicios de nivel complejo (21–30)

21. Contador de dígitos pares e impares
Escribe un programa que solicite un número entero positivo y cuente cuántos dígitos pares y cuántos dígitos impares tiene. No uses arrays, strings o métodos especiales. Debes extraer cada dígito usando solo operaciones matemáticas.

22. Patrón de números triangular invertido
Crea un programa que imprima el siguiente patrón para un número n=7:
1 2 3 4 5 6 7
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
Debes usar bucles anidados y solo operaciones básicas.

23. Verificador de número Armstrong
Un número de Armstrong (o narcisista) es un número de n dígitos que es igual a la suma de sus dígitos elevados a n. Por ejemplo, 153 = 1³ + 5³ + 3³. Escribe un programa que determine si un número de tres dígitos es un número de Armstrong. Luego, extiende el programa para que funcione con números de cualquier cantidad de dígitos (hasta 6). No uses Math.pow(), solo multiplicación.

24. Conversor de segundos a días, horas, minutos y segundos
Escribe un programa que convierta una cantidad grande de segundos (ej: 100000) en días, horas, minutos y segundos. Debe mostrar el resultado en el formato: "X días, Y horas, Z minutos, W segundos". Asegúrate de que no se usen valores negativos y que las horas no excedan 24, los minutos 60, etc.

25. Generador de secuencia de Fibonacci hasta límite
La secuencia de Fibonacci empieza con 0 y 1. Cada número siguiente es la suma de los dos anteriores. Escribe un programa que genere todos los números de Fibonacci menores que 10,000 y que además cuente cuántos de ellos son pares y cuántos son impares. No uses arrays para almacenar la secuencia completa.
