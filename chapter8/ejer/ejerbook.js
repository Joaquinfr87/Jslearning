//1
class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {

  try {
    let c = primitiveMultiply(a, b);
    return c;
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) { return reliableMultiply(a, b) }
  }
}

console.log(reliableMultiply(8, 8));
// → 64



//2
const box = new class {
  // al instanciar con new y crear la clase al mismo tiempo, noa seguramos que no vaya a ver otro box 
  // en todo el codigo este sera unico
  locked = false;
  #content = [];

  unlock() { this.locked = false; }
  lock() { this.locked = true; }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
};

function withBoxUnlocked(body) {
  if(box.locked) return box.unlock();
  try{
    return body();
  }
  finally{
  if(!box.locked) return box.lock();
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
