//2)
let documentoUsuario = prompt(`tenes documento?`,`si/no`)

if (documentoUsuario == "si"){
    let edadUsuario = Number(prompt("cual es tu edad?"))
    if(edadUsuario >= 18){
        console.log(`podes pasar`)
    }
    else {
        console.log(`no podes pasar`)
    }
}
else if(documentoUsuario == `no`){
    console.log(`no podes pasar`)
}
else {
    console.log(`no te entendi un culo amigo`)
}


//3)
let primerValor1 = Math.ceil(Math.random()*255)
let segundoValor1 = Math.floor(Math.random()*255)+1

function calcularPorcetajeAumento(a,b){
     return ((a - b) / a) * 100
}

console.log(calcularPorcetajeAumento(primerValor,segundoValor))


//4)
let primerValor = Math.ceil(Math.random()*255)
let segundoValor = Math.floor(Math.random()*255)+1

function calcularPorcetajeDiferencia(a,b){
    return ((a - b) / ((a + b) / 2)) * 100
}

console.log(calcularPorcetajeDiferencia(primerValor,segundoValor))