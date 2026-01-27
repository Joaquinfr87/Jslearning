## 1. **Contexto**

El objetivo del código es **analizar un archivo INI** y convertirlo en un **objeto JavaScript**.

Un archivo INI tiene estas reglas:

1. Líneas en blanco o comentarios (`;`) se ignoran.
2. Líneas con `[seccion]` crean una nueva sección.
3. Líneas como `clave=valor` agregan un ajuste al objeto de la sección actual.
4. Todo lo demás se considera inválido.

Ejemplo INI:

```
searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

[larry]
fullname=Larry Doe
type=kindergarten bully
```

Queremos obtener un objeto como:

```js
{
  searchengine: "https://duckduckgo.com/?q=$1",
  spitefulness: "9.7",
  larry: {
    fullname: "Larry Doe",
    type: "kindergarten bully"
  }
}
```

---

## 2. **Función `parseINI`**

```js
function parseINI(string) {
  let result = {};
  let section = result;
  for (let line of string.split(/\r?\n/)) {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;|$)/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  }
  return result;
}
```

---

### **2.1. División en líneas**

```js
string.split(/\r?\n/)
```

* `split()` divide la cadena en un array de líneas.
* La regex `/\r?\n/` permite detectar **saltos de línea en Windows (`\r\n`) o Unix (`\n`)**.
* Resultado: cada iteración del `for` procesa **una línea a la vez**.

---

### **2.2. Variables principales**

```js
let result = {};
let section = result;
```

* `result` → objeto final que contendrá todo.
* `section` → puntero a la sección actual; al inicio apunta a `result` para los campos de nivel superior.

---

### **2.3. Detectar una línea `clave=valor`**

```js
if (match = line.match(/^(\w+)=(.*)$/)) {
  section[match[1]] = match[2];
}
```

* `line.match(/^(\w+)=(.*)$/)` → usa regex para capturar líneas con `clave=valor`.

**Regex explicado:**

| Parte   | Significado                                       |
| ------- | ------------------------------------------------- |
| `^`     | Inicio de la línea                                |
| `(\w+)` | Captura un **identificador alfanumérico** (clave) |
| `=`     | Literal, el signo igual                           |
| `(.*)`  | Captura **todo lo que sigue** (valor)             |
| `$`     | Fin de la línea                                   |

* `match[1]` → la clave
* `match[2]` → el valor
* Se asigna al objeto de la **sección actual**: `section[clave] = valor`.

> Nota: La asignación dentro del `if` (`match = ...`) funciona porque el valor de la asignación es el mismo objeto devuelto por `match()`. Si no hay coincidencia, devuelve `null` y la condición falla.

---

### **2.4. Detectar una sección `[nombre]`**

```js
else if (match = line.match(/^\[(.*)\]$/)) {
  section = result[match[1]] = {};
}
```

**Regex explicado:**

| Parte  | Significado                                                           |
| ------ | --------------------------------------------------------------------- |
| `^`    | Inicio de línea                                                       |
| `\[`   | Literal `[`                                                           |
| `(.*)` | Captura cualquier cosa dentro de los corchetes (nombre de la sección) |
| `\]`   | Literal `]`                                                           |
| `$`    | Fin de línea                                                          |

* Crea un **nuevo objeto vacío** para la sección: `result[match[1]] = {}`.
* Actualiza `section` para que las siguientes líneas se agreguen ahí.

---

### **2.5. Ignorar comentarios o líneas vacías**

```js
else if (!/^\s*(;|$)/.test(line)) {
  throw new Error("Line '" + line + "' is not valid.");
}
```

* Regex `/^\s*(;|$)/`:

| Parte  | Significado                              |                                                     |
| ------ | ---------------------------------------- | --------------------------------------------------- |
| `^\s*` | Cualquier cantidad de espacios al inicio |                                                     |
| `(;    | $)`                                      | Luego un `;` (comentario) o el fin de línea (vacía) |

* `.test(line)` devuelve `true` si es comentario o línea vacía.
* `!` → si **no coincide**, la línea es inválida → lanza un error.

---

### **2.6. Retorno del objeto**

```js
return result;
```

* Al final, `result` contiene todas las configuraciones de nivel superior y las secciones anidadas.

---

### **3. Ejemplo práctico**

```js
console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
```

**Salida:**

```js
{
  name: "Vasilis",
  address: { city: "Tessaloniki" }
}
```

* `name=Vasilis` → nivel superior
* `[address]` → crea nueva sección
* `city=Tessaloniki` → agregado a la sección `address`

---

### **4. Puntos clave de la implementación**

1. **Asignación dentro del `if`**:

```js
if (match = line.match(...))
```

* Aprovecha que `=` devuelve el valor asignado.
* Permite usar el mismo objeto `match` inmediatamente.

2. **Uso de `^` y `$`** en regex:

* Garantiza que **toda la línea** cumpla el patrón.
* Evita errores donde un fragmento de línea coincida accidentalmente.

3. **Secciones dinámicas:**

* Cada `[sección]` crea un objeto nuevo y actualiza `section` para apuntar ahí.

4. **Validación estricta:**

* Líneas que no sean `clave=valor`, sección o comentario **producen error**, evitando datos corruptos.

