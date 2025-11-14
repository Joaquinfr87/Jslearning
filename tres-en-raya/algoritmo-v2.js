let matriz = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 0, 0, 1]
]
let condicion = 3;

let evaluarJugador = (s) => {
  return evaluarCelda = (i, j) => {
    let condiciones = () => {
      if (i < 0 || j < 0) return
      if (matriz[i][j] != s) return
      return true
    }
    let evaluarDireccion = (i,j,n,m)=>{
      let evaluarSentido = (i,j,x=0)=>{
        if(!condiciones)return x;
        x++;
        return evaluarSentido(i+n,j+m,x)
      }
      let x = evaluarSentido(i,j)
      n*=-1;
      m*=-1;
      x+=evaluarSentido(i,j)
      return x;
    }



    if(condiciones)return

    return evaluarCelda(i, j + 1)

  }
}

let EvaluarJugador1 = evaluarJugador(1);
console.log(EvaluarJugador1(0, 0));


