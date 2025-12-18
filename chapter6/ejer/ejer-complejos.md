### 1. El Sistema de Pagos (Polimorfismo)

**Objetivo:** Implementar el concepto de "interfaz" usando clases.

* **Reto:** Crea una clase base `MetodoPago`. Esta clase debe tener un método `procesar(cantidad)` que lance un error si no es implementado por la subclase (`throw new Error("Método no implementado")`).
* Luego, crea tres subclases: `TarjetaCredito`, `PayPal` y `Cripto`.
* Cada una debe implementar su propia lógica de `procesar(cantidad)`.
* Crea una función externa `realizarCompra(metodo, monto)` que acepte cualquier objeto que herede de `MetodoPago` y ejecute el pago sin saber de qué tipo es.



---

### 2. Singleton para Gestión de Configuración (Patrones de Diseño)

**Objetivo:** Asegurar que solo exista una instancia de una clase en toda la aplicación.

* **Reto:** Crea una clase `Configuracion`.
* Debe almacenar un objeto de ajustes (ej. `{ tema: "oscuro", lenguaje: "es" }`).
* Implementa la lógica necesaria para que, aunque alguien intente hacer `new Configuracion()` varias veces, siempre se devuelva la **misma instancia** creada la primera vez.
* Añade métodos para `get(clave)` y `set(clave, valor)`.



---

### 3. Herencia de Prototipos "A la Antigua"

**Objetivo:** Entender qué pasa bajo el capó de las clases modernas.

* **Reto:** Sin usar la palabra clave `class`, recrea una estructura de herencia:
1. Crea una función constructora `Vehiculo(marca)`. Añade un método `moverse` a su `.prototype`.
2. Crea una función constructora `Coche(marca, modelo)`.
3. Haz que `Coche` herede de `Vehiculo` usando `Object.create(Vehiculo.prototype)` y vincula correctamente el `constructor`.
4. Demuestra que un objeto de `Coche` es `instanceof Vehiculo`.



---

### 4. Mixins para Capacidades Modulares

**Objetivo:** Componer clases sin usar herencia múltiple (que no existe en JS).

* **Reto:** Supongamos que tienes clases como `Persona`, `Robot` y `Dron`.
1. Crea un **Mixin** (un objeto o una función que devuelve un objeto) llamado `Volador` que tenga métodos como `despegar()` y `aterrizar()`.
2. Crea otro llamado `Hablar` con el método `decirNombre()`.
3. Usa `Object.assign()` para darle a `Robot` ambas capacidades, a `Dron` solo la de volar, y a `Persona` solo la de hablar.



---

### 5. Encapsulamiento con Campos Privados y Validadores

**Objetivo:** Proteger el estado interno de la clase.

* **Reto:** Crea una clase `CuentaBancaria`.
* Usa el prefijo `#` para que la propiedad `#saldo` sea privada.
* Crea un `getter` para leer el saldo, pero **no** un setter directo.
* Crea métodos `depositar(monto)` y `retirar(monto)`.
* El método `retirar` debe lanzar un error (Error Handling) si el monto es mayor al saldo disponible o si el monto es negativo.
* Añade un campo estático (`static`) llamado `limiteDiario` que afecte a todas las instancias.



---

### Bonus: ¿Cómo se ve el ejercicio 5?

Aquí un pequeño adelanto de la sintaxis de campos privados:

```javascript
class CuentaBancaria {
  #saldo = 0; // Campo privado

  constructor(titular) {
    this.titular = titular;
  }

  get saldo() {
    return `$${this.#saldo}`;
  }

  depositar(monto) {
    if (monto <= 0) throw new Error("Monto inválido");
    this.#saldo += monto;
  }
}

const miCuenta = new CuentaBancaria("Alex");
miCuenta.depositar(100);
console.log(miCuenta.saldo); // "$100"
console.log(miCuenta.#saldo); // SyntaxError: Private field '#saldo' must be declared in an enclosing class

```

¿Cuál de estos conceptos (Mixins, Prototipos, Privacidad) te resulta más difícil? Si quieres, podemos resolver el de **Mixins** juntos, que suele ser el más confuso.
