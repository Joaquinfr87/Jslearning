//Vector type
class Vec{
  // u;
  // esta es otra propiedad
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  plus(vec){
    return new Vec(this.x+vec.x,this.y+vec.y)
    // this.x+=vec.x;
    // this.y+=vec.y;
    // return this devolverla un objeto que solo tendra las propiedades creadas en el constructor x, y
    
  }
  minus(vec){
    return new Vec(this.x-vec.x,this.y-vec.y)
    // this.x-=vec.x;
    // this.y-=vec.y;
    // return this
  }
  get length(){// este en un getter y no una propiedad
    let x = this.x
    let y = this.y
    return Math.sqrt(x*x+y*y);
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5



//GROUPS y ITERABLE GROUPS
//creare una estrucutra de datos parecidad a las listas enlanzadas
class Nodo{
  constructor(valor,rest){
    this.valor=valor;
    this.rest=rest;
  }
}
class Group{
  inicio;
  final;
  add(n){
    if(!this.inicio){
      this.final = new Nodo(n,null);
      this.inicio = this.final
    }else{
      if(this.has(n))return console.log("El elemento existe")
      this.final.rest = new Nodo(n,null)
      this.final=this.final.rest
    }
  };
  find(n,nodo=this.inicio){
    if(!nodo) return nodo
    if(nodo.valor==n) return nodo
    return this.find(n,nodo.rest)// se debe poner this. incluso para los metodos
  };
  findAnterior(n,nodo=this.inicio){
    if(!nodo.rest) return nodo.rest
    if(nodo.rest.valor==n) return nodo;
    return this.findAnterior(n,nodo.rest)
  };
  has(n){
    return (!!(this.find(n)))
  };
  delete(n){
    if(!this.has(n)) return console.log("El elemento no existe")
    // en javascript las variables no almacena valores (con excepciones con de los primitivos)
    // solo almacena la direccion o referencia del objeto
    let nodo = this.findAnterior(n)
    if(!nodo.rest.rest){
      nodo.rest = null;
      return
    }
    nodo.rest = nodo.rest.rest
    // para este caso las referencias son las que debe cambiar es decir let nodo = this.final y 
    // hago que nodo = null, esto no eliminar el enlace que hay entro los nodos solo hara un null
    // para la varialbe que recien cree, por eso la razon de buscar el anterior
  };
  indexOf(n,nodo = this.inicio,contador=0){
    if(!nodo)return contador
    if(nodo.valor==n) return contador
    contador++
    return this.indexOf(n,nodo.rest,contador)
  }

  [Symbol.iterator](){// este objeto se itera asi mismo por lo tanto debemos darle la forma
    //de pasar a otros valores y detenerse
    return{
      nodo: this.inicio,
      next:function(){// no se puede usar
        // funciones arrow por que no captura el valor de this, toma this como si
        // fuera de la clase group
        if(!this.nodo){
          return {done: true}
        }
        let value = this.nodo.valor;
        this.nodo = this.nodo.rest;
        return{value,done:false}
      }
    }
  };
  // podemos crear nuestras propias propiedades de funciones de alto orden
  map(funcion){
    let grupoModificado = new Group;
    for(let e of this){
       grupoModificado.add(funcion(e))
    }
    return grupoModificado;
  }; 
  reduce(funcion,inicial=0){
    let reducido=inicial;
    for(let e of this){
      reducido=funcion(reducido,e);
    }
    return reducido;
  }
  get length(){
    return this.indexOf(this.final.valor)
  }
  
}
const grupo = new Group();
grupo.add(1);
grupo.add(2);
grupo.add(3);
grupo.add(4);
grupo.add(5);
grupo.add(6);
grupo.add(7);
console.log(grupo)
for(let e of grupo){
  console.log(e)}
console.log( grupo.has(8))
console.log(grupo.find(4))
console.log(grupo.findAnterior(4))
grupo.delete(8)
grupo.delete(4)
grupo.delete(7)
for(let e of grupo){
  console.log(e)}
console.log(grupo.map(a=>a*2));
console.log(grupo.reduce((a,b)=>a+b))
grupo.add(1);
grupo.indexOf(6);
