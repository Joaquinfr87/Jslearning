## **Ejercicios Avanzados de Higher-Order Functions en JS**

### **1. Validación de datos complejos**

Dado un array de objetos `{nombre, edad, email}`, crea una función que devuelva solo los objetos válidos según estas reglas:

* `edad` >= 18
* `email` contiene `@`
* `nombre` tiene al menos 3 caracteres
  Usa `filter` y `every`/`some`.

---

### **2. Agrupamiento por propiedad**

Dado un array de objetos `{producto, categoria, precio}`, devuelve un objeto donde las claves sean las categorías y los valores arrays con los productos de esa categoría.

* Objetivo: usar `reduce` para agrupar dinámicamente.

---

### **3. Composición de funciones dinámicas**

Crea una función `compose` que reciba N funciones y devuelva una función que aplique todas en orden.

* Luego úsala para combinar varias transformaciones a un array de números.

---

### **4. Contador avanzado con reduce**

Dado un array de strings, cuenta la frecuencia de cada letra (ignorando mayúsculas/minúsculas y espacios).

* Objetivo: `reduce` y manejo de objetos dinámicos.

---

### **5. Transformación condicional**

Dado un array de números, transforma:

* Los pares → al cuadrado
* Los impares → al cubo
  Todo en un solo `map`.

---

### **6. Pipeline de funciones**

Crea una función `pipeline(arr, [fn1, fn2, fn3])` que aplique cada función en el array secuencialmente, pasando el resultado de una a la siguiente.

* Objetivo: practicar composición funcional estilo `map`/`reduce`.

---

### **7. Flatten y filtrado**

Dado un array de arrays de objetos `{id, valor}`, aplana el array y filtra solo los objetos con `valor > 10`.

* Combinar `reduce` con `filter`.

---

### **8. Currying avanzado**

Crea una función `operacion(a)(b)(c)` que permita:

* `operacion(2)(3)(4)` → `(2 + 3) * 4`
* Objetivo: manipulación de funciones que retornan funciones.

---

### **9. Ordenamiento complejo con sort y HOF**

Dado un array de objetos `{nombre, puntaje, fecha}`, ordénalo:

1. Primero por puntaje descendente
2. Luego por fecha ascendente si hay empate

* Objetivo: combinar `sort` con funciones de comparación complejas.

---

### **10. Extracción de propiedades dinámicas**

Crea una función `pluck(arr, key)` que devuelva un array con los valores de la propiedad `key` de todos los objetos.

* Ejemplo: `pluck([{a:1},{a:2}], 'a')` → `[1,2]`
* Ideal para practicar `map` con objetos dinámicos.

---

### **11. Filtrado avanzado con varias condiciones**

Dado un array de objetos `{nombre, edad, ciudad}`, filtra todos los que:

* Edad > 18
* Ciudad empieza con "S"
* Nombre contiene "a"
* Todo en un solo `filter`.

---

### **12. Promedio y estadísticas**

Dado un array de objetos `{nombre, puntaje}`, calcula:

* Promedio de puntaje
* Mayor puntaje
* Menor puntaje
  Todo usando `reduce`.

---

### **13. Transformación jerárquica**

Dado un array de objetos `{categoria, subcategoria, valor}`, crea un objeto jerárquico:

```js
{
  categoria1: { subcategoria1: [valores], subcategoria2: [valores] },
  categoria2: { ... }
}
```

* Objetivo: `reduce` para estructuras anidadas.

---

### **14. Aplicación condicional de funciones**

Crea una función `applyIf(arr, fn, conditionFn)` que aplique `fn` solo a los elementos que cumplen `conditionFn`.

* Ejemplo: `applyIf([1,2,3,4], x=>x*2, x=>x%2===0)` → `[1,4,3,8]`

---

### **15. Analizador de texto**

Dado un string, crea un objeto con:

* Palabra más larga
* Palabra más corta
* Número de palabras únicas
* Cantidad de letras por palabra
* Todo usando combinaciones de `split`, `map`, `reduce`, `filter`.
