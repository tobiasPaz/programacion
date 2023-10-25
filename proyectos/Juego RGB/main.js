const titulo = document. querySelector("#colorDisplay")
const reiniciar = document.querySelector("#reiniciar")
const RGB = document.querySelector("#mensaje")
let cuadrados = document.querySelectorAll(".cuadrados")
let ganador = ""
let colores = [1,2,3,4,5,6]

colorear()

for (let i = 0; i < cuadrados.length; i++){
    cuadrados[i].addEventListener("click",function(){
        if (cuadrados[i].style.backgroundColor == ganador){
            titulo.textContent = "GANASTE!"
            for (let e = 0; e < cuadrados.length; e++){
                cuadrados[e].style.backgroundColor = ganador
            }
        }
        else {
            cuadrados[i].style.backgroundColor = "#232323"
        }
    })
}



reiniciar.addEventListener("click",function(){
    colorear()
})

function colorear(){
    for (let i = 0; i < 6; i++){
        colores[i] = ((`rgb(${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)}, ${Math.ceil(Math.random()*255)})`))
        cuadrados[i].style.background = colores[i] 
    }
    ganador = colores[Math.floor(Math.random()*5)]
    titulo.textContent = ganador
}