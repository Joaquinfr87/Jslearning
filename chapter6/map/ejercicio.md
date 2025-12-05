# ⭐ **EJERCICIO 1 (recomendado): Sistema de comandos dinámicos con funciones como claves y valores**

### Objetivo

Crear un sistema donde:

* Cada **comando** es una **función clave** en un `Map`.
* Cada comando tiene asociada una **función manejadora** (valor).
* Se pueda ejecutar un comando pasando directamente la función original.
* Se puedan añadir y eliminar comandos dinámicamente.
* Y el sistema debe rechazar funciones que no estén registradas.

**Esto NO es posible con un objeto, porque las claves serían convertidas a strings.**

---

## 🧠 Reglas del ejercicio

1. Crea un `Map` llamado `comandos`.
2. Cada **clave** será una función, ejemplo:

```js
function crear() {}
function editar() {}
function borrar() {}
```

3. El **valor** será lo que el comando hace, por ejemplo:

```js
() => console.log("Ejecutando CREAR");
```

4. Crea una función `registrarComando(fnClave, fnHandler)` que:

   * Agregue la clave y el handler al Map.
   * Evite duplicados.
   * Devuelva el tamaño actual del Map.
5. Crea una función `ejecutarComando(fnClave, ...args)` que:
   * Verifique si la función existe como clave.
   * Si existe, ejecuta el handler pasando los argumentos.
   * Si no existe, lanza un error claro.

6. Permite eliminar comandos con `eliminarComando(fnClave)`.

7. Permite listar los comandos registrados en orden.

8. Implementa un comando dinámico donde el usuario puede agregar nuevos comportamientos en tiempo real.

---

## 🧩 Resultado esperado (flujo)

```js
registrarComando("crear", () => console.log("Creado"));
registrarComando("editar", (id) => console.log("Editando", id));
registrarComando("borrar", (id) => console.log("Borrando", id));

ejecutarComando(crear);              // "Creado"
ejecutarComando(editar, 15);         // "Editando 15"
ejecutarComando(borrar, 99);         // "Borrando 99"

eliminarComando(crear);

ejecutarComando(crear);   // ERROR -> "Comando no encontrado"
```


# ⭐ EJERCICIO 2 (avanzado): Crea tu propia clase `MiniMap`

Vas a construir un Map básico usando solo **arreglos**.

No puedes usar:

* `Map`
* `Object`

Solo arrays.

---

## Requisitos

Crea una clase:

```js
class MiniMap {
  constructor() {}
  set(key, value) {}
  get(key) {}
  has(key) {}
  delete(key) {}
  size() {}
  keys() {}
  values() {}
}
```

### La lógica:

* Debes guardar pares `[key, value]`.
* Debes comparar claves usando `===` como Map.
* Debes mantener el orden de inserción.
* Debes permitir claves de cualquier tipo (incluyendo objetos y funciones).
* Debes implementar `size` como una propiedad computada.

### Resultado esperado:

```js
const mm = new MiniMap();

const obj = { a: 1 };
const f = function() {};

mm.set("x", 10);
mm.set(obj, "Objeto");
mm.set(f, "Función");

console.log(mm.get("x"));    // 10
console.log(mm.get(obj));    // "Objeto"
console.log(mm.get(f));      // "Función"

console.log(mm.size());      // 3
console.log(mm.keys());      // ["x", obj, f]
console.log(mm.values());    // [10, "Objeto", "Función"]

mm.delete(obj);

console.log(mm.has(obj));    // false
```

---
