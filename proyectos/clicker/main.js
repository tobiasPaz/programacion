const contPrincipal = document.querySelector("#contenedor-maximo");
const display = document.querySelector("#display");
const seguidor = document.querySelector("#ingresos-S");
const spamer = document.querySelector("#btn-inicial");

const paraMejoras = document.querySelector("#sector-mejoras");
const paraEdificios = document.querySelector("#edificios");
const paraAlertas = document.querySelector("#alertas");

const btnModalEstadisticas = document.querySelector("#btn-modal-estadisticas");
const btnModalImportar = document.querySelector("#btn-modal-importar");
const btnModalExportar = document.querySelector("#btn-modal-exportar");
const btnBorrarDatos = document.querySelector("#btn-borrar-datos");

const modalEstadisticas = document.querySelector("#modal-estadisticas");
const modalImportarPartida = document.querySelector("#modal-importar-partida");
const modalExportarPartida = document.querySelector("#modal-exportar-partida");

const txContadorTotal = document.querySelector("#total-contador");
const txTiempoPartida = document.querySelector("#tiempo-partida");
const txCantidadEdificios = document.querySelector("#edificios-cantidad");
const textAreaExportar = document.querySelector("#textarea-modal-exportar");
const textAreaImportar = document.querySelector("#textarea-modal-importar");

const btnCerrarEstadisticas = document.querySelector(
  "#btn-cerrar-estadisticas"
);
const btnCancelarImportar = document.querySelector("#btn-cancelar-importar");
const btnImportarDatos = document.querySelector("#btn-importar-datos");
const btnCancelarExportar = document.querySelector("#btn-cancelar-exportar");

const contenedorAnimacionClick = document.querySelector(
  ".contenedor-numero-click"
);

const FPS = 30;

let botonesEdificios = [];
let botonesMejoras = [];
let spanCostosEdificios = [];
let spanCostosMejoras = [];
let spanCantidadesEdificios = [];
let spanIngresosEdificios = [];
let timeOut;
let timeOut2;

let estadoDelJuego = {
  contador: 0,
  ganacias: 0,
  valorDeClick: 1,
  clicksHechos: 0,
  total: 0,
  tiempoActual: new Date(),
};

spamer.addEventListener("click", () => {
  estadoDelJuego.contador += estadoDelJuego.valorDeClick;
  estadoDelJuego.clicksHechos++;
  estadoDelJuego.total += estadoDelJuego.valorDeClick;
  animacionClick();
  actualizarJuego();
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === " ") {
    // evento.preventDefault();
    estadoDelJuego.contador += estadoDelJuego.valorDeClick;
    estadoDelJuego.clicksHechos++;
    estadoDelJuego.total += estadoDelJuego.valorDeClick;
    animacionClick();
    actualizarJuego();
  }
});

function cargarDataMejoras() {
  for (let i = 0; i < dataMejoras.length; i++) {
    for (let j = 0; j < dataMejoras[i].length; j++) {
      let { nombre, precio, potencia, condicion, idEdificio } =
        dataMejoras[i][j];
      mejoras.push(
        new Mejoras(nombre, precio, potencia, condicion, idEdificio)
      );
    }
  }
}

function cargarMejoras() {
  for (let i = 0; i < mejoras.length; i++) {
    paraMejoras.innerHTML += `<button class="btn-mejoras btn" style="display: none">NUEVA MEJORA!!<br> "${
      mejoras[i].nombre
    }"<br> <span class="costoMejoras">Costo:$${numberformat.formatShort(
      mejoras[i].precio
    )}</span><br>`;
  }
  botonesMejoras = document.querySelectorAll(".btn-mejoras");
  spanCostosMejoras = document.querySelectorAll(".costoMejoras");
  for (let i = 0; i < botonesMejoras.length; i++) {
    botonesMejoras[i].addEventListener("click", () => {
      comprarMejora(mejoras[i]);
    });
  }
}

function cargarEdificios() {
  for (let i = 0; i < edificios.length; i++) {
    paraEdificios.innerHTML += `<button class="btn-edificio btn texto" >${edificios[i].nombre}<br> <span class="edificio-ingresos">0</span><br><span class="costo">0</span><br> <span class="cantidad">0</span></button><br>`;
  }

  botonesEdificios = document.querySelectorAll(".btn-edificio");
  spanIngresosEdificios = document.querySelectorAll(".edificio-ingresos");
  spanCostosEdificios = document.querySelectorAll(".costo");
  spanCantidadesEdificios = document.querySelectorAll(".cantidad");

  for (let i = 0; i < botonesEdificios.length; i++) {
    botonesEdificios[i].addEventListener("click", () => {
      comprarEdificio(edificios[i]);
    });
  }
}

function comprarMejora(mejora) {
  if (estadoDelJuego.contador >= mejora.precio) {
    estadoDelJuego.contador -= mejora.precio;
    mejora.comprado = true;
    if (mejora.idEdificio >= 0) {
      edificios[mejora.idEdificio].ingresos *= mejora.potencia;
    } else if (mejora.idEdificio < 0) {
      estadoDelJuego.valorDeClick *= mejora.potencia;
    }
  }
}

function comprarEdificio(edificio) {
  if (timeOut) {
    clearTimeout(timeOut);
    clearTimeout(timeOut2);
  }

  if (estadoDelJuego.contador >= edificio.precio) {
    edificio.cantidad++;
    estadoDelJuego.contador -= edificio.precio;
    edificio.precio *= 1.15;
  } else {
    paraAlertas.classList.remove("esconder");
    paraAlertas.classList.remove("display-0");
    paraAlertas.classList.add("mostrar-alerta");
    paraAlertas.style.border = "1px solid red";
    paraAlertas.style.borderRadius = "0.30rem";
    paraAlertas.style.backgroundColor = "rgb(255,146,146)";
    paraAlertas.innerHTML = `Lo lamento, este edificio cuesta: $${numberformat.formatShort(
      edificio.precio.toFixed(2)
    )} 
Aun te faltan $${numberformat.formatShort(
      (edificio.precio - estadoDelJuego.contador).toFixed(2)
    )} monedas`;
    timeOut = setTimeout(() => {
      paraAlertas.classList.remove("mostrar-alerta");
      paraAlertas.classList.add("esconder");
      paraAlertas.style.transition = "0.25s";
    }, 5000);
    timeOut2 = setInterval(() => {
      paraAlertas.classList.add("display-0");
    }, 5500);
  }
}

function calcularIngresos() {
  let ingresos = 0;
  for (let i = 0; i < botonesEdificios.length; i++) {
    ingresos += edificios[i].ingresos * edificios[i].cantidad;
  }
  return ingresos;
}

cargarEdificios();
cargarDataMejoras();
cargarMejoras();
funcionModales();

function actualizarJuego() {
  txContadorTotal.textContent = `maximo alcanzado del contador: ${estadoDelJuego.total}`;
  spamer.textContent = ` inicial +${estadoDelJuego.valorDeClick}/click`;
  display.textContent = numberformat.formatShort(estadoDelJuego.contador, {
    sigfigs: 4,
  });
  seguidor.textContent = `ingresos por segundo: $${numberformat.formatShort(
    calcularIngresos().toFixed(2)
  )}/s`;
  for (let i = 0; i < botonesEdificios.length; i++) {
    spanCantidadesEdificios[
      i
    ].textContent = ` Cantidad:${edificios[i].cantidad}`;
    spanCostosEdificios[i].textContent = `precio:$${numberformat.formatShort(
      edificios[i].precio.toFixed(0)
    )} `;
    spanIngresosEdificios[
      i
    ].textContent = `ingreso:+$${edificios[i].ingresos}/s`;
  }

  for (let i = 0; i < mejoras.length; i++) {
    if (!mejoras[i].comprado) {
      if (mejoras[i].idEdificio >= 0) {
        if (edificios[mejoras[i].idEdificio].cantidad >= mejoras[i].condicion) {
          botonesMejoras[i].style.display = "block";
        }
      } else if (mejoras[i].idEdificio < 0) {
        if (estadoDelJuego.clicksHechos >= mejoras[i].condicion) {
          botonesMejoras[i].style.display = "block";
        }
      }
    } else {
      botonesMejoras[i].style.display = "none";
    }
  }
  document.querySelector(
    "title"
  ).textContent = `contador: ${numberformat.formatShort(
    estadoDelJuego.contador.toFixed(0)
  )}`;
}
function logicaDelJuego() {
  estadoDelJuego.contador += calcularIngresos() / FPS;
  actualizarJuego();
}
function gameLoop() {
  const tiempo = new Date();
  let delay = tiempo - estadoDelJuego.tiempoActual;

  while (delay >= 1000 / FPS) {
    delay -= 1000 / FPS;
    logicaDelJuego();
  }
  estadoDelJuego.tiempoActual = tiempo;
  setTimeout(gameLoop, 1000 / FPS);
}

function guardarDatos() {
  localStorage.setItem(
    "juego",
    JSON.stringify({ edificios, estadoDelJuego, mejoras })
  );
}

document.addEventListener("keydown", function (evento) {
  if (evento.ctrlKey && evento.key == "s") {
    evento.preventDefault();
    guardarDatos();
  }
});

function borrarDatos() {
  localStorage.removeItem("juego");
}

function exportarJuego() {
  return localStorage.juego;
}

function importarJuego(partida) {
  return localStorage.setItem("juego", partida);
}

function cargarJuego() {
  let juegoGuardado = JSON.parse(localStorage.juego);
  estadoDelJuego = juegoGuardado.estadoDelJuego;
  mejoras = juegoGuardado.mejoras;
  edificios = juegoGuardado.edificios;
  estadoDelJuego.tiempoActual = juegoGuardado.tiempoActual;
}

function funcionModales() {
  btnModalEstadisticas.addEventListener("click", () => {
    modalImportarPartida.classList.add("display-0");
    modalExportarPartida.classList.add("display-0");
    modalEstadisticas.classList.remove("display-0");
    contPrincipal.classList.add("oscurecer");
  });

  btnModalImportar.addEventListener("click", () => {
    modalEstadisticas.classList.add("display-0");
    modalExportarPartida.classList.add("display-0");
    modalImportarPartida.classList.remove("display-0");
    contPrincipal.classList.add("oscurecer");
  });

  btnModalExportar.addEventListener("click", () => {
    let partida = localStorage.juego;
    modalEstadisticas.classList.add("display-0");
    modalImportarPartida.classList.add("display-0");
    modalExportarPartida.classList.remove("display-0");
    textAreaExportar.textContent = encryptar(partida);
    contPrincipal.classList.add("oscurecer");
  });

  btnBorrarDatos.addEventListener("click", () => {
    borrarDatos();
    location.reload();
  });

  btnCerrarEstadisticas.addEventListener("click", () => {
    modalEstadisticas.classList.add("display-0");
    contPrincipal.classList.remove("oscurecer");
  });

  btnCancelarImportar.addEventListener("click", () => {
    modalImportarPartida.classList.add("display-0");
    contPrincipal.classList.remove("oscurecer");
  });

  btnImportarDatos.addEventListener("click", () => {
    let Juego;

    try {
      Juego = JSON.parse(
        desencryptar(textAreaImportar.value).toString(CryptoJS.enc.Utf8)
      );
    } catch (error) {
      textAreaImportar.value =
        "ERROR AL DESENCRIPTAR LOS DATOS DE LA PARTIDA. POR FAVOR INTENTE CON DATOS VALIDOS";
      console.log("nose");
    }

    if (Juego) {
      Juego = desencryptar(textAreaImportar.value);
      importarJuego(Juego);
      location.reload();
      modalImportarPartida.classList.add("display-0");
      contPrincipal.classList.remove("oscurecer");
    }
  });

  btnCancelarExportar.addEventListener("click", () => {
    modalExportarPartida.classList.add("display-0");
    contPrincipal.classList.remove("oscurecer");
  });
}

if (localStorage.juego) {
  cargarJuego();
}

setInterval(() => {
  guardarDatos();
  cargarJuego();
}, 60000);

function animacionClick() {
  let ubicacionBtn = spamer.getBoundingClientRect();
  let ubiX = ubicacionBtn.x;
  let ubiY = ubicacionBtn.y;
  ubiX += Math.random() * 80 - 80;
  ubiY += Math.random() * 80 - 40;
  let numeroHTML = `<span><b>+${estadoDelJuego.valorDeClick}</b></span>`;
  let nuevoElemento = document.createElement("div");
  nuevoElemento.classList.add("container-numero-click");
  nuevoElemento.classList.add("animacion-click");
  nuevoElemento.innerHTML = numeroHTML;
  nuevoElemento.style.position = "absolute";
  nuevoElemento.style.top = `${ubiY}px`;
  nuevoElemento.style.left = `${ubiX}px`;
  contenedorAnimacionClick.appendChild(nuevoElemento);

  setTimeout(function () {
    contenedorAnimacionClick.removeChild(contenedorAnimacionClick.firstChild);
  }, 1000);
}

let salt = "47411729361310s";
function encryptar(dato) {
  let encryptado = CryptoJS.AES.encrypt(dato, salt);
  return encryptado;
}
function desencryptar(dato) {
  let desencryptado;
  desencryptado = CryptoJS.AES.decrypt(dato, salt).toString(CryptoJS.enc.Utf8);
  return desencryptado;
}

gameLoop();
