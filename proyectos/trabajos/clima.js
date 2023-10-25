let seleccionar = document.querySelector("select");
let parrafo = document.querySelector("p");

seleccionar.addEventListener("change", establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === "soleado") {
    parrafo.textContent =
      "El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.";
  } else if (eleccion === "lluvioso") {
    parrafo.textContent =
      "Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.";
  } else if (eleccion === "nevando") {
    parrafo.textContent =
      "Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.";
  } else if (eleccion === "nublado") {
    parrafo.textContent =
      "No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.";
  } else {
    parrafo.textContent = "";
  }
}

switch (choice) {
  case "sunny":
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    break;
  case "rainy":
    para.textContent =
      "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
    break;
  case "snowing":
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    break;
  case "overcast":
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    break;
  default:
    para.textContent = "";
}
