/* Programa para insertar tarjetas de Bootstrap a mi html */

/* Recuperar los nodos del Html */

let nombre = document.getElementById("nombre").value;  /* traer nombre */
let edad = document.getElementById("edad").value; /* para traer */
let descripcion = document.getElementById("descripcion").value; /* para traer */
let email = document.getElementById("email").value; /* para traer */

/* Obtenemos el boton */

let boton = document.getElementById("boton"); /* traer boton */

/* Obtenemos el lugar */

let lugar = document.getElementById("contenido");

/* Crear la tarjeta usando bootstrap, la cual se insertarra en html */
let tarjeta =

`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${edad}</h6>
  <p class="card-text">${descripcion}</p>
  <a href="#" class="card-link">${email}</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;

/* Evento para que cuando se de click al boton "agregar tarjeta" se agrege  */
boton.addEventListener("click",agregarTarjeta);

/* Function */

function agregarTarjeta(){
    lugar.innerHTML += tarjeta;
}