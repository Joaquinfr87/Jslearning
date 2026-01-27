## Resumen

Las **expresiones regulares** son objetos que representan **patrones en cadenas de texto**. Utilizan su propio lenguaje para expresar estos patrones.

| Patrón     | Significado                                                     |     |                               |
| ---------- | --------------------------------------------------------------- | --- | ----------------------------- |
| `/abc/`    | Una secuencia de caracteres                                     |     |                               |
| `/[abc]/`  | Cualquier carácter de un conjunto de caracteres                 |     |                               |
| `/[^abc]/` | Cualquier carácter que **no** esté en un conjunto de caracteres |     |                               |
| `/[0-9]/`  | Cualquier carácter dentro de un rango de caracteres             |     |                               |
| `/x+/`     | Una o más ocurrencias del patrón `x`                            |     |                               |
| `/x+?/`    | Una o más ocurrencias, **no codicioso**                         |     |                               |
| `/x*/`     | Cero o más ocurrencias                                          |     |                               |
| `/x?/`     | Cero o una ocurrencia                                           |     |                               |
| `/x{2,4}/` | Dos a cuatro ocurrencias                                        |     |                               |
| `/(abc)/`  | Un grupo                                                        |     |                               |
| `/a        | b                                                               | c/` | Cualquiera de varios patrones |
| `/\d/`     | Cualquier dígito                                                |     |                               |
| `/\w/`     | Un carácter alfanumérico (“carácter de palabra”)                |     |                               |
| `/\s/`     | Cualquier carácter de espacio en blanco                         |     |                               |
| `/./`      | Cualquier carácter excepto saltos de línea                      |     |                               |
| `/\p{L}/u` | Cualquier carácter de letra                                     |     |                               |
| `/^/`      | Inicio de la entrada                                            |     |                               |
| `/$/`      | Fin de la entrada                                               |     |                               |
| `/(?=a)/`  | Una prueba de **look-ahead**                                    |     |                               |

---

Un **objeto RegExp** tiene un método **`test`** para comprobar si una cadena dada coincide con el patrón. También tiene un método **`exec`** que, cuando encuentra una coincidencia, devuelve un **array con todos los grupos coincidentes**. Este array tiene una propiedad `index` que indica dónde comenzó la coincidencia.

Las **cadenas (`String`)** tienen un método **`match`** para hacer coincidir la cadena con una expresión regular y un método **`search`** para buscarla, devolviendo solo la posición inicial de la coincidencia. Su método **`replace`** puede reemplazar coincidencias de un patrón con una cadena de reemplazo o con una función.

---

Las expresiones regulares pueden tener **opciones**, que se escriben después de la barra de cierre.

* **`i`** → hace que la coincidencia **ignore mayúsculas y minúsculas**.
* **`g`** → hace que la expresión sea **global**, lo que, entre otras cosas, permite que `replace` reemplace **todas las ocurrencias**, no solo la primera.
* **`y`** → hace que la expresión sea **sticky**, lo que significa que no buscará más adelante ni saltará parte de la cadena al buscar coincidencias.
* **`u`** → activa el **modo Unicode**, que permite la sintaxis `\p` y corrige problemas relacionados con caracteres que ocupan dos unidades de código.

---

Las expresiones regulares son una **herramienta potente pero con un manejo complicado**.

* Simplifican algunas tareas de manera significativa, pero pueden volverse rápidamente **difíciles de manejar** en problemas complejos.
* Parte de saber usarlas consiste en **resistir la tentación de forzar en ellas cosas que no pueden expresar de manera limpia**.

