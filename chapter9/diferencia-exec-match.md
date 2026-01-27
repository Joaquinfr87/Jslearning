## 1. **`match()`**

* **Pertenece a:** `String`
* **Uso:** `cadena.match(regex)`
* **Devuelve:**

  * Si el regex **NO tiene `g`** → un array con **primera coincidencia + grupos**, más `index` y `input`.
  * Si el regex **tiene `g`** → un array con **todas las coincidencias**, sin grupos ni metadatos.
  * Si no hay coincidencia → `null`

**Ejemplo:**

```js
const texto = "Hola 123 mundo 456";

// Sin 'g'
console.log(texto.match(/\d+/));
// ["123", index: 5, input: "Hola 123 mundo 456"]

// Con 'g'
console.log(texto.match(/\d+/g));
// ["123", "456"]
```

---

## 2. **`exec()`**

* **Pertenece a:** `RegExp`
* **Uso:** `regex.exec(cadena)`
* **Devuelve:**

  * Un array con **primera coincidencia + grupos**, más `index` y `input`.
  * Si no hay coincidencia → `null`
* **Especial:** si el regex tiene `g`, se puede **llamar repetidamente** para iterar todas las coincidencias porque mantiene el estado interno (`lastIndex`).

**Ejemplo:**

```js
const regex = /\d+/g;
const texto = "Hola 123 mundo 456";

let match;
while ((match = regex.exec(texto)) !== null) {
  console.log(match);
}
```

**Salida:**

```js
["123", index: 5, input: "Hola 123 mundo 456"]
["456", index: 15, input: "Hola 123 mundo 456"]
```

---

## 3. **Comparación clave**

| Característica                           | `match()`               | `exec()`               |
| ---------------------------------------- | ----------------------- | ---------------------- |
| Pertenece a                              | `String`                | `RegExp`               |
| Devuelve todas coincidencias fácilmente  | Con flag `g` → sí       | Necesita loop con `g`  |
| Devuelve info detallada (grupos, índice) | Solo si no hay `g`      | Siempre                |
| Iteración con `g`                        | No soporta directamente | Sí, usando `lastIndex` |

---

En resumen:

* **`match()`** es más simple, se usa desde la **cadena**, útil para extraer coincidencias directamente.
* **`exec()`** es más **flexible y detallado**, se usa desde el **regex**, ideal para **iterar coincidencias con grupos**.
