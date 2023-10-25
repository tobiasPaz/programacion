//1)
let numero = Math.ceil(Math.random()*255)
console.log(numero)

function disibilidad(N){
    if ( N%2 == 0){
        console.log(`tu numero es divisible por 2` ) 
    }
    else if ( N%3 == 0){
        console.log(`tu numero es divisible por 3`) 
    }
     else if ( N%5 == 0){
        console.log(`tu numero es divisible por 5`) 
    }
    else if ( N%7 == 0){
        console.log(`tu numero es divisible por 7`) 
    }
    else {
        console.log(`tu numero no es divisible por 2, 3, 5 ni 7`) 
    }
}

console.log(disibilidad(numero))


//2)
function disibilidad2(N){
    if ( N%2 == 0){
        console.log(`tu numero es divisible por 2`) 
    }
    if ( N%3 == 0){
        console.log(`tu numero es divisible por 3`) 
    }
    if ( N%5 == 0){
        console.log(`tu numero es divisible por 5`) 
    }
    if ( N%7 == 0){
        console.log(`tu numero es divisible por 7`) 
    }
}

console.log(disibilidad2(numero))