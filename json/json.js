// JSON javascript object notation 
// es la sintaxiss de los objetos de javascript, representa una estructura de datos 
// como un string es cual es muy usado para transmitir datos por la web
// En javascript la forma de parsear y generar JSON esta dada por medio del 
// objeto JSON

//JSON object
//es un objeto global que nos da metodos para trabajaron con json 
//no puedes usar new todo es estatico 
//PARSE
let superheroes = JSON.parse(`{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`,(key,value)=>{
    if(!isNaN(value)){
      return value * 2;
    }
    if(key == "name"){
      return "Sin Nombre"
    }
    if(key=="secretIdentity"){
      return undefined
    }
    return value
  })
//stringlify

console.log( JSON.stringify(superheroes,(key,value)=>{
  if(key == "homeTown" || key== "formed" || key=="secretBase"||key=="active") return undefined
  return value
}) )
