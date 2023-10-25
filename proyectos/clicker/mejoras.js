class Mejoras {
  constructor(nombre, precio, potencia, condicion, idEdificio) {
    this.nombre = nombre;
    this.precio = precio;
    this.potencia = potencia;
    this.condicion = condicion;
    this.idEdificio = idEdificio;
    this.comprado = false;
  }
}

let dataMejoras = [
  [
    {
      nombre: "Patitas Musculosas",
      precio: 100,
      potencia: 2,
      condicion: 15,
      idEdificio: -1,
    },
    {
      nombre: "Loca de los gatos",
      precio: 500,
      potencia: 2,
      condicion: 15,
      idEdificio: -1,
    },
  ],
  [
    {
      nombre: "Cajas XXL",
      precio: 100,
      potencia: 2,
      condicion: 10,
      idEdificio: 0,
    },
    {
      nombre: "Carton para rascar",
      precio: 1000,
      potencia: 2,
      condicion: 25,
      idEdificio: 0,
    },
  ],
  [
    {
      nombre: "Areneros mas grandes",
      precio: 1000,
      potencia: 2,
      condicion: 10,
      idEdificio: 1,
    },
    {
      nombre: "Arena para Gato VIP",
      precio: 6000,
      potencia: 2,
      condicion: 25,
      idEdificio: 1,
    },
  ],
  [
    {
      nombre: "Lasers automaticos",
      precio: 8000,
      potencia: 2,
      condicion: 10,
      idEdificio: 2,
    },
    {
      nombre: "Lasers mortales",
      precio: 60000,
      potencia: 2,
      condicion: 25,
      idEdificio: 2,
    },
  ],
  [
    {
      nombre: "Ratones de juguete automaticos",
      precio: 100000,
      potencia: 2,
      condicion: 10,
      idEdificio: 3,
    },
    {
      nombre: "Ratones reales...",
      precio: 800000,
      potencia: 2,
      condicion: 25,
      idEdificio: 3,
    },
  ],
  [
    {
      nombre: "",
      precio: 0,
      potencia: 2,
      condicion: 10,
      idEdificio: 4,
    },
    {
      nombre: "",
      precio: 0,
      potencia: 2,
      condicion: 25,
      idEdificio: 4,
    },
  ],
];

let mejoras = [];
