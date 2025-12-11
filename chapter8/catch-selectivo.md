El tema central aquí es: **¿Cómo distinguir entre "el usuario se equivocó" y "el programador se equivocó"?**

### Contexto: La diferencia entre un error "Suave" y uno "Grave"

Imagina que eres un **mecánico de autos**. Tienes un manual de procedimientos (tu código).

1.  **Error Esperado (Suave):** El cliente intenta encender el auto sin la llave.
      * *Solución:* Le dices "Señor, necesita la llave". (El programa sigue funcionando).
2.  **Error Inesperado (Grave):** El motor explota y sale fuego.
      * *Solución:* ¡Correr\! (El programa debe detenerse o avisar al sistema central).

### El Problema: El `catch` ciego (La red que atrapa todo)

En JavaScript, cuando usas `try { ... } catch (e) { ... }`, el bloque `catch` es como una red de pesca gigante. Atrapa **todo**:

  * Atrapa el "Señor, necesita la llave".
  * Atrapa el "¡El motor explotó\!".

El libro te muestra este código "peligroso":

```javascript
for (;;) { // Bucle infinito
  try {
    // AQUÍ ESTÁ EL ERROR DEL PROGRAMADOR:
    // Escribió "promtDirection" (falta la 'p') en vez de "promptDirection".
    let dir = promtDirection("Where?"); 
    console.log("You chose ", dir);
    break;
  } catch (e) {
    // EL CATCH CIEGO:
    // Aquí el programador asume: "Si algo falló, es que el usuario escribió mal".
    console.log("Not a valid direction. Try again.");
  }
}
```

**¿Por qué esto es un desastre?**

1.  JavaScript intenta ejecutar `promtDirection`.
2.  No la encuentra y lanza un error grave: `ReferenceError: promtDirection is not defined`.
3.  El error cae en la red del `catch`.
4.  El `catch` ignora que el motor está en fuego y simplemente imprime: *"Dirección no válida, intente de nuevo"*.
5.  El bucle vuelve a empezar. Vuelve a fallar. Vuelve a imprimir.
6.  **Resultado:** Tienes un bucle infinito y tú, como programador, te vuelves loco porque la consola te dice "Dirección no válida" cuando en realidad tienes un error de sintaxis (typo).

-----

### La Solución: Identificaciones Personalizadas

Para arreglar esto, necesitamos que el error "Suave" tenga una identificación especial, para que el `catch` pueda reconocerlo y dejar pasar los errores "Graves".

#### Paso 1: Crear la "Identificación" (La clase `InputError`)

Vamos a crear un tipo de error que sea exclusivo para "Problemas de entrada de datos".

```javascript
// Definimos una nueva clase de error.
// "extends Error" significa: "Esto funciona igual que un error normal, 
// pero tiene el nombre 'InputError'".
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  
  // AQUÍ ESTÁ LA CLAVE:
  // Si el usuario escribe mal, NO lanzamos un Error genérico.
  // Lanzamos nuestro InputError específico.
  throw new InputError("Invalid direction: " + result);
}
```

Ahora tenemos dos tipos de errores posibles en el mundo:

1.  **`InputError`**: (Creado por nosotros) "El usuario escribió mal".
2.  **`ReferenceError`, `SyntaxError`, etc.**: (Creados por JavaScript) "El programador metió la pata".

-----

#### Paso 2: El `catch` selectivo (El filtro)

Ahora reescribimos el bucle principal. El `catch` ya no asume nada. Ahora inspecciona el error antes de decidir qué hacer.

```javascript
for (;;) {
  try {
    let dir = promptDirection("Where?"); // Supongamos que aquí el código está bien
    console.log("You chose ", dir);
    break;
  } catch (e) {
    // Aquí 'e' es el objeto del error que acaba de ocurrir.
    
    // PREGUNTA 1: ¿Es 'e' una instancia de mi error personalizado?
    if (e instanceof InputError) {
      // CONCLUSIÓN: Ah, es solo que el usuario escribió "Arriba" en vez de "Left".
      // Esto lo puedo manejar. Le aviso y seguimos.
      console.log("Not a valid direction. Try again.");
    } 
    // PREGUNTA 2: ¿No es InputError? (Entonces es un bug, un typo, o algo grave)
    else {
      // CONCLUSIÓN: ¡Esto no es culpa del usuario! ¡Es un bug!
      // No sé cómo manejar esto.
      // ¡LANZO EL ERROR DE NUEVO HACIA ARRIBA! (Rethrow)
      throw e; 
    }
  }
}
```

### Análisis detallado del flujo:

**Escenario A: El usuario escribe "Manzana"**

1.  `promptDirection` detecta "Manzana".
2.  Lanza `throw new InputError(...)`.
3.  El `catch` atrapa el error `e`.
4.  El `if (e instanceof InputError)` es **VERDADERO**.
5.  Se imprime "Not a valid direction". El programa sigue vivo. ✅

**Escenario B: El programador comete un error (Typo)**

1.  Imagina que en el `try` escribiste mal `promtDirection`.
2.  JavaScript lanza un `ReferenceError` (no es un InputError).
3.  El `catch` atrapa el error `e`.
4.  El `if (e instanceof InputError)` comprueba la etiqueta. ¿Es un InputError? **FALSO**.
5.  Pasa al `else`.
6.  Ejecuta `throw e`.
      * Esto significa: "Yo no toco este error, que explote el programa".
7.  El programa se detiene y la consola muestra en rojo: `ReferenceError: promtDirection is not defined`.
8.  Tú ves el error real y puedes arreglarlo. ✅

### Resumen visual de la lógica

Es como un filtro de seguridad en un aeropuerto:

  * **Llega una maleta (`catch e`)**.
  * **Seguridad pregunta:** "¿Es esta una maleta de pasajero normal (`instanceof InputError`)?"
      * **SÍ:** Ok, pásela por el escáner y que siga (`console.log`).
      * **NO (Es una bomba o algo desconocido):** ¡ALERTA\! ¡Detengan todo\! (`throw e`).

