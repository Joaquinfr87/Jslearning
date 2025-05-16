//arrays
let numeros = [1,2,3,4];
let animales= ["araña","ballena","castor","delfin"];
//metodos
console.log(animales[1].toUpperCase());

//stack o pila
numeros.push(5);
numeros.push(6);
numeros.push(7);

console.log(numeros);
console.log(numeros.pop());
console.log(numeros);

//objects

let dia1 = {
 ardilla: false,
 eventos: ["trabajo","arbol tocado","pizaa","correr"]
};
console.log(dai1.ardilla);
console.log(dia1.wolf);
dia1.wolf=false;
console.log(dia1.wolf)

//objetos 
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
console.log(descriptions.work);
console.log(descriptions["touched tree"]);

//eliminar propiedades de un objeto
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

//object keys
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
console.log(Object.keys({edad:40,nombre:"Joaquin"}));
//-> "edad" "nombre"
let obj = {x: 0, y: 0, z: 2};

Object.keys(obj).forEach(key => {
  console.log(key + ": " + obj[key]);
});

let objectA = {a:1,b:2};
Object.assign(objectA,{b:3,c:4});
console.log(objectA);

//un binding de tipo array que contiene dentro objetos
journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* And so on... */
];

//CONCEPTO MUY IMPORTANTE ---------------------------------------------------------
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

//tomar en cuenta
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};

//SUPER EJEMPLO

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}