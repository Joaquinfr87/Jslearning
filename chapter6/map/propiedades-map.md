## **Propiedades**

### **1. `size`**

Cantidad de pares clave–valor.

```js
const m = new Map([[1, "A"], [2, "B"]]);
console.log(m.size); // 2
```

---

## **Métodos principales**

### **2. `set(key, value)`**

Agrega o actualiza un valor.

```js
const m = new Map();
m.set("x", 10);
```

### **3. `get(key)`**

Obtiene un valor.

```js
m.get("x"); // 10
```

### **4. `has(key)`**

Comprueba si existe una clave.

```js
m.has("x"); // true
```

### **5. `delete(key)`**

Elimina una clave.

```js
m.delete("x"); // true
```

### **6. `clear()`**

Vacía el map.

```js
m.clear();
```

---

## **Métodos de iteración**

### **7. `keys()`**

Devuelve un iterador de claves.

```js
const m = new Map([[1,"A"],[2,"B"]]);
for (const k of m.keys()) console.log(k);
```

### **8. `values()`**

Devuelve un iterador de valores.

```js
for (const v of m.values()) console.log(v);
```

### **9. `entries()`** *(por defecto)*

Iterador de `[clave, valor]`.

```js
for (const e of m.entries()) console.log(e);
```

### **10. `forEach((value, key, map) => {})`**

Itera en orden de inserción.

```js
m.forEach((v, k) => console.log(k, v));
```

---

## **Comportamientos especiales**

### **11. Comparación de claves (SameValueZero)**

`Map` trata `NaN` como igual a `NaN`.

```js
const m = new Map();
m.set(NaN, "num");
console.log(m.get(NaN)); // "num"
```

---
