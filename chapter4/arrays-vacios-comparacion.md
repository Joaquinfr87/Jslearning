
### 1️⃣ `[] == null`

```js
[] == null  // false
```

* `null` solo es igual a `null` o `undefined` con `==`.
* Un array vacío `[]` **no es null** ni undefined.
* **Resultado:** ❌ false

---

### 2️⃣ `[] == undefined`

```js
[] == undefined  // false
```

* Igual que antes: `[]` no es undefined.
* **Resultado:** ❌ false

---

### 3️⃣ `[] == []`

```js
[] == []  // false
```

* Cada array es un **objeto distinto** en memoria.
* Incluso si ambos están vacíos, no son el mismo objeto.
* **Resultado:** ❌ false

---

### 4️⃣ `[].length == 0`

```js
[].length == 0  // true
```

* `.length` cuenta los elementos del array.
* Si no tiene elementos, `.length === 0`.
* **Resultado:** ✅ true
* Esta es la **forma correcta y confiable** de detectar un array vacío.

---

### 🔑 Conclusión

Si quieres saber si un array está vacío, **siempre usa**:

```js
if (array.length === 0) { ... }
```

Todo lo demás (`== null`, `== undefined`, `== []`) **no funciona como esperas**.
