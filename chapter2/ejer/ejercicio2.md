# Ejercicios Joaco

## Ejercicio 1: Validador de Contraseña
Escribe un programa en JavaScript que solicite al usuario ingresar una contraseña hasta que sea correcta. Debes usar prompt() para leer la entrada del usuario. Cuando la contraseña sea correcta, debes mostrar un mensaje de "Contraseña correcta" y también indicar cuántos intentos fallidos hubo antes de acertar.

## Ejercicio 2: Adivina el Número (Con Pistas)
Crea un programa donde la computadora genere un número aleatorio entre 1 y 100. El usuario debe adivinar este número, teniendo intentos infinitos. En cada intento, el programa debe dar pistas según qué tan cerca esté del número secreto:

- *Muy caliente:* Si la diferencia es de 3 números o menos.
- *Caliente:* Si la diferencia es de 10 números o menos (pero más de 3).
- *Tibio:* Si la diferencia es de 20 números o menos (pero más de 10).
- *Frío:* En cualquier otro caso.

El programa debe validar que el usuario solo ingrese números entre 1 y 100. Si ingresa un número fuera de este rango, debes mostrar un error y pedir otro número.

*Requisitos técnicos:*
- Usar prompt() para entrada del usuario.
- Usar alert() o console.log() para mostrar mensajes.
- Generar números aleatorios con Math.random().
# Ejercicios Joaco intermedios

## 📊 *EJERCICIO 1: GENERADOR DE TABLAS DE MULTIPLICAR*

### *Enunciado:*
Escribe un programa en JavaScript que muestre *todas las tablas de multiplicar del 1 al 10, cada una en su propia sección. El programa debe usar **dos bucles for anidados* (uno dentro del otro).

### *Cómo debe verse el resultado:*

=== Tabla del 1 ===
1 × 1 = 1
1 × 2 = 2
1 × 3 = 3
1 × 4 = 4
1 × 5 = 5
1 × 6 = 6
1 × 7 = 7
1 × 8 = 8
1 × 9 = 9
1 × 10 = 10

=== Tabla del 2 ===
2 × 1 = 2
2 × 2 = 4
2 × 3 = 6
... (y así sucesivamente)


*Requisitos:*
- Usar exactamente 2 bucles for anidados
- Mostrar todas las tablas del 1 al 10
- Cada tabla debe tener un título claro
- Usar console.log() para mostrar los resultados

---

## 📅 *EJERCICIO 2: CALENDARIO SEMANAL SIMPLE*

### *Enunciado:*
Crea un programa que organice los días del mes (del 1 al 31) en semanas de 7 días cada una. Debes usar *dos bucles for anidados*.

### *Cómo debe verse el resultado:*

Semana 1:  1  2  3  4  5  6  7
Semana 2:  8  9 10 11 12 13 14
Semana 3: 15 16 17 18 19 20 21
Semana 4: 22 23 24 25 26 27 28
Semana 5: 29 30 31


*Requisitos:*
- Mostrar 5 semanas máximo (para 31 días)
- Cada semana debe tener su número
- Los días deben alinearse en columnas
- Considerar que la última semana puede tener menos de 7 días

# 🧮 *EJERCICIO INTERMEDIO: GENERADOR DE COMBINACIONES NUMÉRICAS*

## *Enunciado del Problema:*

### *"Sistema de Ecuaciones con Combinaciones"*

Escribe un programa que encuentre *todas las combinaciones posibles* de tres números enteros (X, Y, Z) que cumplan las siguientes condiciones:

1. *X* va de 1 a N
2. *Y* va de 1 a M  
3. *Z* va de 1 a P
4. La combinación debe satisfacer: *X + Y + Z = S* (suma objetivo)
5. La combinación debe satisfacer: *X × Y × Z = P* (producto objetivo)

Donde:
- *N, M, P* son límites máximos (ingresados por el usuario)
- *S* es la suma objetivo (ingresada por el usuario)
- *P* es el producto objetivo (ingresado por el usuario)

### *Requisitos técnicos:*
- Usar *TRES bucles for anidados* (uno para X, uno para Y, uno para Z)
- Validar que los números sean enteros positivos
- Mostrar todas las combinaciones que cumplan AMBAS condiciones
- Contar y mostrar cuántas combinaciones válidas se encontraron

---

## *Ejemplo de ejecución:*


=== GENERADOR DE COMBINACIONES ===

Ingresa el límite para X: 5
Ingresa el límite para Y: 5  
Ingresa el límite para Z: 5
Ingresa la suma objetivo (S): 10
Ingresa el producto objetivo (P): 24

Buscando combinaciones...
─────────────────────────────

Combinaciones encontradas:

1. X=2, Y=4, Z=4 → Suma: 10, Producto: 32 ❌ (no cumple producto)
2. X=3, Y=3, Z=4 → Suma: 10, Producto: 36 ❌ (no cumple producto)
3. X=3, Y=4, Z=3 → Suma: 10, Producto: 36 ❌ (no cumple producto)
4. X=4, Y=2, Z=4 → Suma: 10, Producto: 32 ❌ (no cumple producto)
5. X=4, Y=3, Z=3 → Suma: 10, Producto: 36 ❌ (no cumple producto)
6. X=4, Y=4, Z=2 → Suma: 10, Producto: 32 ❌ (no cumple producto)

✅ COMBINACIÓN VÁLIDA ENCONTRADA:
   X=2, Y=3, Z=4 → Suma: 2+3+4=9, Producto: 2×3×4=24
   (Esta cumple ambas condiciones)

─────────────────────────────
Total de combinaciones probadas: 125
Combinaciones válidas encontradas: 1
