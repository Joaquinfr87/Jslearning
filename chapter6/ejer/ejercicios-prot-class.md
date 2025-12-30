## 🛠️ Parte 1: Ejercicios de Prototipos (La Base)
### 1. Contador Básico con Prototipo
Crea una función constructora `Contador` que inicialice una propiedad `valor` en 0.  
Agrega el método `incrementar` a `Contador.prototype` para que aumente `valor` en 1.

### 2. Cadena de Prototipos Personalizada
Crea un objeto base llamado `AnimalPrototype` con una propiedad `es_mamifero: true` y un método `dormir()`.  
Luego, crea un objeto `perro` cuyo prototipo sea `AnimalPrototype` usando **`Object.create()`**.  
Llama a `perro.dormir()`.

### 3. Sombra de Propiedades (*Shadowing*)
Crea un objeto `ConfiguracionBase` con una propiedad `tema: 'claro'`.  
Crea un nuevo objeto `usuarioConfig` que herede de `ConfiguracionBase`.  
Luego, define una propiedad `tema: 'oscuro'` directamente en `usuarioConfig`.  
Imprime ambas propiedades `tema` para demostrar el *shadowing*.

### 4. Método `toString` Sobreescrito
Crea una función constructora `Punto` que acepte `x` e `y`.  
Agrega al prototipo un método `toString` que devuelva la cadena en formato `(x, y)`.  
Prueba con un nuevo objeto `Punto`.

### 5. Herencia de Constructores
Crea una función constructora `Vehiculo(ruedas)` y una función constructora `Coche(ruedas, color)`.  
Haz que `Coche` herede de `Vehiculo` usando `Vehiculo.call(this, ruedas)` y agrega un método `mostrarColor()` solo a `Coche.prototype`.

### 6. Propiedades Propias vs. Heredadas
Usando la función `Vehiculo` del ejercicio 5, crea una instancia.  
Utiliza `Object.hasOwn()` para verificar si `ruedas` es una propiedad propia y si el método `mostrarColor` es una propiedad propia.

### 7. Extensión de Objetos Existentes
Crea un objeto `Logger` con un método `log(msg)`.  
Luego, crea una función constructora `Temporizador` que use `Object.assign()` para añadir el método `log` de `Logger` a `Temporizador.prototype`.

### 8. Cadena de Prototipos de Tres Niveles
Crea tres objetos: `A`, `B` y `C`.  
Haz que `C` herede de `B` y `B` herede de `A`.  
El objeto `A` debe tener un método `mostrar()` que imprima una propiedad definida en `C`.

### 9. Constructor de `Array` Modificado
Agrega un método llamado `primero` a `Array.prototype` que devuelva el primer elemento del arreglo (`this[0]`).  
Pruébalo con un arreglo de prueba.

### 10. Uso Dinámico de `this`
Crea una función constructora `Persona(nombre)`.  
Agrega un método `presentarse()` a su prototipo.  
Llama a `presentarse()` desde una instancia y luego usa `call` o `apply` para invocarlo con un objeto distinto como contexto.

---

## 🚀 Parte 2: Ejercicios de Clases (ES6+)

### 11. Clase Básica con Getters y Setters
Crea una clase `Circulo` con un constructor que acepte el `radio`.  
Define un **getter** `area` que calcule π·r² y un **setter** `diametro` que actualice el `radio` a la mitad del valor recibido.

### 12. Herencia de Clases Simple
Crea una clase `Producto` con un constructor que acepte `nombre` y `precio`.  
Crea una clase `Electronico` que **extienda** a `Producto` y agregue una propiedad `garantia` usando `super()`.

### 13. Sobreescritura de Métodos
Usando `Producto` y `Electronico`, define un método `mostrarInfo()` en `Producto`.  
Luego, **sobrescribe** `mostrarInfo()` en `Electronico` llamando primero a `super.mostrarInfo()` y agregando la información de la garantía.

### 14. Propiedades Estáticas
Crea una clase `Utilidad` con una propiedad **estática** `version` y un método **estático** `formatearFecha(fecha)`.  
Accede a ambos sin instanciar la clase.

### 15. Encapsulación con Propiedades Privadas (`#`)
Crea una clase `CuentaBancaria` con una propiedad privada `#saldo`.  
Define los métodos `depositar(monto)` y `consultarSaldo()`.

### 16. Herencia Múltiple Simulada con Mixins
Crea un objeto `VoladorMixin` con un método `volar()`.  
Crea una clase `Pajaro` y usa `Object.assign(Pajaro.prototype, VoladorMixin)` para mezclar funcionalidades.

### 17. Clases Abstractas (Simulación)
Define una clase base `Figura` con un método `calcularArea()` que arroje un `Error`.  
Luego, crea una clase `Rectangulo` que herede de `Figura` e implemente correctamente `calcularArea()`.

### 18. Clases con Parámetros por Defecto
Crea una clase `Temporizador` cuyo constructor acepte un `duracion` con valor por defecto de 60.

### 19. Herencia en Clases con `super`
Crea una clase `Usuario` y una clase `Administrador` que herede de `Usuario`.  
Asegúrate de que el constructor de `Administrador` invoque correctamente a `super()`.

### 20. Uso de `instanceof` con Clases
Usando `Producto` y `Electronico`, crea una instancia de cada uno y utiliza **`instanceof`** para verificar las relaciones de herencia.
