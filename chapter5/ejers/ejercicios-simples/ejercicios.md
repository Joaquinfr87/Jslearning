## **Ejercicios de HOF en JavaScript**

### **1. Transformación básica con `map`**

* Dado un array de números, usa `map` para crear un nuevo array con el cuadrado de cada número.
* Objetivo: entender cómo `map` transforma arrays.

### **2. Filtrado simple con `filter`**

* Dado un array de números, filtra solo los números pares.
* Objetivo: practicar condiciones dentro de `filter`.

### **3. Suma de elementos con `reduce`**

* Dado un array de números, usa `reduce` para calcular la suma total.
* Objetivo: acumular valores usando HOF.

### **4. Contar elementos**

* Dado un array de palabras, cuenta cuántas tienen más de 5 letras usando `reduce`.
* Objetivo: usar `reduce` para contar elementos según condición.

### **5. Aplicar efectos con `forEach`**

* Dado un array de strings, imprime cada string en mayúsculas usando `forEach`.
* Objetivo: diferenciar entre efectos secundarios (`forEach`) y transformación (`map`).

### **6. Filtrado avanzado con objetos**

* Dado un array de objetos `{nombre, edad}`, filtra solo los mayores de 18 años.
* Objetivo: aplicar HOF a arrays de objetos.

### **7. Transformación de objetos**

* Dado un array de objetos `{nombre, edad}`, crea un array de strings `"Nombre: edad"` usando `map`.
* Objetivo: manipular objetos dentro de `map`.

### **8. Funciones que retornan funciones (closure)**

* Crea una función `multiplicador(n)` que devuelve otra función que multiplica su argumento por `n`.
* Objetivo: entender closures y funciones que retornan funciones.

### **9. Currying**

* Implementa una función `suma(a)(b)` que devuelva la suma de `a + b`.
* Objetivo: practicar currying básico.

### **10. Composición de funciones**

* Crea dos funciones: `duplicar` y `sumarCinco`. Luego, aplica ambas a cada elemento de un array usando `map`.
* Objetivo: entender composición de funciones con HOF.

### **11. Filtrado y transformación combinados**

* Dado un array de números, filtra los mayores a 10 y luego conviértelos en strings con prefijo `"Valor: "`.
* Objetivo: combinar `filter` y `map`.

### **12. Contador de elementos por categoría**

* Dado un array de objetos `{tipo: 'fruta', nombre: 'manzana'}`, usa `reduce` para contar cuántos hay de cada tipo.
* Objetivo: usar `reduce` para agrupar y contar.

### **13. Flattening con `reduce`**

* Dado un array de arrays `[[1,2], [3,4], [5]]`, aplana todos los elementos en un solo array.
* Objetivo: práctica avanzada de `reduce` y manipulación de arrays.

### **14. Funciones de orden superior en objetos**

* Dado un objeto `{a: 1, b: 2, c: 3}`, crea un array de sus claves cuyos valores sean mayores a 1.
* Objetivo: combinar `Object.keys` o `Object.entries` con HOF.

### **15. Ejercicio avanzado completo**

* Dado un array de objetos `{nombre, edad, ciudad}`, filtra los mayores de 18, transforma los nombres a mayúsculas y calcula la edad promedio.
* Objetivo: integrar `filter`, `map` y `reduce` en un problema real.

