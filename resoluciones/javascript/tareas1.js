//1)

let AñoDeNacimiento = Number(prompt(`en que año nacio?`,`0000`))
let FechaActual = 2023
confirm(`quiere que le digamos su edad?`)

function CalDeEdad(AdN,AC) {
    return AC - AdN
}

console.log(CalDeEdad(AñoDeNacimiento,FechaActual))


//2)
function SalarioAnual(SM) {
    return SM * 12
}

function salarioSemanal(SM) {
    return SM / 4
}

let SalarioMensual = number(prompt(`cual su salario mensual?`))

alert(`su salario anual es de: ` + SalarioAnual(SalarioMensual))
alert(`su salario semanal es de: ` + salarioSemanal(SalarioMensual))

console.log(SalarioAnual,salarioSemanal)