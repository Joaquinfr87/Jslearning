
Aquí tienes **la lista completa** de métodos de objetos en JavaScript **+ un resumen corto de lo que hace cada uno**.
Directo y sin relleno, como tú prefieres.

---

# ✅ **MÉTODOS DE `Object` (LOS OFICIALES DEL LENGUAJE)**

## **1. Métodos para crear y copiar**

| Método                                    | Resumen                                                      |
| ----------------------------------------- | ------------------------------------------------------------ |
| **Object.create(proto)**                  | Crea un objeto con un prototipo específico.                  |
| **Object.assign(dest, ...src)**           | Copia propiedades de uno o más objetos a otro.               |
| **Object.defineProperty(obj, key, desc)** | Define una propiedad con configuraciones especiales.         |
| **Object.defineProperties(obj, descs)**   | Define múltiples propiedades con configuraciones especiales. |

---

## **2. Métodos para trabajar con prototipos**

| Método                                | Resumen                          |
| ------------------------------------- | -------------------------------- |
| **Object.getPrototypeOf(obj)**        | Obtiene el prototipo del objeto. |
| **Object.setPrototypeOf(obj, proto)** | Cambia el prototipo del objeto.  |

---

## **3. Métodos para inspeccionar propiedades**

| Método                                        | Resumen                                                     |
| --------------------------------------------- | ----------------------------------------------------------- |
| **Object.keys(obj)**                          | Devuelve un array con las claves propias y enumerables.     |
| **Object.values(obj)**                        | Devuelve los valores de las claves propias y enumerables.   |
| **Object.entries(obj)**                       | Devuelve pares `[clave, valor]`.                            |
| **Object.getOwnPropertyNames(obj)**           | Devuelve todas las claves propias (incluye no enumerables). |
| **Object.getOwnPropertySymbols(obj)**         | Devuelve solo símbolos propios.                             |
| **Object.getOwnPropertyDescriptor(obj, key)** | Devuelve info sobre una propiedad.                          |
| **Object.getOwnPropertyDescriptors(obj)**     | Todas las descripciones de propiedades.                     |

---

## **4. Métodos para comparar**

| Método              | Resumen                                         |
| ------------------- | ----------------------------------------------- |
| **Object.is(a, b)** | Igual que `===` pero más preciso para NaN y -0. |

---

## **5. Métodos para controlar cambios en los objetos**

| Método                            | Resumen                                      |
| --------------------------------- | -------------------------------------------- |
| **Object.preventExtensions(obj)** | Impide agregar nuevas propiedades.           |
| **Object.seal(obj)**              | Bloquea agregar/eliminar propiedades.        |
| **Object.freeze(obj)**            | Congela el objeto: no se puede cambiar nada. |
| **Object.isExtensible(obj)**      | Verifica si se pueden agregar propiedades.   |
| **Object.isSealed(obj)**          | Verifica si está sellado.                    |
| **Object.isFrozen(obj)**          | Verifica si está congelado.                  |

---

# ✅ **MÉTODOS HEREDADOS DE TODOS LOS OBJETOS (`Object.prototype`)**

| Método                        | Resumen                                             |
| ----------------------------- | --------------------------------------------------- |
| **toString()**                | Devuelve una representación en texto.               |
| **valueOf()**                 | Devuelve el valor primitivo del objeto (si existe). |
| **hasOwnProperty(key)**       | Verifica si una propiedad es propia del objeto.     |
| **isPrototypeOf(obj)**        | Verifica si es prototipo de otro objeto.            |
| **propertyIsEnumerable(key)** | Verifica si una propiedad es enumerable.            |
| **toLocaleString()**          | Versión localizada de toString.                     |

---

# ⚠ Métodos antiguos (existen pero no se recomiendan)

| Método                        | Resumen                   |
| ----------------------------- | ------------------------- |
| ****defineGetter**(key, fn)** | Define un getter.         |
| ****defineSetter**(key, fn)** | Define un setter.         |
| ****lookupGetter**(key)**     | Busca un getter heredado. |
| ****lookupSetter**(key)**     | Busca un setter heredado. |

---

## ✔ **RESUMEN FINAL**

1. **Crear/copiar:** create, assign
2. **Definir propiedades:** defineProperty(s)
3. **Prototipos:** getPrototypeOf, setPrototypeOf
4. **Listar propiedades:** keys, values, entries
5. **Estado del objeto:** isFrozen, isSealed, isExtensible
6. **Proteger objetos:** freeze, seal, preventExtensions
7. **Métodos base:** toString, valueOf, hasOwnProperty

---

