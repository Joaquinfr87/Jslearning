let matriz = [
  [0, 1, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1]
]
let condicion = 3;


function tresEnRaya(matriz, condicion, s) {
  let x = 0;
  let direccion = 0;
  //0 horizontal 
  //1 diagonal
  //2 vertical
  //3 diagonal invertido

  return function movimiento(i, j) {
    if (i < 0 && j < 0) return
    // console.log(matriz[i][j], " ", s);
    if (matriz[i][j] != s) return
    x++;
    // console.log(x);
    if (x == condicion) return true
    // console.log("todas las condiciones fueron pasadas");
    if (direccion == 0) {
      if (movimiento(i, j + 1) === undefined) {

        x = 1;
        direccion++;
      } return true
    }
    if (direccion == 1) {
      if (movimiento(i + 1, j + 1) === undefined) {
        x = 1;
        direccion++;
      }
      return true
    }
    if (direccion == 2) {
      if (movimiento(i + 1, j) === undefined) {
        x = 1;
        direccion++;
      }
      return true
    }
    if (direccion == 3) {
      if (movimiento(i + 1, j - 1) === undefined) {
        x = 1;
        direccion = 0;
      }
      return true
    }
  }
}

let tres = tresEnRaya(matriz, condicion, 1);
let victoria;
aca: for(let i=0;i<4;i++){
  for(let j=0;j<4;j++){
    console.log(i," ",j)
    if(tres(i,j)){console.log(true);break aca;}
  }
}

console.log(victoria);

