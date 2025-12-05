En JavaScript, los **valores "falsy"** son aquellos que se consideran `false` en un contexto booleano, como dentro de un `if`. Solo hay **7 valores falsy**:

1. `false` → el booleano falso.
2. `0` → el número cero.
3. `-0` → el cero negativo (sí, existe en JS).
4. `0n` → BigInt cero.
5. `""` → string vacío.
6. `null` → ausencia de valor.
7. `undefined` → valor no definido.
8. `NaN` → “Not a Number”.

Cualquier otro valor se considera **truthy** (verdadero), incluso `"false"` (string con texto) o `[]` (array vacío) o `{}` (objeto vacio).

pero cuando haces una comparacion === el resultado varia que el te diera con ==.
