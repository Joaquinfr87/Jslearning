### 1. Como función: `super()` (En el constructor)

Cuando una clase extiende a otra, `super()` se usa para llamar al constructor del padre. Es obligatorio hacerlo si la clase hija define su propio constructor.

**¿Por qué es necesario?**
Porque el objeto "hijo" no puede usar la palabra `this` hasta que el "padre" haya terminado de inicializar sus propias propiedades.

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Ejecuta el constructor de Animal para poner el nombre
    this.raza = raza; // Ahora ya podemos usar 'this'
  }
}

```

---

### 2. Como objeto: `super.metodo()` (En métodos normales)

Se usa para acceder a funciones que están definidas en la clase padre, incluso si la clase hija tiene una función con el mismo nombre (**Shadowing**).

**¿Para qué sirve?**
Para "extender" un comportamiento en lugar de reemplazarlo por completo.

```javascript
class Padre {
  saludar() {
    return "Hola desde el padre";
  }
}

class Hijo extends Padre {
  saludar() {
    // Usamos el saludo del padre y le añadimos algo más
    return super.saludar() + " y también desde el hijo";
  }
}

const instancia = new Hijo();
console.log(instancia.saludar()); // "Hola desde el padre y también desde el hijo"

```

---

### Reglas de oro de `super`:

1. **El orden importa:** En un constructor, `super()` debe ser la **primera línea**. Si intentas acceder a `this` antes de llamar a `super()`, JavaScript lanzará un `ReferenceError`.
2. **Solo en herencia:** No puedes usar `super` en una clase que no use la palabra `extends`.
3. **Hereda el contexto:** Aunque el código se ejecute en el padre, el `this` dentro de los métodos del padre seguirá apuntando a la instancia del hijo.

> `super` es la forma que tiene una subclase de decir: *"Quiero usar lo que mi padre ya sabe hacer"*. Se usa como **función** para construir el objeto y como **referencia** para llamar a métodos del padre.

### Ejemplo de Código: Tres niveles de Herencia

```javascript
// NIVEL 1: El "Abuelo" (Clase Base)
class Vehiculo {
  constructor(marca) {
    this.marca = marca;
  }
  
  encender() {
    return `${this.marca} está encendido.`;
  }
}

// NIVEL 2: El "Padre" (Hereda de Vehiculo)
class Auto extends Vehiculo {
  constructor(marca, modelo) {
    super(marca); // Llama al Abuelo
    this.modelo = modelo;
  }

  // Extendemos el método del abuelo
  encender() {
    return super.encender() + " Los sistemas electrónicos están listos.";
  }
}

// NIVEL 3: El "Hijo" (Hereda de Auto)
class AutoElectrico extends Auto {
  constructor(marca, modelo, bateria) {
    super(marca, modelo); // Llama al Padre (quien a su vez llama al Abuelo)
    this.bateria = bateria;
  }

  mostrarInfo() {
    // Accedemos a propiedades de todos los niveles
    console.log(`Marca: ${this.marca} (Nivel 1)`);
    console.log(`Modelo: ${this.modelo} (Nivel 2)`);
    console.log(`Batería: ${this.bateria}% (Nivel 3)`);
  }
}

// --- PRUEBA ---
const miTesla = new AutoElectrico("Tesla", "Model 3", 95);

miTesla.mostrarInfo();
console.log(miTesla.encender());

```

---

### ¿Cómo funciona la "Cascada" de `super()`?

Cuando creas una instancia de `AutoElectrico`, ocurre una reacción en cadena hacia arriba:

1. **`AutoElectrico`** dice: *"No puedo existir sin que mi padre (`Auto`) se construya primero"*. Llama a `super()`.
2. **`Auto`** dice: *"Yo tampoco puedo existir sin mi padre (`Vehiculo`)"*. Llama a su propio `super()`.
3. **`Vehiculo`** (el origen) finalmente crea el objeto y le pone la propiedad `marca`.
4. La respuesta baja: `Auto` recibe el objeto y le pone `modelo`. Finalmente, `AutoElectrico` le pone `bateria`.

---

### Conceptos Clave 

* **Propagación de Propiedades:** El objeto final (`miTesla`) tiene físicamente todas las propiedades de la cadena. Si usas `console.dir(miTesla)`, verás que no hay distinción; el objeto es una unidad que "recogió" atributos en cada piso.
* **Búsqueda de Métodos:** Cuando llamas a `encender()`, JavaScript busca en `AutoElectrico`. Si no lo encuentra, sube a `Auto`. Si no, sube a `Vehiculo`.
* **Reutilización y Especialización:** Cada nivel añade algo nuevo. El nivel 1 es genérico (ruedas, motor), el nivel 2 es específico (tipo de carrocería) y el nivel 3 es altamente especializado (voltaje, carga).

### Un detalle importante sobre `super`

En el Nivel 2, usamos `super.encender()`. Esto es muy potente porque nos permite **reutilizar la lógica del abuelo pero mejorarla**, en lugar de tener que escribir todo el código de encendido otra vez.
