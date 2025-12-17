### Diferencia entre errores **antes de la ejecución** y errores **en tiempo de ejecución** en JavaScript

---

## 1. Errores **antes de la ejecución** (errores de parseo / sintaxis)

### Definición

Son errores que el **motor de JavaScript detecta antes de ejecutar una sola línea de código**.
Ocurren durante la fase de **análisis léxico y sintáctico** (*parsing*).

Si existe uno de estos errores:

* El archivo **no se ejecuta**
* `try...catch` **no funciona**
* El programa se detiene inmediatamente

---

### Ejemplos comunes

```js
let x = ;
```

```js
if (true {
  console.log("Hola");
}
```

```js
function () {
  console.log("Error");
}
```

---

### Características clave

* Tipo de error: `SyntaxError`
* Detectado por el **parser**
* Impide que el código llegue a ejecutarse
* No puede ser atrapado con `try...catch`
* Es un error estructural del lenguaje

---

### Analogía

Es como **entregar un documento con palabras mal escritas al sistema**:
el sistema **rechaza el archivo completo** antes de leer su contenido.

---

## 2. Errores **en tiempo de ejecución** (runtime errors)

### Definición

Son errores que ocurren **mientras el programa ya está corriendo**, cuando el motor intenta ejecutar una instrucción válida que falla por el contexto.

El código **sí fue correctamente parseado**.

---

### Ejemplos comunes

```js
console.log(variableInexistente);
```

`ReferenceError`

```js
let x = 5;
x.toUpperCase();
```

`TypeError`

```js
JSON.parse("{ nombre: Juan }");
```

`SyntaxError` (pero en tiempo de ejecución)

---

### Características clave

* Ocurren durante la ejecución
* Sí pueden ser atrapados con `try...catch`
* Dependen de datos, estado o flujo del programa
* El programa puede recuperarse

---

### Ejemplo con `try...catch`

```js
try {
  let datos = JSON.parse("{ nombre: Juan }");
} catch (error) {
  console.error("Error controlado:", error.message);
}
```

---

### Analogía

Es como **un error al usar una máquina**:
la máquina existe y funciona, pero se usó mal en ese momento.

---

## 3. Fases del motor de JavaScript (simplificado)

1. **Parsing**

   * Revisa sintaxis
   * Crea el AST
   * Detecta errores estructurales

2. **Compilación / Preparación**

   * Scope
   * Hoisting

3. **Ejecución**

   * Corre el código línea por línea
   * Aparecen errores de runtime

---

## 4. Comparación directa

| Aspecto              | Antes de ejecución        | Tiempo de ejecución           |
| -------------------- | ------------------------- | ----------------------------- |
| Momento              | Antes de correr el código | Mientras corre                |
| Tipo común           | `SyntaxError`             | `TypeError`, `ReferenceError` |
| `try...catch`        | ❌ No funciona             | ✅ Funciona                    |
| El programa inicia   | ❌ No                      | ✅ Sí                          |
| Dependencia de datos | ❌ No                      | ✅ Sí                          |

---

## 5. Conclusión técnica

* **Errores antes de la ejecución**:
  impiden que el código exista para el motor.
* **Errores en tiempo de ejecución**:
  ocurren porque algo falló durante la ejecución.

> `try...catch` es una herramienta de **control de ejecución**, no de validación de sintaxis.

