//1)

let primerValor;
let segundoValor;
let tercerValor;
function deMenorAMayor(A, B, C) {
  let primerValor = Number(prompt(`deme su primer valor`));
  let segundoValor = Number(prompt(`deme su segundo valor`));
  let tercerValor = Number(prompt(`deme su tercer valor`));

  // while
  while (A == B || B == C || A == C) {
    alert(`ingrese de nuevo sus datos`);
    A = Number(prompt(`deme su primer valor`));
    B = Number(prompt(`deme su segundo valor`));
    C = Number(prompt(`deme su tercer valor`));
  }

  // funcion recursiva
  if (A == B || B == C || A == C) {
    deMenorAMayor();
  }

  if ((A > B) & (B > C)) {
    console.log(C, B, A);
  } else if ((A > C) & (C > B)) {
    console.log(B, C, A);
  } else if ((B > A) & (A > C)) {
    console.log(C, A, B);
  } else if ((B > C) & (C > A)) {
    console.log(A, C, B);
  } else if ((C > B) & (B > A)) {
    console.log(A, B, C);
  } else if ((C > A) & (A > B)) {
    console.log(B, A, C);
  }
}

console.log(deMenorAMayor(primerValor, segundoValor, tercerValor));

//2)
let numeros1 = [10, 20, 5];

function sumatoria(arr) {
  let auxiliar = 0;
  for (let i = 1; i < arr.length; i++) {
    auxiliar += arr[i];
  }
  return auxiliar;
}

console.log(sumatoria(numeros1));

//3)
let numeros = [6, 3, 10];
function promediar(arr) {
  let auxiliar = 0;
  for (let i = 0; i < arr.length; i++) {
    auxiliar += arr[i];
  }
  let resultado = auxiliar / numeros.length;
  return resultado;
}

console.log(promediar(numeros));
