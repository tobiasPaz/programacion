//1)
function medidorDelMayor(a,b) {
	if (a < b) {
		console.log(a)
	}
	else if (a == b) {
		console.log(`tus dos parametros son iguales`)
	}
	else {
		console.log(b)
	}
}

console.log(medidorDelMayor(15,1))


//2)
let primerValor1 = Number(prompt(`deme su primer valor`))
let segundoValor1 = Number(prompt(`deme su segundo valor`))
let tercerValor1 = Number(prompt(`deme su tercer valor`))
function elMayor(A,B,C){
    if(A > B & A > C){
        console.log(A)
    }
    else if(B > A & B > C){
        console.log(B)
    
    }
    else if(C > B & C > A){
        console.log(C)
    
    }
}

console.log(elMayor(primerValor1,segundoValor1,tercerValor1))


//3)
let primerValor = Number(prompt(`deme su primer valor`))
let segundoValor = Number(prompt(`deme su segundo valor`))
let tercerValor = Number(prompt(`deme su tercer valor`))
function deMenorAMayor(A,B,C){
    while(A == B || B == C ||A == C){
        alert(`ingrese de nuevo sus datos`)
        A = Number(prompt(`deme su primer valor`))
        B = Number(prompt(`deme su segundo valor`))
        C = Number(prompt(`deme su tercer valor`))
    }
    if(A > B & B > C){
        console.log(C,B,A)

        }
    else if(A > C & C > B){
        console.log(B,C,A)
    }
    else if(B > A & A > C){
        console.log(C,A,B)

    }
    else if(B > C & C > A){
        console.log(A,C,B)

    }
    else if(C > B & B > A){
        console.log(A,B,C)

    }
    else if(C > A & A > B){
        console.log(B,A,C)

    }

}

console.log(deMenorAMayor(primerValor,segundoValor,tercerValor))