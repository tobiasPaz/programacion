let numeros1 = [2, 4, 3, 1];

function ordenarValores(arr) {
  for (let i = 0; i < arr.length; i++) {
    let CambioDeNumeros;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        CambioDeNumeros = arr[i];
        arr[i] = arr[j];
        arr[j] = CambioDeNumeros;
      }
    }
  }
}

var numeros2 = [5, 6, 2, 8];
for (i = 0; i < 5; i++) {
  var x = Math.ceil(Math.random() * 10);
  numeros2.push(x);
}
numeros2.sort(function (a, b) {
  return a - b;
});
console.log(numeros2);
