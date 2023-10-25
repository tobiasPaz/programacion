//1)

//HTML

/*<h1>Calcula tu salario gratis!</h1>
<p>por favor ingrese los datos necesarios</p>
<form>
    nombre<input type="text" value="" id="nombre-usuario"><br>
    apellido<input type="text" value="" id="apellido-usuario"><br>
    salario mensual<input type="number" value="" id="sueldo-mensual" required=""><br>
    <input type="submit" id="enviar">
</form>
<p id="resultado"></p>*/


//CSS

/*h1{
  text-align: center;
  margin-bottom: 0px;
  background-color: steelblue;
}

.presentacion{
  margin-top: 0px;
  background-color: steelblue;
}

p{
  text-align: center;
}

form{
  text-align: center;
}

.formulario{
  margin: 5px;
}*/


//JS

let nombreDelUsuario = document.querySelector(`#nombre-usuario`)
let apellidoDelUsuario = document.querySelector(`#apellido-usuario`)
let sueldoDelUsuario = document.querySelector(`#sueldo-mensual`)
let final = document.querySelector(`#resultado`)
let recibir = document.querySelector(`#enviar`)

recibir.addEventListener(`click`, function (evento) {
    evento.preventDefault();
    calcularSueldo()
})

function calcularSueldo(){
    let nombre = nombreDelUsuario.value
    let apellido = apellidoDelUsuario.value
    let sueldoM = sueldoDelUsuario.value

    let SSemanal = sueldoM / 4
    let SAnual = sueldoM * 12

    if (sueldoM <= 0 ){
        alert(`por favor, ingrese su sueldo mensual, y si no tiene ¿entonces para que esta aca?`)
    }
    else{
        final.textContent = `${nombre} ${apellido} su sueldo semanal es de ${SSemanal} y su sueldo anual es de ${SAnual} `
    }
}


//2)

//HTML

/*<body>
  <h1>INVIERTE YA Y CUMPLE TUS SUEÑOS!!</h1>
  <p>Porfavor complete el formulario y le diremos todo lo que puede ganar</p>
  <form>
    Inversion inicial<input type="number" value="" id="IN" required=""><br>
    tasa de interes anual<input type="number" value="" id="IA" required=""><br>
    años de inversion<input type="number" value="" id="AI" required=""><br>
    <input type="submit" id="enviar">
  </form>
  <p id="resultado"></p>
  <script type="text/javascript" src="pruebas.js"></script>
</body>
</html>*/ 


//JS

/*const capitalInicial = document.querySelector("#IN")
const interesAnual = document.querySelector("#IA")
const añosDeInversion = document.querySelector("#AI")

const resultado = document.querySelector("#resultado")

const recibir = document.querySelector("#enviar")

recibir.addEventListener("click", function(evento){
    evento.preventDefault();
    calcularInversion()
});

function calcularInversion(){
    let capital = Number(capitalInicial.value)
    let interes = Number(interesAnual.value)
    let años = Number(añosDeInversion.value)

    for(let i = 0; i < años; i++){
        let ayudante = capital * interes / 100
        capital = capital + ayudante
    }
    resultado.textContent = `Sus ganancias serian de $${capital} en ${años} años. Aproveche ya!!!`
}
*/