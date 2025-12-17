##🛠️ Parte 1: Ejercicios de Prototipos (La Base)###1. Contador Básico con PrototipoCrea una función constructora `Contador` que inicialice una propiedad `valor` en 0. Agrega el método `incrementar` a `Contador.prototype` para que aumente `valor` en 1.

###2. Cadena de Prototipos PersonalizadaCrea un objeto base llamado `AnimalPrototype` con una propiedad `es_mamifero: true` y un método `dormir()`. Luego, crea un objeto `perro` cuyo prototipo sea `AnimalPrototype` usando **`Object.create()`**. Llama a `perro.dormir()`.

###3. Sombra de Propiedades (*Shadowing*)Crea un objeto `ConfiguracionBase` con una propiedad `tema: 'claro'`. Crea un nuevo objeto `usuarioConfig` que herede de `ConfiguracionBase`. Luego, define una propiedad `tema: 'oscuro'` directamente en `usuarioConfig`. Imprime ambas propiedades `tema` para demostrar el *shadowing*.

###4. Método `toString` SobreescritoCrea una función constructora `Punto` que acepte `x` e `y`. Agrega al prototipo un método `toString` que devuelva la cadena en formato `(x, y)`. Prueba con un nuevo objeto `Punto`.

###5. Herencia de ConstructoresCrea una función constructora `Vehiculo(ruedas)` y una función constructora `Coche(ruedas, color)`. Haz que `Coche` herede de `Vehiculo` (usando `Vehiculo.call(this, ruedas)`) y agrega un método `mostrarColor()` solo a `Coche.prototype`.

###6. Propiedades Propias vs. HeredadasUsando la función `Vehiculo` del ejercicio 5, crea una instancia. Utiliza `Object.hasOwn()` para verificar si `ruedas` es una propiedad propia y si el método `mostrarColor` es una propiedad propia.

###7. Extensión de Objetos ExistentesCrea un objeto `Logger` con un método `log(msg)`. Luego, crea una función constructora `Temporizador` que use `Object.assign()` para añadir el método `log` de `Logger` a `Temporizador.prototype`.

###8. Cadena de Prototipos de Tres NivelesCrea tres objetos: `A`, `B`, y `C`. Haz que `C` herede de `B`, y `B` herede de `A`. El objeto `A` debe tener un método `mostrar()` que imprima una propiedad que se defina en `C`.

###9. Constructor de `Array` ModificadoAgrega un método llamado `primero` a `Array.prototype` que devuelva el primer elemento del arreglo (`this[0]`). Pruébalo con un arreglo de prueba.

###10. Uso Dinámico de `this`Crea una función constructora `Persona(nombre)`. Agrega un método `presentarse()` a su prototipo. Llama a `presentarse()` directamente desde una instancia, y luego intenta usar `call` o `apply` para llamar a `presentarse()` usando un objeto completamente diferente como contexto.

---

##🚀 Parte 2: Ejercicios de Clases (ES6+)###11. Clase Básica con Getters y SettersCrea una clase `Circulo` con un `constructor` que acepte el `radio`. Define un **getter** `area` que calcule \pi r^2 y un **setter** `diametro` que actualice el `radio` a la mitad del valor recibido.

###12. Herencia de Clases SimpleCrea una clase `Producto` con un constructor que acepte `nombre` y `precio`. Crea una clase `Electronico` que **extienda** a `Producto` y agregue una propiedad `garantia` usando `super()`.

###13. Sobreescritura de MétodosUsando las clases `Producto` y `Electronico` del ejercicio 12, define un método `mostrarInfo()` en `Producto`. Luego, **sobrescribe** el método `mostrarInfo()` en `Electronico` para que primero llame al método padre usando **`super.mostrarInfo()`** y luego agregue la información de la garantía.

###14. Propiedades EstáticasCrea una clase `Utilidad` con una propiedad **estática** llamada `version` y un método **estático** llamado `formatearFecha(fecha)`. Accede a ambos sin instanciar la clase.

###15. Encapsulación con Propiedades Privadas (`#`)Crea una clase `CuentaBancaria` con una propiedad privada `#saldo`. Define un método `depositar(monto)` y un método `consultarSaldo()`.

###16. Herencia Múltiple Simulada con MixinsCrea un objeto `VoladorMixin` con un método `volar()`. Crea una clase `Pajaro`. Usa `Object.assign(Pajaro.prototype, VoladorMixin)` para "mezclar" las funcionalidades de `VoladorMixin` en `Pajaro`.

###17. Clases Abstractas (Simulación)Define una clase base `Figura` con un método `calcularArea()` que arroje un `Error` si es llamado. Luego, haz que una clase `Rectangulo` herede de `Figura` e implemente `calcularArea()` correctamente.

###18. Clases con Parámetros por DefectoCrea una clase `Temporizador` cuyo constructor acepte un `duracion` con un valor por defecto de 60.

###19. Herencia en Clases con `super` y Retorno ImplícitoCrea una clase `Usuario` y una clase `Administrador` que herede de `Usuario`. Asegúrate de que el constructor de `Administrador` llame correctamente al constructor de `Usuario` usando `super()`.

###20. Uso de `instanceof` con ClasesUsando la jerarquía de `Producto` y `Electronico` del ejercicio 12, crea una instancia de cada uno y utiliza el operador **`instanceof`** para verificar las relaciones de herencia (por ejemplo, ¿un `Electronico` es también un `Producto`?).
