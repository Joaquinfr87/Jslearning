
# ✅ **Arrays**

### Inmutables

* `concat()`

```js
[1,2].concat([3,4]) // [1,2,3,4]
```

* `slice()`

```js
[10,20,30].slice(1) // [20,30]
```

* `includes()`

```js
[1,2,3].includes(2) // true
```

* `indexOf()`

```js
["a","b","c"].indexOf("b") // 1
```

* `join()`

```js
["a","b"].join("-") // "a-b"
```

* `flat()`

```js
[1,[2,[3]]].flat(2) // [1,2,3]
```

* `toSorted()`

```js
[3,1,2].toSorted() // [1,2,3]
```

* `toReversed()`

```js
[1,2,3].toReversed() // [3,2,1]
```

* `toSpliced()`

```js
[1,2,3].toSpliced(1,1) // [1,3]
```

* `with()`

```js
[1,2,3].with(1,9) // [1,9,3]
```

* `at()`

```js
[1,2,3].at(-1) // 3
```

* `from()`

```js
Array.from("hi") // ["h","i"]
```

* `isArray()`

```js
Array.isArray({}) // false
```

* `of()`

```js
Array.of(5,10) // [5,10]
```

### Mutables

* `push()`

```js
let a=[1]; a.push(2) // [1,2]
```

* `pop()`

```js
let a=[1,2]; a.pop() // [1]
```

* `shift()`

```js
let a=[1,2]; a.shift() // [2]
```

* `unshift()`

```js
let a=[2]; a.unshift(1) // [1,2]
```

* `splice()`

```js
let a=[1,2,3]; a.splice(1,1) // [1,3]
```

* `sort()`

```js
[3,1,2].sort() // [1,2,3]
```

* `reverse()`

```js
[1,2].reverse() // [2,1]
```

* `fill()`

```js
[1,2,3].fill(0) // [0,0,0]
```

* `copyWithin()`

```js
[1,2,3,4].copyWithin(1,3) // [1,4,3,4]
```

---

# ✅ **Strings**

### Búsqueda

* `includes()`

```js
"hola".includes("ho") // true
```

* `indexOf()`

```js
"banana".indexOf("na") // 2
```

* `startsWith()`

```js
"script".startsWith("scr") // true
```

* `endsWith()`

```js
"script".endsWith("pt") // true
```

### Transformación

* `slice()`

```js
"hola".slice(1) // "ola"
```

* `toLowerCase()`

```js
"Hi".toLowerCase() // "hi"
```

* `trim()`

```js
"  yo  ".trim() // "yo"
```

* `replace()`

```js
"azul".replace("a","A") // "Azul"
```

* `repeat()`

```js
"ha".repeat(3) // "hahaha"
```

* `concat()`

```js
"hola".concat(" mundo") // "hola mundo"
```

### División y caracteres

* `split()`

```js
"a,b,c".split(",") // ["a","b","c"]
```

* `charAt()`

```js
"hi".charAt(1) // "i"
```

* `at()`

```js
"hola".at(-1) // "a"
```

---
