## 1. **`map()`**

### Descripción:

`map()` es una función de orden superior que **transforma cada elemento de un array aplicando una función** y devuelve un nuevo array del mismo tamaño. **No modifica el array original**.

### Sintaxis:

```js
arr.map(callback(currentValue, index, array), thisArg)
```

**Parámetros:**

1. `callback` (obligatorio): función que se ejecuta en cada elemento.

   * `currentValue` → el valor del elemento actual.
   * `index` → el índice del elemento actual.
   * `array` → el array original.
2. `thisArg` (opcional): valor a usar como `this` dentro del callback.

### Ejemplo avanzado:

```js
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

const greetings = users.map((user, idx) => {
  console.log(`Procesando usuario ${idx}: ${user.name}`);
  return `Hola ${user.name}, tienes ${user.age} años`;
});

console.log(greetings);
// ["Hola Alice, tienes 25 años", "Hola Bob, tienes 30 años"]
```

**Patrón común:** transformación de datos, como extraer un campo de cada objeto o generar un nuevo array de valores derivados.

---

## 2. **`filter()`**

### Descripción:

`filter()` **selecciona elementos de un array** que cumplen una condición y devuelve un **nuevo array**. No modifica el array original.

### Sintaxis:

```js
arr.filter(callback(element, index, array), thisArg)
```

**Parámetros:**

* `callback` → función que debe retornar `true` o `false`.
* `element` → elemento actual del array.
* `index` → índice actual.
* `array` → array original.
* `thisArg` → opcional, valor de `this` en el callback.

### Ejemplo avanzado:

```js
const products = [
  { name: 'Camisa', price: 30 },
  { name: 'Pantalón', price: 50 },
  { name: 'Calcetines', price: 10 }
];

const expensive = products.filter((product, idx, arr) => {
  console.log(`Verificando producto ${idx}: ${product.name}`);
  return product.price > 20;
});

console.log(expensive);
// [{ name: 'Camisa', price: 30 }, { name: 'Pantalón', price: 50 }]
```

**Patrón común:** filtrar datos según condiciones dinámicas.

---

## 3. **`reduce()`**

### Descripción:

`reduce()` **combina todos los elementos de un array en un solo valor** usando un acumulador. Es muy flexible: se puede usar para sumas, productos, concatenaciones o incluso construir objetos.

### Sintaxis:

```js
arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
```

**Parámetros:**

* `callback` → función ejecutada para cada elemento.

  * `accumulator` → valor acumulado que se va actualizando.
  * `currentValue` → elemento actual del array.
  * `index` → índice actual.
  * `array` → array original.
* `initialValue` → valor inicial del acumulador. Obligatorio para evitar errores en arrays vacíos.

### Ejemplo avanzado:

```js
const orders = [
  { id: 1, total: 100 },
  { id: 2, total: 200 },
  { id: 3, total: 150 }
];

const total = orders.reduce((acc, order) => acc + order.total, 0);
console.log(total); // 450
```

**Patrón común:** sumar, multiplicar, agrupar datos, transformar arrays en objetos o mapas.

---

## 4. **`reduceRight()`**

### Descripción:

Similar a `reduce()`, pero **procesa el array de derecha a izquierda**. Esto es útil cuando el orden importa, como en concatenaciones o análisis de pilas.

### Sintaxis:

```js
arr.reduceRight(callback(accumulator, currentValue, index, array), initialValue)
```

### Ejemplo avanzado:

```js
const letters = ['a', 'b', 'c'];
const reversed = letters.reduceRight((acc, letter) => acc + letter, '');
console.log(reversed); // 'cba'
```

---

## 5. **`forEach()`**

### Descripción:

`forEach()` ejecuta un callback para cada elemento del array **sin retornar nada**. Es útil para efectos secundarios: logs, modificaciones externas, etc.

### Sintaxis:

```js
arr.forEach(callback(element, index, array), thisArg)
```

### Ejemplo avanzado:

```js
const nums = [1, 2, 3];
nums.forEach((num, idx, arr) => {
  arr[idx] = num * 2; // modificando array original
});
console.log(nums); // [2, 4, 6]
```

**Patrón común:** iteración con efectos secundarios.

---

## 6. **`some()`**

### Descripción:

`some()` devuelve `true` si **al menos un elemento cumple la condición**. Se detiene en el primer `true`.

### Sintaxis:

```js
arr.some(callback(element, index, array), thisArg)
```

### Ejemplo avanzado:

```js
const nums = [1, 2, 3, 4];
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true
```

---

## 7. **`every()`**

### Descripción:

`every()` devuelve `true` si **todos los elementos cumplen la condición**. Se detiene en el primer `false`.

### Sintaxis:

```js
arr.every(callback(element, index, array), thisArg)
```

### Ejemplo avanzado:

```js
const nums = [2, 4, 6];
const allEven = nums.every(n => n % 2 === 0);
console.log(allEven); // true
```

---

## 8. **`find()`**

### Descripción:

`find()` devuelve el **primer elemento que cumple la condición** o `undefined` si no hay ninguno.

### Sintaxis:

```js
arr.find(callback(element, index, array), thisArg)
```

### Ejemplo avanzado:

```js
const users = [{name:'A',age:20},{name:'B',age:30}];
const adult = users.find(u => u.age >= 21);
console.log(adult); // {name:'B', age:30}
```

---

## 9. **`findIndex()`**

### Descripción:

Devuelve el **índice del primer elemento que cumple la condición** o `-1` si no existe.

### Sintaxis:

```js
arr.findIndex(callback(element, index, array), thisArg)
```

---

## 10. **`sort()`**

### Descripción:

Ordena un array **modificando el array original**. La función de comparación determina el orden.

### Sintaxis:

```js
arr.sort(compareFunction)
```

**compareFunction**:

```js
(a, b) => {
  return <0  => a antes que b
  return 0  => sin cambio
  return >0 => b antes que a
}
```

### Ejemplo avanzado:

```js
const items = [{name:'C',price:30},{name:'A',price:10}];
items.sort((a,b) => a.price - b.price);
console.log(items); // [{name:'A',price:10},{name:'C',price:30}]
```

---

## 11. **`flatMap()`**

### Descripción:

Primero aplica un `map()`, luego aplana el resultado **un nivel**.

### Sintaxis:

```js
arr.flatMap(callback(element, index, array), thisArg)
```

### Ejemplo avanzado:

```js
const arr = [1,2,3];
const result = arr.flatMap(x => [x, x*2]);
console.log(result); // [1,2,2,4,3,6]
```

---

## 12. **Funciones que retornan funciones**

### Descripción:

Permite crear **funciones parametrizables**, muy usado en programación funcional.

### Ejemplo avanzado:

```js
const multiply = x => y => x * y;
const triple = multiply(3);
console.log(triple(5)); // 15
```

---

Si quieres, puedo hacer **una tabla gigante con 20–25 funciones de orden superior**, incluyendo **arrays, objetos, funciones, promesas, callbacks y async**, con **explicación profunda, parámetros, retornos y ejemplos completos**. Esto sería como un **manual completo de alto orden en JS**.

¿Quieres que haga eso?


