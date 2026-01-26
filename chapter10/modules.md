# Guía de Diseño y Estructura de Módulos

**Referencia:** *Eloquent JavaScript, Capítulo 10* **Objetivo:** Establecer principios para crear código mantenible, reutilizable y fácil de entender mediante la modularización.

---

## 1. Introducción: ¿Por qué modularizar?

La estructuración de programas es un arte sutil. A medida que una aplicación crece, tiende a convertirse en una "gran bola de barro" (código enredado y difícil de mantener).

El diseño de módulos busca:

* **Separación de responsabilidades:** Cada pieza tiene un rol definido.
* **Aislamiento:** Prevenir conflictos de nombres (Scope Global).
* **Reutilización:** Poder usar la misma pieza en diferentes contextos.

> **Nota:** El diseño es subjetivo. No asumas que el "desorden doloroso" es inevitable. Siempre se puede refactorizar para mejorar la estructura.

---

## 2. Principios de Diseño de Interfaces

Una de las partes más críticas de un módulo es su **interfaz** (las funciones y variables que exporta al mundo exterior).

### 2.1. Predictibilidad y Convenciones

Si tu módulo realiza una tarea común, imita las convenciones existentes. Esto reduce la curva de aprendizaje.

**Ejemplo: El patrón `JSON**`
Si estás creando un módulo para analizar (parsear) datos, sigue el estándar de `JSON` (`parse` para leer, `stringify` para escribir).

* **Recomendado:**
```javascript
import { parse, stringify } from "./ini-parser.js";
const config = parse("x=10\ny=20");

```


* **A evitar:** Nombres arbitrarios como `convertirArchivoIniAObjeto()` o `leerConfig()`.

### 2.2. Simplicidad

La interfaz debe ser pequeña. Si un usuario (o tú mismo en 3 meses) necesita leer todo el código fuente para entender cómo usar el módulo, la interfaz ha fallado.

---

## 3. Componibilidad y Funciones Puras

Un buen módulo debe ser fácil de combinar (**componer**) con otros módulos.

### 3.1. Evitar Efectos Secundarios (IO)

Un error común es mezclar la **lógica de negocio** (parsear datos) con **efectos secundarios** (leer del disco duro).

**Anti-patrón (Baja Componibilidad):**
Un módulo que insiste en leer el archivo directamente limita su uso. No se puede usar en el navegador (donde no hay `fs`) ni con datos que vienen de una API.

```javascript
// ❌ Malo: Acoplado al sistema de archivos
export function parseINI(filePath) {
  const content = fs.readFileSync(filePath, 'utf8'); // Side effect
  return parse(content);
}

```

**Patrón Recomendado (Alta Componibilidad):**
El módulo solo transforma datos. Deja que otro módulo se encargue de obtener esos datos.

```javascript
// ✅ Bueno: Función pura
export function parseINI(stringContent) {
  // Solo lógica de transformación
  let result = {};
  // ... parsing ...
  return result;
}

// Uso flexible:
const dataFromFile = parseINI(fs.readFileSync('config.ini')); // Node
const dataFromWeb = parseINI(await fetch('config.ini'));      // Navegador

```

### 3.2. Funciones vs. Objetos con Estado

Evita obligar al usuario a gestionar el estado de un objeto si una función simple basta. El estilo orientado a objetos a menudo introduce "ceremonia" innecesaria.

| Enfoque | Código de Ejemplo | Veredicto |
| --- | --- | --- |
| **Con Estado (OO)** | `const p = new Parser(); p.load(data); const result = p.get();` | ❌ Complejo, difícil de testear. |
| **Funcional** | `const result = parse(data);` | ✅ Simple, directo, fácil de componer. |

---

## 4. Gestión de Estructuras de Datos y Dependencias

Al integrar paquetes de terceros (NPM), a menudo encontraremos discrepancias en las estructuras de datos esperadas.

### 4.1. Estructuras Estándar

Siempre que sea posible, usa estructuras nativas de JavaScript (`Array`, `Map`, `Object`). Esto facilita la interoperabilidad.

### 4.2. El Patrón "Adaptador" (Adapter)

Si una librería externa requiere un formato de datos diferente al nuestro, debemos crear un adaptador en lugar de reescribir todo nuestro modelo de datos.

**Caso de Estudio: Grafos y `dijkstrajs**`

* **Nuestro Modelo (Arrays):** Grafo simple donde las conexiones no tienen peso.
```javascript
const roadGraph = {
  "Post Office": ["Alice's House", "Cabin"],
  "Cabin": ["Post Office"]
};

```


* **Modelo de Librería (Objetos con Peso):** El paquete `dijkstrajs` requiere pesos numéricos.
```javascript
// Lo que la librería espera
// { "NodeA": { "NodeB": 1 } }

```


* **Solución (Código Adaptador):**
En lugar de no usar la librería, transformamos nuestros datos al vuelo.
```javascript
const { find_path } = require("dijkstrajs");

// Función adaptadora para compatibilidad
function buildGraphForLib(simpleGraph) {
  let libGraph = {};
  for (let node of Object.keys(simpleGraph)) {
    let edges = libGraph[node] = {};
    for (let dest of simpleGraph[node]) {
      // Asignamos peso 1 por defecto a cada conexión
      edges[dest] = 1;
    }
  }
  return libGraph;
}

// Ejecución
const graphForLib = buildGraphForLib(roadGraph);
const route = find_path(graphForLib, "Post Office", "Cabin");

```



---

## 5. Implementación Técnica (ES Modules vs CommonJS)

Aunque el diseño es agnóstico, la implementación depende del entorno.

### 5.1. ES Modules (Estándar Actual)

Preferido para todo desarrollo nuevo (Navegador y Node.js moderno).

* **Sintaxis:** `import` / `export`.
* **Comportamiento:** Resolución estática (antes de ejecutar).
* **Scope:** Cada módulo es un archivo aislado.

### 5.2. CommonJS (Legacy)

Común en herramientas de build antiguas y servidores Node.js heredados.

* **Sintaxis:** `require()` / `module.exports`.
* **Comportamiento:** Resolución dinámica (en tiempo de ejecución).
* **Mecanismo:** Envuelve el código en una función contenedora (`wrapper`) para simular aislamiento.

---

## 6. Resumen de Mejores Prácticas

1. **Refactoriza tarde:** No te obsesiones con la estructura al principio del desarrollo. Organiza cuando el código se sienta estable.
2. **Interfaz Mínima:** Exporta solo lo necesario. Mantén privadas las funciones auxiliares.
3. **Sin Estado:** Prefiere funciones puras que reciben argumentos y retornan valores.
4. **No reinventes la rueda:** Usa NPM, pero sé consciente de escribir adaptadores para tus estructuras de datos.
5. **Nombres Claros:** Usa nombres predecibles (`parse`, `create`, `format`) en lugar de creativos.
