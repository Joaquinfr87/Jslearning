## ✅ ¿Qué es `Set`?

* Un `Set` es una colección de **valores únicos**. Es decir: en un mismo `Set` no puede repetirse un mismo valor. ([MDN Web Docs][1])
* Pueden ser valores de cualquier tipo: primitivos (números, strings, etc.) u objetos. ([MDN Web Docs][2])
* Al iterar un `Set`, los valores salen en el **orden en que fueron insertados**. ([MDN Web Docs][1])

Esto lo vuelve útil cuando necesitas mantener una colección sin duplicados, y no te importa el “índice” o “posición”, sino solo la pertenencia de valores.

---

## 🔧 Propiedades y métodos de `Set
Aquí una lista de lo que puedes usar con `Set` + ejemplos simples.

| Propiedad / Método                    | Qué hace / para qué sirve                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Constructor** `new Set([iterable])` | Crea un nuevo `Set`. Si pasas un iterable (array, string, etc.), agrega sus valores al Set. ([devdoc.net][3])                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **`size`**                            | Propiedad que dice cuántos valores hay en el Set. ([MDN Web Docs][2])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **`add(value)`**                      | Agrega `value` al Set — solo si no está ya presente. Devuelve el mismo Set (permite encadenar). ([MDN Web Docs][2])                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **`has(value)`**                      | Devuelve `true` o `false` si el valor está en el Set. ([MDN Web Docs][2])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **`delete(value)`**                   | Elimina `value` del Set si existe; devuelve `true` si borró algo, `false` si no. ([MDN Web Docs][2])                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **`clear()`**                         | Vacía el Set — elimina todos los valores. ([MDN Web Docs][2])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Iteradores / recorridos**           | Puedes recorrer los valores de varias formas:  ([MDN Web Docs][2])  <br> • `values()` — devuelve un iterador con los valores. ([MDN Web Docs][4])  <br> • `keys()` — alias de `values()` (porque en Set no hay clave/valor separados). ([MDN Web Docs][2])  <br> • `entries()` — devuelve iterador de tuplas `[value, value]`, idéntico valor en clave y valor. Útil para compatibilidad de API. ([MDN Web Docs][5])  <br> • `for...of mySet` — también funciona directamente. ([MDN Web Docs][2])  <br> • `forEach(callback)` — aplica callback a cada valor. ([MDN Web Docs][2]) |
| **Igualdad / unicidad**               | La comparación de valores usa algoritmo `SameValueZero`: considera `NaN` igual a `NaN`, y trata `0` y `-0` como el mismo. Esto permite que `NaN`, `undefined`, etc. estén en un Set. ([MDN Web Docs][1])                                                                                                                                                                                                                                                                                                                                                                           |

---

## 🧪 Ejemplos de uso de `Set`

```js
// Crear un Set
const s = new Set();

// Añadir valores
s.add(1);
s.add(5);
s.add("Hola");
s.add({x: 10});

// Intentar añadir duplicado — no hará nada
s.add(5);

// Verificar existencia
console.log(s.has(5));      // true
console.log(s.has("Adiós"));// false

// Tamaño
console.log(s.size);        // 4 (1,5,"Hola", objeto)

// Recorrer
for (const v of s) {
  console.log(v);
}

// Eliminar un valor
s.delete(5);
console.log(s.has(5));      // false

// Vaciar
s.clear();
console.log(s.size);        // 0
```

**Uso común**: eliminar duplicados de un array

```js
const arr = [1,2,3,2,4,1,5];
const sinDuplicados = [...new Set(arr)];
console.log(sinDuplicados); // e.g. [1,2,3,4,5]
```

---

## ⚠️ Qué distingue a `Set` de un array u objeto

* A diferencia de un **Array**, un `Set` no permite duplicados automáticamente.
* A diferencia de un **Objeto**, un `Set` no tiene pares clave–valor: solo valores “sueltos”. No hay clave separada.
* Los valores pueden ser de cualquier tipo, incluida referencia a objetos — y la comparación respeta referencia para objetos. ([MDN Web Docs][1])

---

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set?utm_source=chatgpt.com "Set - JavaScript | MDN"
[2]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set?utm_source=chatgpt.com "Set - JavaScript | MDN"
[3]: https://www.devdoc.net/web/developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Set.html?utm_source=chatgpt.com "Set - JavaScript | MDN"
[4]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/values?utm_source=chatgpt.com "Set.prototype.values() - JavaScript | MDN"
[5]: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/entries?utm_source=chatgpt.com "Set.prototype.entries() - JavaScript | MDN"
