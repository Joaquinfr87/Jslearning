## 1. Métodos de Obtención (Getters)

Estos métodos extraen información específica de una instancia de fecha.

| Método | Retorna | Rango / Ejemplo |
| --- | --- | --- |
| **`getFullYear()`** | El año (4 dígitos) | `2025` |
| **`getMonth()`** | El mes (**Ojo: empieza en 0**) | `0` (Enero) a `11` (Diciembre) |
| **`getDate()`** | El día del mes | `1` a `31` |
| **`getDay()`** | El día de la semana | `0` (Domingo) a `6` (Sábado) |
| **`getHours()`** | La hora | `0` a `23` |
| **`getMinutes()`** | Los minutos | `0` a `59` |
| **`getSeconds()`** | Los segundos | `0` a `59` |
| **`getMilliseconds()`** | Los milisegundos | `0` a `999` |
| **`getTime()`** | Milisegundos desde 1/Ene/1970 | El famoso *Unix Timestamp* |

---

## 2. Métodos de Configuración (Setters)

Sirven para modificar una parte específica de la fecha.

* **`setFullYear(año)`**
* **`setMonth(mes)`** (Recuerda que Enero es 0)
* **`setDate(día)`**
* **`setHours(hora)`**
* **`setTime(milisegundos)`** (Cambia la fecha completa basada en el timestamp)

---

## 3. Métodos de Formateo (Conversión a String)

Son cruciales para mostrar la fecha al usuario de forma legible.

* **`toDateString()`**: Retorna solo la fecha en formato humano (`"Thu Dec 18 2025"`).
* **`toTimeString()`**: Retorna solo la hora y la zona horaria.
* **`toLocaleDateString()`**: Retorna la fecha según el formato del país del usuario (`"18/12/2025"` en español).
* **`toISOString()`**: Formato estándar ISO 8601 (`"2025-12-18T14:30:00.000Z"`). Es el mejor para enviar datos a un servidor.
* **`toJSON()`**: Igual que el anterior, usado automáticamente por `JSON.stringify()`.

---

## 4. Métodos Estáticos (Se llaman desde `Date`, no desde la instancia)

Estos métodos se usan sin necesidad de crear un objeto con `new`.

* **`Date.now()`**: Retorna el timestamp actual exacto. Es más rápido que hacer `new Date().getTime()`.
* **`Date.parse("2025-12-18")`**: Convierte una cadena de texto a milisegundos.

---

## 5. El dolor de cabeza: Los meses en 0

Es vital que anotes esto en tu documentación: **En JavaScript, los meses son un array indexado en cero.**

```javascript
const navidad = new Date(2025, 11, 25); // 11 es Diciembre
console.log(navidad.toLocaleDateString()); // "25/12/2025"

```

---

## 6. Operaciones Matemáticas con Fechas

Puedes restar fechas para obtener la diferencia en milisegundos.

```javascript
const fecha1 = new Date("2025-12-18");
const fecha2 = new Date("2025-12-20");

const diferencia = fecha2 - fecha1; // Resultado en milisegundos (172,800,000)
const dias = diferencia / (1000 * 60 * 60 * 24); // Convertir a días
console.log(dias); // 2

```

---

### Pro-tip para tu documentación:

Si necesitas manejar fechas de forma compleja (zonas horarias, sumas de meses complicadas), la API nativa de `Date` a veces se queda corta. Hoy en día se recomienda usar la nueva API de JavaScript llamada **`Temporal`** (que está llegando a los navegadores) o librerías como **`date-fns`**.

