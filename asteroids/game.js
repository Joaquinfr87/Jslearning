let canva = document.getElementById("juegoCanva");
let ctx = canva.getContext("2d");

const FPS = 30;
const SHIP_SIZE = 30; // pixeles altura
const TURN_SPEED = 360; // giro de la nave en grados por segundo
const SHIP_EMPUJE = 5; // aceleracion de la nave por pixeles por segundo por segundo 
const FRICCION = 0.7;// coeficiente de friccion

let ship = {
  x: canva.width / 2,
  y: canva.height / 2,
  r: SHIP_SIZE / 2,
  a: 90 / 180 * Math.PI,//conversion a radianes angulo de 90 grados
  rot: 0,
  empujando: false,
  empuje: {
    x: 0,
    y: 0
  }
}

let asteroides = [];


// manejadores de eventos
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

setInterval(update, 1000 / FPS); // 1000 significa 1 segundo y por lo tanto lo
// divide en 30 para tener la tasa de actualizacion de 30 veces por sengundo


function keyDown(e) {
  switch (e.keyCode) {
    case 37:// rotar nave a la izquierda
      ship.rot = TURN_SPEED / 180 * Math.PI / FPS;
      break;
    case 38:// empujede de la nave
      ship.empujando = true;
      break;
    case 39://rotar nave a la derecha
      ship.rot = -TURN_SPEED / 180 * Math.PI / FPS;
      break;
    case 40:
      break;
  }
}
function keyUp(e) {
  switch (e.keyCode) {
    case 37:// rotar nave a la izquierda
      ship.rot = 0;
      break;
    case 38:// no empuje
      ship.empujando = false;
      break;
    case 39://rotar nave a la derecha
      ship.rot = 0;
      break;
    case 40:
      break;
  }
}

function update() {
  //dibujo del espacio 
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canva.width, canva.height);

  //dibujo de la nave
  ctx.strokeStyle = "white";
  ctx.lineWidth = SHIP_SIZE / 20;
  ctx.beginPath();
  ctx.moveTo(//nariz de la nave
    ship.x + ship.r * Math.cos(ship.a),
    ship.y - ship.r * Math.sin(ship.a)
  );
  ctx.lineTo(
    ship.x - ship.r * (Math.cos(ship.a) + Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) - Math.cos(ship.a))
  );
  ctx.lineTo(
    ship.x - ship.r * (Math.cos(ship.a) - Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) + Math.cos(ship.a))
  );
  ctx.closePath();
  ctx.stroke();

  //rotacion de la nave
  ship.a += ship.rot;

  //empuje de la nave
  if (ship.empujando) {
    ship.empuje.x += SHIP_EMPUJE * Math.cos(ship.a) / FPS;
    ship.empuje.y -= SHIP_EMPUJE * Math.sin(ship.a) / FPS;
    // DIBUJAR EMPUJE DETRÁS DE LA NAVE
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = SHIP_SIZE / 20;

    // punto base izquierdo
    ctx.moveTo(
      ship.x - ship.r * (Math.cos(ship.a) - 0.3 * Math.sin(ship.a)),
      ship.y + ship.r * (Math.sin(ship.a) + 0.3 * Math.cos(ship.a))
    );

    // punto base derecho
    ctx.lineTo(
      ship.x - ship.r * (Math.cos(ship.a) + 0.3 * Math.sin(ship.a)),
      ship.y + ship.r * (Math.sin(ship.a) - 0.3 * Math.cos(ship.a))
    );

    // punta del fuego (más atrás)
    ctx.lineTo(
      ship.x - ship.r * 2 * Math.cos(ship.a),
      ship.y + ship.r * 2 * Math.sin(ship.a)
    );

    ctx.closePath();
    ctx.fill();
    ctx.stroke();


  } else {
    ship.empuje.x -= FRICCION * ship.empuje.x / FPS;
    ship.empuje.y -= FRICCION * ship.empuje.y / FPS;
  }

  //manejar el borde de la pantalla
  if (ship.x < 0 - ship.r) {
    ship.x = canva.width + ship.r;
  } else if (ship.x > canva.width + ship.r) {
    ship.x = 0 - ship.r;
  }
  if (ship.y < 0 - ship.r) {
    ship.y = canva.height + ship.r;
  } else if (ship.y > canva.height + ship.r) {
    ship.y = 0 - ship.r;
  }
  //movimientio de la nave
  ship.x += ship.empuje.x;
  ship.y += ship.empuje.y;
}
