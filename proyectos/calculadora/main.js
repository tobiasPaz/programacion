let botonesNumeros = document.querySelectorAll(".btn-numeros");
let botonesOperandos = document.querySelectorAll(".btn-operadores");
let botonIgual = document.querySelector("#btn-igual");
let botonBorrrar = document.querySelector("#btn-borrar");
let calculadoraDisplay = document.querySelector("#resultado");

let estadoCalcualdora = {
  numero1: ``,
  numero2: ``,
  display: ``,
  operando: false,
};

let operaciones = {
  suma: function (num1, num2) {
    return num1 + num2;
  },
  resta: function (num1, num2) {
    return num1 - num2;
  },
  multiplicacion: function (num1, num2) {
    return num1 * num2;
  },
  division: function (num1, num2) {
    return num1 / num2;
  },
};

for (let i = 0; i < botonesNumeros.length; i++) {
  botonesNumeros[i].addEventListener("click", function () {
    if (!estadoCalcualdora.operando) {
      estadoCalcualdora.numero1 += botonesNumeros[i].textContent;
    } else {
      estadoCalcualdora.numero2 += botonesNumeros[i].textContent;
    }
    estadoCalcualdora.display += botonesNumeros[i].textContent;
    actulizarDisplay();
  });
}

for (let i = 0; i < botonesOperandos.length; i++) {
  botonesOperandos[i].addEventListener("click", function () {
    if (estadoCalcualdora.operando) {
      resolverEcuacion();
      estadoCalcualdora.display += botonesOperandos[i].textContent;
      estadoCalcualdora.operando = true;
    } else {
      estadoCalcualdora.display += botonesOperandos[i].textContent;
      estadoCalcualdora.operando = true;
      actulizarDisplay();
    }
  });
}

botonIgual.addEventListener("click", function () {
  if (estadoCalcualdora.operando) {
    resolverEcuacion();
  }
});

function resolverEcuacion() {
  let { numero1, numero2, display } = estadoCalcualdora;
  if (estadoCalcualdora.numero2 == "") {
    estadoCalcualdora.display = estadoCalcualdora.numero1;
  } else {
    if (display.includes("+")) {
      estadoCalcualdora.numero1 = String(
        operaciones.suma(Number(numero1), Number(numero2))
      );
    } else if (display.includes("-")) {
      estadoCalcualdora.numero1 = String(
        operaciones.resta(Number(numero1), Number(numero2))
      );
    } else if (display.includes("*")) {
      estadoCalcualdora.numero1 = String(
        operaciones.multiplicacion(Number(numero1), Number(numero2))
      );
    } else if (display.includes("/")) {
      estadoCalcualdora.numero1 = String(
        operaciones.division(Number(numero1), Number(numero2))
      );
    }
  }
  estadoCalcualdora.display = estadoCalcualdora.numero1;
  estadoCalcualdora.numero2 = "";
  estadoCalcualdora.operando = false;
  actulizarDisplay();
}

function actulizarDisplay() {
  calculadoraDisplay.textContent = estadoCalcualdora.display;
}
