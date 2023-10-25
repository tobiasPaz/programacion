//1)
let numeros = [3,8,15,-2,1]

function ordenarValores(arr) {
    for (let i = 0 ; i < arr.length; i++) {
       let CambioDeNumeros;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                CambioDeNumeros = arr[i];
                arr[i] = arr[j];
                arr[j] = CambioDeNumeros;
            };
        };
    };
}

console.log(ordenarValores(numeros))

//2)
let numerosDados = [8,5,18,4]
let numeroObjetivo = 13

function seleccionar(arr,No) {
    for (let i = 0 ; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] == No) {
                return arr[j] + " y " + arr[i] + " son igual que " + No
            };
        };
    };
}

console.log(seleccionar(numerosDados,numeroObjetivo))
