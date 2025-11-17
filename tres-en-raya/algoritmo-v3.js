// let matriz = [
//   [1, 1, 1, 1],
//   [0, 0, 0, 1],
//   [0, 0, 0, 1],
//   [0, 0, 0, 1]
// ]
// let condicion = 3;
//
export class TresEnRaya {
  constructor(matriz, condicion) {
    this.condicion = condicion;
    this.matriz = matriz;
  }
  evaluado;

  crearEvaluarEnSentido = (n, m) => {
    let evaluado = this.evaluado;
    let matriz = this.matriz
    return function evaluar(i, j) {
      if (i < 0 || j < 0 || i > matriz.length - 1 || j > matriz.length - 1) return 0;
      if (matriz[i][j] != evaluado) return 0;
      return 1 + evaluar(i + n, j + m);
    }
  } 
  // la fucntion arrow no generar la recursividad en un closure
  evaluarEnDireccion = (i, j, n, m) => {
    let evaluarEnSentido = this.crearEvaluarEnSentido(n, m);
    let evaluarEnSentidoContrario = this.crearEvaluarEnSentido(-n, -m);
    return evaluarEnSentido(i, j) + evaluarEnSentidoContrario(i, j) - 1;
  }
  evaluarCelda(i, j) {
    let condicion = this.condicion
    if (this.evaluarEnDireccion(i, j, 0, 1) >= condicion) return true
    if (this.evaluarEnDireccion(i, j, 1, 1) >= condicion) return true
    if (this.evaluarEnDireccion(i, j, 1, 0) >= condicion) return true
    if (this.evaluarEnDireccion(i, j, -1, 1) >= condicion) return true
  }
  evaluarJugador(jug) {
    this.evaluado = jug;
    return (i, j) => {
      return this.evaluarCelda(i, j);
    }
  }
}
// let juego1 = new TresEnRaya(matriz);
// let evaluarJug1 = juego1.evaluarJugador(1);
