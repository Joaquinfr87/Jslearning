# ✅ **OBJETOS EN JAVASCRIPT: Métodos principales**

## 1️⃣ Métodos para crear y copiar objetos

### **1. Object.create(proto, [descriptors])**

Crea un nuevo objeto con un prototipo específico y opcionalmente define propiedades.

**Sintaxis:**

```js
Object.create(proto, descriptors)
```

* `proto`: El objeto que se usará como prototipo del nuevo objeto.
* `descriptors` (opcional): Definiciones de propiedades y sus configuraciones.

**Ejemplo básico:**

```js
const proto = {
  saludar() {
    console.log("Hola");
  }
};

const obj = Object.create(proto);
obj.saludar(); // "Hola"
console.log(Object.getPrototypeOf(obj) === proto); // true
```

**Ejemplo con descriptors:**

```js
const obj2 = Object.create(Object.prototype, {
  nombre: { value: "Luis", writable: true, enumerable: true },
  edad: { value: 25, writable: false, enumerable: true }
});

console.log(obj2.nombre); // "Luis"
console.log(obj2.edad);   // 25
```

**Notas importantes:**

* Permite crear objetos sin constructor.
* Muy útil para patrones de herencia o prototipos personalizados.
* `writable`, `enumerable`, `configurable` controlan el comportamiento de las propiedades.

---

### **2. Object.assign(dest, ...src)**

Copia **propiedades propias y enumerables** de uno o más objetos fuente a un objeto destino.

**Sintaxis:**

```js
Object.assign(destino, fuente1, fuente2, ...)
```

**Ejemplo:**

```js
const a = { x: 1 };
const b = { y: 2 };
const c = { z: 3 };

const resultado = Object.assign({}, a, b, c);
console.log(resultado); // { x:1, y:2, z:3 }
```

**Notas importantes:**

* Solo copia **propiedades propias y enumerables**.
* **No copia propiedades del prototipo**.
* Para clonar objetos profundos se requiere un método adicional (ej.: `structuredClone` o librerías).

---

### **3. Object.defineProperty(obj, key, descriptor)**

Define o modifica **una propiedad específica** de un objeto con un descriptor.

**Sintaxis:**

```js
Object.defineProperty(obj, propiedad, descriptor)
```

* `descriptor` puede incluir:

  * `value`: valor de la propiedad.
  * `writable`: si se puede modificar.
  * `enumerable`: si aparece en `for...in` o `Object.keys`.
  * `configurable`: si se puede borrar o cambiar descriptor.
  * `get`: función getter.
  * `set`: función setter.

**Ejemplo:**

```js
const obj = {};
Object.defineProperty(obj, "nombre", {
  value: "Luis",
  writable: false, 
  enumerable: true,
  configurable: false
});

console.log(obj.nombre); // "Luis"
obj.nombre = "Ana";      // No cambia
console.log(obj.nombre); // "Luis"
```

**Con getter y setter:**

```js
const persona = {};
Object.defineProperty(persona, "edad", {
  get() { return this._edad; },
  set(value) { this._edad = value > 0 ? value : 0; }
});

persona.edad = 25;
console.log(persona.edad); // 25
persona.edad = -5;
console.log(persona.edad); // 0
```

**Notas importantes:**

* Permite **control total** sobre el comportamiento de la propiedad.
* Recomendado para propiedades críticas o privadas (simulando encapsulación).

---

### **4. Object.defineProperties(obj, descriptors)**

Permite definir **múltiples propiedades a la vez**.

**Sintaxis:**

```js
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2,
  ...
})
```

**Ejemplo:**

```js
const persona = {};
Object.defineProperties(persona, {
  nombre: { value: "Luis", writable: true, enumerable: true },
  edad: { value: 25, writable: false, enumerable: true },
  ciudad: { value: "La Paz", writable: true, enumerable: true }
});

console.log(persona); // { nombre: "Luis", edad: 25, ciudad: "La Paz" }
```

**Notas importantes:**

* Evita llamar `Object.defineProperty` varias veces.
* Ideal para inicializar objetos con muchas propiedades y configuraciones.

---

## Métodos para trabajar con prototipos

### **1. Object.getPrototypeOf(obj)**

Devuelve el prototipo de un objeto.

**Sintaxis:**

```js
Object.getPrototypeOf(obj)
```

**Ejemplo:**

```js
const proto = { saludar: () => "Hola" };
const obj = Object.create(proto);

console.log(Object.getPrototypeOf(obj) === proto); // true
console.log(obj.saludar()); // "Hola"
```

**Notas importantes:**

* Útil para verificar la cadena de prototipos (herencia).
* Equivalente a `obj.__proto__`, pero más seguro y estándar.

---

### **2. Object.setPrototypeOf(obj, proto)**

Cambia el prototipo de un objeto existente.

**Sintaxis:**

```js
Object.setPrototypeOf(obj, nuevoProto)
```

**Ejemplo:**

```js
const proto1 = { a: 1 };
const proto2 = { b: 2 };

const obj = Object.create(proto1);
console.log(obj.a); // 1
console.log(obj.b); // undefined

Object.setPrototypeOf(obj, proto2);
console.log(obj.a); // undefined
console.log(obj.b); // 2
```

**Notas importantes:**

* Cambiar prototipos dinámicamente **puede afectar rendimiento**.
* Mejor usar `Object.create` para herencia inicial.

---

## 3️⃣ Métodos para inspeccionar propiedades

### **Object.keys(obj)**

Devuelve un array con las **propiedades propias enumerables** del objeto.

**Ejemplo:**

```js
const obj = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj)); // ["x", "y", "z"]
```

---

### **Object.values(obj)**

Devuelve un array con **los valores** de las propiedades propias enumerables.

```js
console.log(Object.values(obj)); // [1, 2, 3]
```

---

### **Object.entries(obj)**

Devuelve un array de **pares `[clave, valor]`**.

```js
console.log(Object.entries(obj)); 
// [["x", 1], ["y", 2], ["z", 3]]
```

---

### **Object.getOwnPropertyNames(obj)**

Devuelve todas las propiedades propias, **incluyendo las no enumerables**.

```js
const obj2 = {};
Object.defineProperty(obj2, "secreto", { value: 42, enumerable: false });

console.log(Object.getOwnPropertyNames(obj2)); // ["secreto"]
```

---

### **Object.getOwnPropertySymbols(obj)**

Devuelve un array con todos los **símbolos propios** del objeto.

```js
const sym = Symbol("id");
const obj3 = { [sym]: 123 };
console.log(Object.getOwnPropertySymbols(obj3)); // [Symbol(id)]
```

---

### **Object.getOwnPropertyDescriptor(obj, key)**

Devuelve la **configuración de una propiedad específica**.

```js
const desc = Object.getOwnPropertyDescriptor(obj2, "secreto");
console.log(desc);
// { value: 42, writable: false, enumerable: false, configurable: false }
```

---

### **Object.getOwnPropertyDescriptors(obj)**

Devuelve los descriptores de **todas las propiedades propias** del objeto.

```js
console.log(Object.getOwnPropertyDescriptors(obj2));
/* 
{
  secreto: { value: 42, writable: false, enumerable: false, configurable: false }
}
*/
```

**Notas importantes sobre inspección de propiedades:**

* Útil para **reflexión de objetos**.
* Diferencia clave:

  * `keys()`, `values()`, `entries()` → solo enumerables.
  * `getOwnPropertyNames()` → incluye no enumerables.
  * `getOwnPropertySymbols()` → solo símbolos.
  * `getOwnPropertyDescriptor(s)` → información detallada de propiedades.

---

## 4️⃣ Métodos para comparar objetos

### **Object.is(a, b)**

Comprueba si dos valores son **estrictamente iguales**, con algunas diferencias respecto a `===`.

**Diferencias importantes:**

* `Object.is(NaN, NaN)` → `true` (a diferencia de `NaN === NaN` que es `false`)
* `Object.is(0, -0)` → `false` (a diferencia de `0 === -0` que es `true`)

**Ejemplo:**

```js
console.log(Object.is(2, 2));    // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0));    // false
console.log(Object.is({}, {}));   // false (objetos distintos)
```

**Notas:**

* Útil para comparaciones precisas de valores primitivos.
* No reemplaza comparaciones profundas de objetos.

---

## 5️⃣ Métodos para controlar cambios en los objetos

### **Object.preventExtensions(obj)**

Impide que se agreguen **nuevas propiedades** a un objeto.

```js
const obj = { a: 1 };
Object.preventExtensions(obj);
obj.b = 2;  // Ignorado
console.log(obj); // { a: 1 }
```

---

### **Object.seal(obj)**

Bloquea **agregar o eliminar propiedades**, pero permite **modificar las existentes**.

```js
const obj2 = { x: 10 };
Object.seal(obj2);
obj2.x = 20; // Permitido
obj2.y = 30; // Ignorado
console.log(obj2); // { x: 20 }
```

---

### **Object.freeze(obj)**

Congela el objeto: no se pueden **agregar, eliminar o modificar propiedades**.

```js
const obj3 = { a: 1 };
Object.freeze(obj3);
obj3.a = 2; // Ignorado
obj3.b = 3; // Ignorado
console.log(obj3); // { a: 1 }
```

---

### Métodos de verificación

```js
console.log(Object.isExtensible(obj)); // false → no se pueden agregar propiedades
console.log(Object.isSealed(obj2));    // true  → sellado
console.log(Object.isFrozen(obj3));    // true  → congelado
```

**Notas:**

* `freeze` implica `seal` y `preventExtensions`.
* Útil para proteger objetos de modificaciones accidentales o asegurar **inmutabilidad parcial**.

---

## 6️⃣ Métodos heredados de todos los objetos (`Object.prototype`)

Todos los objetos heredan métodos desde `Object.prototype`.

### **Ejemplos prácticos:**

```js
const obj = { a: 1 };

console.log(obj.toString());              // "[object Object]"
console.log(obj.valueOf());               // { a: 1 }
console.log(obj.hasOwnProperty("a"));    // true
console.log(obj.isPrototypeOf({}));      // false
console.log(obj.propertyIsEnumerable("a"));// true
console.log(obj.toLocaleString());       // "[object Object]"
```

**Notas importantes:**

* `toString()` y `valueOf()` son útiles para conversiones implícitas.
* `hasOwnProperty()` evita confundir propiedades heredadas con propias.
* `isPrototypeOf()` permite verificar herencia.
* `propertyIsEnumerable()` indica si se puede iterar con `for...in`.

---

## 7️⃣ Métodos antiguos (no recomendados)

Estos métodos existen por compatibilidad, pero **no se recomienda usarlos**:

* `__defineGetter__`, `__defineSetter__` → definen getters y setters.
* `__lookupGetter__`, `__lookupSetter__` → buscan getters/setters heredados.

**Ejemplo:**

```js
const obj = {};
obj.__defineGetter__("x", () => 10);
console.log(obj.x); // 10
```

**Nota:**

* En lugar de estos métodos, se recomienda usar `Object.defineProperty` o `Object.defineProperties`.

---
