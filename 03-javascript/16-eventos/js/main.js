// Eventos
// developer.mozilla.org/es/docs/Web/Events

// Eventos de ratón
let boton = document.querySelector("#boton");

boton.addEventListener("click", (event) => {
    alert("Has dado click en el botón");
    console.log(event)
});

let boton2 = document.querySelector("#botonDoble");

boton2.addEventListener("dblclick", (event) => {
    alert("Has dado doble click en el botón");
    console.log(event)
});

let boton3 = document.querySelector("#MouseOver");

boton3.addEventListener("mouseover", (event) => {
    console.log(event)
});

let boton4 = document.querySelector("#MouseOut");

boton4.addEventListener("mouseout", (event) => {
    console.log(event)
});

let boton5 = document.querySelector("#MouseMove");

boton5.addEventListener("mousemove", (event) => {
    console.log("Coordenadas del mouse: ", event.clientX, event.clientY);
    console.log(event)
});

// Eventos de teclado
let texto1 = document.querySelector("#KeyDown");

texto1.addEventListener("keydown", (event) => {
    console.log("Has presionado la tecla: ", event.key);
});

let texto2 = document.querySelector("#KeyPress");

texto2.addEventListener("keypress", (event) => {
    console.log("Has presionado la tecla: ", event.key);
});

let texto3 = document.querySelector("#KeyUp");

texto3.addEventListener("keyup", (event) => {
    console.log("Has presionado la tecla: ", event.key);
});

// Eventos de formulario
let formulario = document.querySelector("#formulario");

//Submit
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let genero = document.querySelector("#genero").value

    alert("Nombre: " + nombre + " Email: " + email + " Género: " + genero);

});

//Input
formulario.addEventListener("input", (event) => {
    console.log(event.target.value);
});

//Change
let genero = document.querySelector("#genero");

genero.addEventListener("change", (event) => {
    console.log(event.target.value);
});

//Focus
let email = document.querySelector("#email");

email.addEventListener("focus", (event) => {
    console.log("Estás dentro del campo de email");
});

//Blur
email.addEventListener("blur", (event) => {
    console.log("Estás fuera del campo de email");
})