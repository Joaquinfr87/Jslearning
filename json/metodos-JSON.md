##1. `JSON.parse(text, [reviver])`###DefiniciónEl método `JSON.parse()` analiza una cadena de texto (string) en formato JSON y la convierte en un valor u objeto JavaScript.

* **`text` (Obligatorio):** La cadena JSON a analizar.
* **`reviver` (Opcional):** Una función que se llama para cada clave y valor en el resultado (incluyendo el resultado final). Permite examinar y transformar los valores antes de que se devuelvan. Si esta función devuelve `undefined`, la propiedad se elimina del objeto resultante.

###Ejemplo con `reviver`Usamos `reviver` para convertir una cadena de fecha ISO 8601 en un objeto `Date` de JavaScript, ya que JSON no soporta el tipo de dato `Date` de forma nativa.

```javascript
const jsonString = '{"producto": "Cafetera", "precio": 50.00, "fecha_compra": "2025-10-26T10:00:00.000Z"}';

function reviver(key, value) {
  // Expresión regular para detectar el formato de fecha ISO 8601
  const fechaRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  if (typeof value === 'string' && fechaRegex.test(value)) {
    // Si la clave es 'fecha_compra' y el valor es una cadena de fecha,
    // lo convertimos a un objeto Date.
    return new Date(value);
  }
  // Para todas las demás propiedades, devolvemos el valor sin cambios.
  return value;
}

const objetoParseado = JSON.parse(jsonString, reviver);

console.log(objetoParseado);
/*
{
  producto: 'Cafetera',
  precio: 50,
  fecha_compra: [Objeto Date: 2025-10-26T10:00:00.000Z]
}
*/

console.log(typeof objetoParseado.fecha_compra); // 'object' (instance of Date)

```

---

##2. `JSON.stringify(value, [replacer], [space])`###DefiniciónEl método `JSON.stringify()` convierte un valor u objeto JavaScript en una cadena de texto JSON.

* **`value` (Obligatorio):** El valor a convertir.
* **`replacer` (Opcional):** Puede ser una **función** para filtrar/modificar valores, o un **array** de strings/números para especificar qué propiedades incluir.
* **`space` (Opcional):** Un `Number` o `String` usado para insertar espacios en blanco y mejorar la legibilidad del JSON resultante (hace un "pretty print").

###Ejemplo 1: Usando `replacer` (Función)Usamos `replacer` para excluir propiedades privadas (que comienzan con `_`) y duplicar el valor del `precio`.

```javascript
const objetoJS = {
  nombre: "Monitor",
  precio: 300,
  stock: 15,
  _id_privado: 'XYZ123' 
};

function replacer(key, value) {
  if (key.startsWith('_')) {
    // Si la clave comienza con '_', devolvemos undefined para omitir la propiedad
    return undefined;
  }
  if (key === 'precio') {
    // Si es el precio, lo modificamos
    return value * 2;
  }
  // Para el resto, devolvemos el valor original
  return value;
}

const jsonStringFn = JSON.stringify(objetoJS, replacer);

console.log(jsonStringFn);
// Resultado: {"nombre":"Monitor","precio":600,"stock":15}

```

###Ejemplo 2: Usando `replacer` (Array) y `space`Usamos un array para especificar que solo queremos incluir las propiedades `nombre` y `stock`. Usamos `space` para formatear la salida.

```javascript
const objetoJS = {
  nombre: "Teclado Mecánico",
  precio: 150,
  stock: 25
};

const propiedadesAIncluir = ['nombre', 'stock'];
const espacioFormato = '\t'; // Usamos un tabulador

const jsonStringArraySpace = JSON.stringify(objetoJS, propiedadesAIncluir, espacioFormato);

console.log(jsonStringArraySpace);
/*
Resultado:
{
    "nombre": "Teclado Mecánico",
    "stock": 25
}
*/

```

---

##3. `JSON.rawJSON(text)`###DefiniciónEl método `JSON.rawJSON()` crea un objeto especial que "envuelve" una cadena de texto que se sabe que es **JSON válido**. Cuando este objeto es serializado por `JSON.stringify()`, el texto envuelto se inserta directamente en la salida **sin ser citado o escapado como una cadena normal**. Es crucial para la serialización de datos que no caben en los tipos de JavaScript, como los enteros muy grandes (`BigInt`).

* **`text` (Obligatorio):** La cadena de texto que representa el JSON que se desea inyectar sin serializar.

###Ejemplo con `BigInt`Demostramos cómo `JSON.rawJSON` previene que un número grande se trate como una simple cadena de texto con comillas al serializarse.

```javascript
// Definimos el comportamiento de serialización para BigInt
BigInt.prototype.toJSON = function () {
  // Usamos rawJSON para inyectar el valor como un NÚMERO JSON
  return JSON.rawJSON(this.toString()); 
};

const datosAltaPrecision = {
  clave_secreta: 98765432109876543210n // BigInt
};

// JSON.stringify lo serializa.
const jsonRaw = JSON.stringify(datosAltaPrecision);

console.log(jsonRaw);
// Resultado: {"clave_secreta":98765432109876543210}
// Nota: '9876...' NO está entre comillas dobles.

// Si no usáramos rawJSON, se serializaría como una cadena:
// '{"clave_secreta":"98765432109876543210"}'

```

---

##4. `JSON.isRawJSON(value)`###DefiniciónEl método `JSON.isRawJSON()` es un simple comprobador. Devuelve `true` si el valor proporcionado es un objeto "JSON sin procesar" creado por `JSON.rawJSON()`, y `false` en caso contrario.

* **`value` (Obligatorio):** El valor a comprobar.

###Ejemplo```javascript
const rawObjeto = JSON.rawJSON('{"a": 1}');
const objetoNormal = { a: 1 };
const cadenaNormal = '{"a": 1}';

console.log(`¿rawObjeto es RawJSON? ${JSON.isRawJSON(rawObjeto)}`); // true
console.log(`¿objetoNormal es RawJSON? ${JSON.isRawJSON(objetoNormal)}`); // false
console.log(`¿cadenaNormal es RawJSON? ${JSON.isRawJSON(cadenaNormal)}`); // false

```

---

¿Hay algún método o concepto en particular (como el manejo de `BigInt` o la función `replacer`) sobre el que te gustaría ver un ejemplo más complejo?
