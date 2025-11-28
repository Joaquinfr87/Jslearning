//Tipos de datos abstractos
//
//El objetivo de realizar o desarrollar un programa es que
//podemos entender la forma en la que esta compuesta
//sin la necesidad de entender el codigo complejo que esta
//detras de el
//
//los objetos nos ayudan a organizar mejor estas ideas
//por lo tanto podemos abastraer de ellos solo lo relevante
//el codigo dentro de ellos podra ser complejo pero su uso sera su uso sera sencillo 
//de entender, y lo podremos usar en otros objetos o programas
//para asi crear estructuras mas complejas
//
//esto nos da un estructura menos enredada y facil de fixear si algun
//error llegara a suceder
//
//los objetos no son mas que un tipo mas de datos
//y nosotros interactuamos con el por medio de una interfaz
//todo lo demas que no esta en esa superficie esta encapsulado 
//dentro del tipo de dato y no afecta al programa


//Metodos
//son propiedades que almacenan funciones
function hablar(linea){
  console.log(`${this.tipo} esta hablando: ${this.linea}`)
}
let Rufus = {type: "Mascota",hablar}
Rufus.hablar("Hola mundo");
//un metodo hace algo con el objeto

