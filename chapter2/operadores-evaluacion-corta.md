## 1️⃣ OR lógico (`||`)

* Devuelve el **primer valor truthy** de izquierda a derecha.
* Evalúa todos los falsy (`0`, `""`, `NaN`, `false`, `null`, `undefined`) como “no válido”.

### Ejemplos:

```js
// Valor por defecto simple
let x;
let y = x || 10;
console.log(y); // 10

// Con falsy
x = 0;
y = x || 10;
console.log(y); // 10

x = "";
y = x || "default";
console.log(y); // "default"

// Con objetos dinámicos
let obj = {};
obj.cantidad = obj.cantidad || 1; // Inicializa en 1 si no existe
console.log(obj.cantidad); // 1

obj.cantidad = obj.cantidad || 100;
console.log(obj.cantidad); // 1 (ya existe, no se cambia)
```

---

## 2️⃣ Nullish coalescing (`??`)

* Devuelve el **primer valor que NO sea `null` ni `undefined`**.
* Ignora falsy como `0` o `""`.
* Útil para **valores por defecto seguros**.

### Ejemplos:

```js
let a;
let b = a ?? 10;
console.log(b); // 10

a = 0;
b = a ?? 10;
console.log(b); // 0 (0 NO es null/undefined)

let obj = { cantidad: 0 };
obj.cantidad = (obj.cantidad ?? 0) + 1;
console.log(obj.cantidad); // 1

let str = "";
let valor = str ?? "default";
console.log(valor); // "" (string vacío NO es null/undefined)
```

---

## 3️⃣ AND lógico (`&&`)

* Devuelve el **primer falsy** o el **último valor truthy**.
* Evalúa de izquierda a derecha.
* Útil para **ejecutar o retornar algo solo si existe**.

### Ejemplos:

```js
let obj = { nombre: "Luis" };
obj.nombre && console.log("Nombre existe:", obj.nombre); // "Nombre existe: Luis"

let x = 0;
let y = x && 10;
console.log(y); // 0

let z = 5;
let resultado = z > 0 && "positivo";
console.log(resultado); // "positivo"

let arr = [];
arr.length && console.log("Hay elementos"); // No imprime nada
```

---

## 4️⃣ Ternario (`? :`)

* Evalúa una **condición** y devuelve uno de **dos valores**.
* Sintaxis: `condición ? valorSiTrue : valorSiFalse`

### Ejemplos:

```js
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // "Mayor de edad"

let numero = -5;
let signo = numero >= 0 ? "positivo" : "negativo";
console.log(signo); // "negativo"

// Con objetos dinámicos
let obj = {};
obj.cantidad = obj.cantidad ? obj.cantidad + 1 : 1;
console.log(obj.cantidad); // 1

obj.cantidad = obj.cantidad ? obj.cantidad + 1 : 1;
console.log(obj.cantidad); // 2
```

---

## 5️⃣ Combinaciones comunes

### Inicializar propiedad dinámica y sumar

```js
let obj = {};
obj.cantidad = (obj.cantidad ?? 0) + 1; // nullish safe
obj.cantidad = obj.cantidad ? obj.cantidad + 1 : 1; // ternario
obj.cantidad = (obj.cantidad || 0) + 1; // solo si nunca será 0
console.log(obj.cantidad); // 3
```

### Ejecutar acción solo si existe

```js
obj.cantidad && console.log("Cantidad existe:", obj.cantidad);
obj.noExiste && console.log("No se imprime porque no existe");
```

### Uso con arrays

```js
let arr = [1, 2, 3];
arr.length && console.log("Array tiene elementos"); // Array tiene elementos

let vacio = [];
vacio.length && console.log("No se imprime porque length es 0");
```

### Valor por defecto con función

```js
function saludar(nombre) {
  let n = nombre ?? "Invitado";
  console.log("Hola " + n);
}

saludar("Luis"); // Hola Luis
saludar();       // Hola Invitado
```

---

