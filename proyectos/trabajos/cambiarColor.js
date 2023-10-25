let button = document.querySelector("#boton");

button.addEventListener("click", function () {
  let primerValor = Math.ceil(Math.random() * 255);
  let segundoValor = Math.floor(Math.random() * 255) + 1;
  let tercerValor = Math.ceil(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${primerValor},${segundoValor},${tercerValor})`;
});
