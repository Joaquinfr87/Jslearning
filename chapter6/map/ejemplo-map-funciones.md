# ✅ 1. Usar **funciones como claves** en un Map

```js
function saludar() {
  console.log("Hola!");
}

const map = new Map();

// usar una función como clave
map.set(saludar, "Soy una función clave");

// obtener el valor usando la función
console.log(map.get(saludar)); 
```

✔ Con un objeto esto NO se puede hacer.
✔ En un Map, la clave sigue siendo la función real (sin convertirse a string).

---

# ✅ 2. Usar **funciones como valores**

```js
const acciones = new Map();

// guardar funciones como valores
acciones.set("sumar", (a, b) => a + b);
acciones.set("restar", (a, b) => a - b);

// ejecutar la acción
const resultado = acciones.get("sumar")(10, 5);
console.log(resultado); // 15
```

Esto convierte al `Map` en una tabla de comandos.

---

# ✅ 3. Reemplazar un **switch-case** usando Map

### Switch tradicional (lo normal):

```js
function ejecutar(accion) {
  switch (accion) {
    case "crear":
      console.log("Creando...");
      break;
    case "editar":
      console.log("Editando...");
      break;
    case "borrar":
      console.log("Borrando...");
      break;
  }
}
```

### Con Map (más limpio y extensible):

```js
const acciones = new Map([
  ["crear", () => console.log("Creando...")],
  ["editar", () => console.log("Editando...")],
  ["borrar", () => console.log("Borrando...")],
]);

function ejecutarAccion(accion) {
  const fn = acciones.get(accion);
  if (fn) fn();
  else console.log("Acción no encontrada");
}

ejecutarAccion("editar"); // "Editando..."
```

✔ Mucho más limpio
✔ Más rápido
✔ Puedes añadir o quitar comandos dinámicamente

---

# ✅ 4. Usar funciones “clave + valor” para crear un sistema de reglas

```js
const esNumero = x => typeof x === "number";
const esTexto = x => typeof x === "string";

const procesadores = new Map();

// clave = una función que valida algo
// valor = una función que procesa algo
procesadores.set(esNumero, x => console.log("Es un número:", x));
procesadores.set(esTexto, x => console.log("Es un texto:", x));

function procesar(valor) {
  for (const [validador, procesador] of procesadores) {
    if (validador(valor)) {
      procesador(valor);
      return;
    }
  }
  console.log("Tipo no soportado");
}

procesar(50);      // "Es un número: 50"
procesar("Hola");  // "Es un texto: Hola"
```

Esto es una forma poderosa de usar Maps que **un objeto NO puede hacer**.

---

# ✅ 5. La diferencia clave demostrada con código

## Objeto → ❌ no distingue claves que sean objetos o funciones

```js
const obj = {};

const f1 = function () {};
const f2 = function () {};

obj[f1] = "uno";
obj[f2] = "dos";

console.log(obj); 
// { "[object Function]": "dos" }
// f1 y f2 se CUCHARON; sobrescribe
```

## Map → ✔ distingue cada función como clave independiente

```js
const map2 = new Map();

const f1b = function () {};
const f2b = function () {};

map2.set(f1b, "uno");
map2.set(f2b, "dos");

console.log(map2.get(f1b)); // "uno"
console.log(map2.get(f2b)); // "dos"
```

---

# ⭐ Con esto ya debes entender:

* `Map` **sí recuerda** cada función como una clave única.
* `Object` las convierte a strings → y las pierde.

