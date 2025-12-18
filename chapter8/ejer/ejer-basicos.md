### 1. El bloque `try...catch` básico

**Objetivo:** Capturar un error de referencia y evitar que el script se detenga.

* **Reto:** Escribe una función llamada `saludar(nombre)`. Dentro de la función, intenta imprimir en consola la variable `apellido` (que no existe). Usa `try...catch` para capturar el error e imprimir un mensaje personalizado: "Ocurrió un error: [mensaje del error]".

---

### 2. Lanzar errores personalizados (`throw`)

**Objetivo:** Validar datos de entrada manualmente.

* **Reto:** Crea una función `validarEdad(edad)`.
* Si la edad es menor a 18, debe lanzar (**throw**) un nuevo error con el mensaje: "Debes ser mayor de edad".
* Si la edad no es un número, lanza un error que diga: "La entrada debe ser un número".
* Si todo está bien, devuelve "Acceso concedido".
* **Extra:** Envuelve la llamada a la función en un `try...catch` para mostrar el mensaje de error capturado.



---

### 3. El uso de `finally`

**Objetivo:** Entender procesos de limpieza que deben ejecutarse siempre.

* **Reto:** Simula una conexión a una base de datos.
1. Crea una variable `estadoConexion = "cerrada"`.
2. En un bloque `try`, cambia `estadoConexion` a "abierta" y lanza un error aleatorio.
3. En el bloque `finally`, asegúrate de que `estadoConexion` vuelva a ser "cerrada", sin importar si hubo error o no.
4. Imprime el estado final para verificarlo.



---

### 4. Manejo de errores en Promesas (`.catch`)

**Objetivo:** Gestionar errores en código asíncrono tradicional.

* **Reto:** Crea una función `obtenerUsuario(id)` que devuelva una **Promesa**.
* Si el `id` es 1, resuelve con `{ nombre: "Alex" }`.
* Si el `id` es cualquier otro, rechaza la promesa con un error: "Usuario no encontrado".
* Llama a la función y usa el método `.catch()` para mostrar el error en la consola.



---

### 5. Async / Await y `try...catch`

**Objetivo:** El estándar moderno para manejar errores en peticiones HTTP.

* **Reto:** Usa la API pública de JSONPlaceholder para hacer un `fetch` a una URL que no existe (ejemplo: `https://jsonplaceholder.typicode.com/invalid-url`).
1. Crea una función `async` llamada `descargarDatos()`.
2. Usa `try...catch`.
3. Dentro del `try`, verifica si la respuesta es exitosa (`response.ok`). Si no lo es, lanza un error con el código de estado (status code).
4. Captura cualquier error de red o de validación en el `catch`.



---

### 6. Creación de una Clase de Error personalizada

**Objetivo:** Estructurar errores específicos para aplicaciones grandes.

* **Reto:** Crea una clase llamada `ValidationError` que herede de la clase nativa `Error`.
* Debe tener una propiedad adicional llamada `campo`.
* Usa esta clase en una función que valide un formulario. Si el campo "email" está vacío, lanza un `new ValidationError("El email es obligatorio", "email")`.



---

### Ejemplo de solución (Ejercicio 2)

Para que puedas comparar, aquí tienes cómo se resolvería el segundo ejercicio:

```javascript
function validarEdad(edad) {
  try {
    if (typeof edad !== 'number') {
      throw new TypeError("La entrada debe ser un número");
    }
    if (edad < 18) {
      throw new Error("Debes ser mayor de edad");
    }
    console.log("Acceso concedido");
  } catch (error) {
    console.error(`Error capturado: ${error.message}`);
  }
}

validarEdad("diez"); // Error capturado: La entrada debe ser un número
validarEdad(15);     // Error capturado: Debes ser mayor de edad

```

---

¿Te gustaría que resolvamos alguno de estos ejercicios juntos o prefieres que te dé una solución detallada de todos para estudiarlos?
