let personas = [];

personas.push({
  nombre: "Pedro Garcia",
  genero: `Masculino`,
  edad: Math.ceil(Math.random() * 100),
  documento: Math.ceil(Math.random() * 100000000),
  mail: `@gmail.com`,
});
personas.push({
  nombre: "Luisana Lina",
  genero: `femenino`,
  edad: Math.ceil(Math.random() * 100),
  documento: Math.ceil(Math.random() * 100000000),
  mail: `@gmail.com`,
});

const cuerpo_tabla = document.querySelector(`#body-tabla`);
for (i = 0; i < personas.length; i++) {
  console.log(
    personas[i].nombre,
    personas[i].genero,
    personas[i].edad,
    personas[i].documento,
    personas[i].mail
  );
  cuerpo_tabla.innerHTML += `<tr>
<td>${personas[i].nombre}</td>
<td>${personas[i].genero}</td>
<td>${personas[i].edad}</td>
<td>${personas[i].documento}</td>
<td>${personas[i].mail}</td>
</tr>`;
}
