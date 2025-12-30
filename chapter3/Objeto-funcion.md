## 1. El Objeto Función (`Function Object`)

En JavaScript, cada vez que defines una función, estás creando una instancia del objeto global `Function`. Al ser un objeto, tiene **propiedades** y **métodos**.

### Propiedades internas clave:

* **`name`**: El nombre de la función.
* **`length`**: La cantidad de argumentos que la función espera.
* **`prototype`**: (Solo en funciones tradicionales) El objeto que se usará como prototipo si la función se usa con `new`.

---

## 2. Métodos de Control de Contexto: `call`, `apply` y `bind`

Estos métodos existen en el `Function.prototype`, lo que significa que **todas** las funciones tienen acceso a ellos. Su objetivo principal es manipular el valor de `this`.

### A. `.call()`

Invoca la función inmediatamente, permitiéndote asignar manualmente un objeto al `this`. Los argumentos adicionales se pasan uno a uno.

* **Sintaxis:** `func.call(objetoContexto, arg1, arg2, ...)`
* **Uso principal:** Herencia de constructores y "préstamo de métodos" (*method borrowing*).

```javascript
function describir() {
  console.log(`Vehículo de ${this.ruedas} ruedas.`);
}

const moto = { ruedas: 2 };
describir.call(moto); // "Vehículo de 2 ruedas."

const persona = {
  nombre: "Alex",
  saludar: function(ciudad) {
    console.log(`Hola, soy ${this.nombre} y vivo en ${ciudad}`);
  }
};

const otraPersona = {
  nombre: "Maria"
};

// Maria no tiene el método saludar, así que se lo "pide prestado" a Alex
persona.saludar.call(otraPersona, "Madrid");
// Resultado: "Hola, soy Maria y vivo en Madrid"
```

### B. `.apply()`

Es idéntico a `.call()`, pero los argumentos adicionales se pasan como un **único array**.

* **Sintaxis:** `func.apply(objetoContexto, [arg1, arg2, ...])`
* **Uso principal:** Cuando tienes una lista de datos en un array y quieres pasarlos como argumentos individuales a una función.

```javascript
const numeros = [5, 10, 2, 8];
// Math.max no acepta arrays, pero apply "desparrama" el array en argumentos
const max = Math.max.apply(null, numeros); 
console.log(max); // 10

```

### C. `.bind()`

A diferencia de los anteriores, **no ejecuta la función**. Devuelve una **nueva función** con el `this` permanentemente ligado al objeto que le pases.

* **Sintaxis:** `const nuevaFunc = func.bind(objetoContexto)`
* **Uso principal:** Mantener el contexto en eventos de usuario o funciones que se ejecutan más tarde (asincronía).

```javascript
const usuario = {
  nombre: "Ana",
  saludar: function() { console.log(this.nombre); }
};

const saludoAsincrono = usuario.saludar.bind(usuario);
setTimeout(saludoAsincrono, 1000); // Imprimirá "Ana" después de 1 segundo

```

---

## 3. Resumen comparativo para tu documentación

| Método | Ejecución | Argumentos | Retorno |
| --- | --- | --- | --- |
| **`call`** | Inmediata | Comas (`a, b, c`) | El resultado de la función |
| **`apply`** | Inmediata | Array (`[a, b, c]`) | El resultado de la función |
| **`bind`** | Diferida (luego) | Comas (`a, b, c`) | Una función nueva |

---

