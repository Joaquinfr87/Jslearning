Imagina una oficina con tres niveles:

1.  **Jefe Supremo** (El código principal).
2.  **Gerente Intermedio** (Una función intermedia).
3.  **Becario** (La función que hace el trabajo sucio).

-----

### 1\. La "Forma Antigua" (Retornar valores especiales)

En la forma antigua, si hay un error, el error debe "escalarse" paso a paso, mano a mano. Nadie puede saltarse a su jefe inmediato.

**El Escenario:** El Jefe le pide al Gerente un informe. El Gerente se lo pide al Becario. El Becario se da cuenta de que la impresora no tiene papel.

  * **Becario:** Intenta imprimir. Falla. Retorna `null` (su forma de decir "no pude").
  * **Gerente:** Recibe `null`. Tiene que escribir código para revisar: *"¿Me dio el informe o me dio `null`? Ah, es `null`"*. Entonces el Gerente retorna `null` al Jefe.
  * **Jefe Supremo:** Recibe `null`. Tiene que revisar: *"¿El Gerente me dio el informe o `null`?"*.

**En código se ve así (muy repetitivo):**

```javascript
// EL BECARIO
function imprimirInforme() {
  let hayPapel = false;
  if (!hayPapel) {
    return null; // <--- Devuelve un valor especial de error
  }
  return "Informe Listo";
}

// EL GERENTE
function gestionarTarea() {
  let resultado = imprimirInforme();
  // El gerente está OBLIGADO a revisar si hubo error
  if (resultado === null) {
    return null; // <--- Pasa el error hacia arriba
  }
  return "El informe es: " + resultado;
}

// EL JEFE SUPREMO
let tarea = gestionarTarea();
// El jefe TAMBIÉN está obligado a revisar
if (tarea === null) {
  console.log("Error: No se pudo hacer la tarea");
} else {
  console.log(tarea);
}
```

**El problema:** Si tienes 20 funciones una dentro de otra, las 20 tienen que tener ese `if (resultado === null)`. Es agotador y ensucia el código.

-----

### 2\. La "Forma Nueva" (Excepciones: `throw`, `try`, `catch`)

Aquí usamos "teletransportación" o un "botón de pánico". Si el Becario tiene un problema, no se lo dice al Gerente. El Becario **lanza (`throw`)** una alarma que detiene todo y la alarma vuela directamente hasta quien sepa manejarla (el Jefe), ignorando al Gerente completamente.

Vamos a definir las palabras clave antes del código:

1.  **`Error` (La granada):** Es el objeto que contiene la información del problema. "Falta papel".
2.  **`throw` (Lanzar):** Es la acción de quitarle el seguro a la granada y soltarla. Rompe el flujo normal. La función se detiene INSTANTÁNEAMENTE.
3.  **`try` (Intentar - Zona de peligro):** Es un escudo que pone el Jefe. Dice: "Voy a intentar ejecutar este bloque de código, pero sé que algo podría explotar ahí dentro".
4.  **`catch` (Atrapar - Zona de seguridad):** Es la red que atrapa la granada si explota. Si no hay explosión, esta parte nunca se ejecuta.

**En código se ve así:**

```javascript
// EL BECARIO
function imprimirInforme() {
  let hayPapel = false;
  if (!hayPapel) {
    // ¡BAM! Lanza el error. La función muere aquí.
    // No devuelve nada, simplemente explota.
    throw new Error("¡No hay papel!"); 
  }
  return "Informe Listo";
}

// EL GERENTE
function gestionarTarea() {
  // Fíjate que al gerente NO LE IMPORTAN los errores.
  // Él asume que todo saldrá bien. Código mucho más limpio.
  let resultado = imprimirInforme(); 
  return "El informe es: " + resultado;
}

// EL JEFE SUPREMO
try {
  // Intentamos hacer todo el proceso
  console.log(gestionarTarea());
} catch (error) {
  // Si ALGUIEN (el becario, el gerente, o quien sea) lanzó un throw...
  // Saltamos directamente aquí.
  console.log("Algo salió mal: " + error.message);
}
```

### ¿Qué pasó aquí exactamente?

1.  El código entra al `try`.
2.  Llama a `gestionarTarea()` (Gerente).
3.  El Gerente llama a `imprimirInforme()` (Becario).
4.  El Becario hace `throw new Error(...)`.
5.  **MAGIA:** JavaScript deja de ejecutar al Becario inmediatamente.
6.  JavaScript mira al Gerente. ¿El Gerente tiene un `try/catch`? No. Entonces cancela al Gerente inmediatamente (el Gerente ni se entera).
7.  JavaScript mira al Jefe. ¿Tiene un `try/catch`? **Sí.**
8.  La ejecución "aterriza" en el bloque `catch` del Jefe.
9.  La variable `error` dentro del catch ahora contiene el mensaje "¡No hay papel\!".

### Resumen de diferencias

| Característica | Forma Antigua (Return null) | Forma Nueva (Throw/Try/Catch) |
| :--- | :--- | :--- |
| **Flujo** | Paso a paso, función por función. | Salto inmediato (Teletransporte). |
| **Código intermedio** | El código intermedio debe revisar errores (`if result == null`). | El código intermedio es limpio, ignora los errores. |
| **Detener ejecución** | Tienes que programarlo manualmente con `return`. | `throw` detiene todo automáticamente. |
| **Información** | Solo recibes un valor (`null` o `-1`). | Recibes un objeto `Error` con mensaje y rastreo de dónde ocurrió. |

¿Te ayuda esta comparación a visualizar mejor cómo la excepción "salta" por encima de las funciones intermedias?
