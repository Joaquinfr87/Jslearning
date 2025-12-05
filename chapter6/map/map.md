### ¿Qué es `Map`?

`Map` es un objeto incorporado que **almacena pares clave → valor** y **recuerda el orden de inserción**. A diferencia de un objeto normal, **las claves pueden ser de cualquier tipo** (primitivos, objetos, funciones, etc.). `Map` ofrece métodos explícitos para operar sobre los pares: añadir (`set`), leer (`get`), comprobar existencia (`has`), borrar (`delete`) y obtener la cantidad de entradas (`size`). ([MDN Web Docs][1])

### Igualdad de claves en `Map`

La comparación de claves en `Map` usa el algoritmo **SameValueZero**: `NaN` se considera igual a `NaN`, y `0` y `-0` son tratados como equivalentes. Para claves que son objetos, la igualdad se basa en **identidad de referencia** (mismo objeto en memoria), no en igualdad estructural. ([MDN Web Docs][1])

## Diferencias clave entre `Map` y `Object`

1. **Tipos de clave**

   * `Map`: acepta cualquier tipo de clave (string, number, objeto, función, etc.).
   * `Object`: las claves son siempre strings o symbols (si pasas otro tipo, se convierte a string).
     Uso: si necesitas usar objetos o funciones como claves, `Map` es la opción correcta. ([MDN Web Docs][1])

2. **Orden de las entradas**

   * `Map`: itera en **orden de inserción** (predecible).
   * `Object`: el orden de propiedades históricamente ha sido no trivial; aunque hoy hay reglas, no conviene depender del orden igual que con `Map`. ([MDN Web Docs][1])

3. **Propiedades por defecto / prototipo**

   * `Map`: no tiene claves implícitas; sólo las que tú agregas.
   * `Object`: tiene un prototipo con propiedades heredadas (posible colisión de nombres). Puedes evitarlo creando `Object.create(null)` pero no es lo más común. Esto también tiene implicaciones de **seguridad** (riesgos de prototype pollution si se usan claves provistas por usuarios sin precaución). ([MDN Web Docs][1])

4. **API y facilidad de uso**

   * `Map`: métodos explícitos (`set`, `get`, `has`, `delete`, `clear`) y propiedad `size`. Es iterable de forma nativa (puedes usar `for...of` para obtener pares [clave, valor]).
   * `Object`: operaciones se hacen mediante acceso a propiedades, `Object.keys`, `Object.entries`, `for...in`, y contar elementos requiere `Object.keys(...).length`. No es iterable por defecto con `for...of`. ([MDN Web Docs][1])

5. **Rendimiento**

   * `Map` suele dar mejor rendimiento cuando haces **muchas inserciones o borrados** dinámicos, porque fue diseñado para eso. `Object` no está optimizado para ese patrón en la misma medida. ([MDN Web Docs][1])

6. **Serialización (JSON)**

   * `Object` se serializa y deserializa de forma nativa con `JSON.stringify` / `JSON.parse`.
   * `Map` **no** tiene soporte JSON nativo; si quieres convertir un `Map` a JSON necesitas transformarlo (por ejemplo a un array de pares o a un objeto) y volver a reconstruirlo al parsear. ([MDN Web Docs][1])

7. **Confusión con propiedades de objeto en instancias de `Map`**

   * Si tratas una instancia de `Map` como si fuera un objeto y haces `map["clave"] = valor`, esto crea una **propiedad del objeto** subyacente pero **no** añade una entrada en la estructura interna del `Map`. Es un error común: siempre usa los métodos del `Map` para manipular sus entradas. ([MDN Web Docs][1])

---

## Cuándo usar cada uno (reglas prácticas)

* Usa **`Map`** si:

  * Necesitas claves que no sean strings (objetos, funciones).
  * Vas a añadir y quitar pares con frecuencia.
  * Quieres iteración en orden de inserción y una API explícita (`size`, `for...of` sobre entradas).
  * Necesitas evitar problemas de prototipo por claves dinámicas de usuarios.

* Usa **Objeto** si:

  * Tus claves son cadenas literales (props) y quieres interoperar fácilmente con JSON.
  * Trabajas con datos estáticos o estructuras tipo "registro" (por ejemplo un POJO con propiedades conocidas).
  * Prefieres la sintaxis de acceso por notación punto (obj.prop) y no necesitas las ventajas de `Map`.

---

## Operaciones comunes (en palabras, sin código)

* **Crear**: `Map` se crea vacío y luego se agregan pares con `set`.
* **Leer**: preguntar por la clave con `get` (devuelve `undefined` si no existe).
* **Comprobar existencia**: `has` devuelve true/false.
* **Borrar**: `delete` quita una clave y su valor.
* **Contar**: `map.size` devuelve el número de entradas; en objetos hay que obtener `Object.keys(obj).length`.
* **Iterar**: `Map` se itera directamente en pares [clave, valor]; para objetos se usan `Object.entries()` o `Object.keys()`.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map - JavaScript | MDN"
