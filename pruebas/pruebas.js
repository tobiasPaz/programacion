const cuerpo_tabla = document.querySelector(`#body-tabla`);
const cuerpo_usuario = document.querySelector(`#info-usuario`);
let btnEliminar = [];
let btnInfo = [];

async function nose() {
  await fetch("http://localhost:3000/usuarios")
    .then((res) => {
      return res.json();
    })
    .then((dt) => {
      for (i = 0; i < dt.length; i++) {
        console.log(dt[i]._id, dt[i].nombre, dt[i].email, dt[i].password);
        cuerpo_tabla.innerHTML += `<tr>
      <td>${dt[i].nombre}</td>
      <td>${dt[i].apellido}</td>
      <td>${dt[i].dni}</td>
      <td><button class="btn-eliminar" value="${dt[i]._id}" >X</button></td>
      <td><button class="btn-info" value="${dt[i]._id}" >Inf</button></td>
      </tr>`;
      }
    });

  btnEliminar = document.querySelectorAll(".btn-eliminar");
  btnInfo = document.querySelectorAll(".btn-info");

  for (let i = 0; i < btnEliminar.length; i++) {
    btnEliminar[i].addEventListener("click", () => {
      fetch(`http://localhost:3000/usuarios/${btnEliminar[i].value}`, {
        method: "DELETE",
      }).then(() => {
        console.log(`${btnEliminar[i].value} eliminado`);
      });
      location.reload();
    });
  }

  for (let i = 0; i < btnInfo.length; i++) {
    btnInfo[i].addEventListener("click", () => {
      fetch(`http://localhost:3000/usuarios/${btnInfo[i].value}`)
        .then((res) => {
          return res.json();
        })
        .then((dt) => {
          cuerpo_usuario.innerHTML = ` <h1>Usuario: ${dt._id}</h1>
          <div>
            <input type="number" id="usuario-dni" value="${dt.dni}" disabled>
            <input type="text" id="usuario-nombre" value="${dt.nombre}" disabled>
            <input type="text" id="usuario-apellido" value="${dt.apellido}" disabled>
            <input type="date" id="usuario-fecha-nacimiento" value="${dt.fechaNacimiento}" disabled>
            <input type="text" id="usuario-genero" value="${dt.genero}" disabled>
            <input type="text" id="usuario-direccion" value="${dt.direccion}" disabled>
            <input type="numver" id="usuario-telefono" value="${dt.telefono}" disabled>
            <input type="email" id="usuario-email" value="${dt.email}" disabled>
            <input type="password" id="usuario-password" value="${dt.password}" disabled>
            <input type="number" id="usuario-edad" value="${dt.edad}" disabled>
            <button id="editar">Editar</button>
            <button id="reset">Reset</button>
            <button id="cancelar">Cancelar</button>
          </div>`;
        });
    });
  }
}

nose();

// ________________________________________________________________________________________________________________________________________________;

const inputDni = document.querySelector("#dni");
const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputGenero = document.querySelector("#genero");
const inputFecha = document.querySelector("#fecha-nacimiento");
const inputEdad = document.querySelector("#edad");
const inputDireccion = document.querySelector("#direccion");
const inputTelefono = document.querySelector("#telefono");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const recibir = document.querySelector("#enviar");

recibir.addEventListener("click", async (event) => {
  event.preventDefault();
  const Dni = inputDni.value;
  const Nombre = inputNombre.value;
  const Apellido = inputApellido.value;
  const Fecha = inputFecha.value;
  const Edad = inputEdad.value;
  const Genero = inputGenero.value;
  const Direccion = inputDireccion.value;
  const Telefono = inputTelefono.value;
  const Email = inputEmail.value;
  const Password = inputPassword.value;

  let Persona = {
    dni: Dni,
    nombre: Nombre,
    apellido: Apellido,
    edad: Edad,
    fechaNacimiento: Fecha,
    genero: Genero,
    direccion: Direccion,
    telefono: Telefono,
    email: Email,
    password: Password,
  };
  console.log(Persona);
  await fetch("http://localhost:3000/usuarios", {
    method: "POST",
    body: JSON.stringify(Persona),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(() => {
    console.log(`fue exitosamente enviada`);
  });
});
