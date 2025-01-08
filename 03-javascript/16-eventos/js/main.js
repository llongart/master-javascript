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

// Submit
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let genero = document.querySelector("#genero").value

    alert("Nombre: " + nombre + " Email: " + email + " Género: " + genero);

});

// Input
formulario.addEventListener("input", (event) => {
    console.log(event.target.value);
});

// Change
let genero = document.querySelector("#genero");

genero.addEventListener("change", (event) => {
    console.log(event.target.value);
});

// Focus (Entrar en el campo)
let email = document.querySelector("#email");

email.addEventListener("focus", (event) => {
    console.log("Estás dentro del campo de email");
    email.style.border = "2px solid lightblue";
    email.style.outline = "none";
});

// Blur (Salir del campo)
email.addEventListener("blur", (event) => {
    console.log("Estás fuera del campo de email");
    email.style.border = "2px solid gray";
    email.style.boderRadius = "5px";
})

// Eventos del documento y la ventana
document.addEventListener("DOMContentLoaded", () => {
    // Aqui hago todo mi código de js

    console.log("TODO EL DOM HA SIDO CARGADO");
});

window.addEventListener("load", () => {
    // Aqui hago todo mi código de js

    console.log("TODO EL DOM Y LOS RECURSOS HAN SIDO CARGADOS");
});

window.addEventListener("resize", () => {
    console.log("La ventana ha cambiado de tamaño");
});

window.addEventListener("scroll", () => {    
    console.log("Has hecho scroll en la página");
});

// Eventos del portapapeles
let campo = document.querySelector("#portapapeles");

// Si uso el event.preventDefault() no me deja copiar, cortar o pegar o hacer click derecho
// campo.addEventListener("copy", (event) => { 
//     console.log("Has copiado el texto");
//     navigator.clipboard.writeText(""); // Limpia el portapapeles y hace que no se pueda copiar nada
// });

campo.addEventListener("cut", (event) => {
    console.log("Has cortado el texto");
});

campo.addEventListener("paste", (event) => {
    console.log("Has pegado el texto");
});

campo.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("Has hecho click derecho");
});

// Eliminar eventos
function copiar(){
    console.log("Has copiado el texto");
}
boton.removeEventListener("click", copiar);

// Propagación de eventos

let cajaPadre = document.querySelector("#cajaPadre");
let botonHijo = document.querySelector("#botonHijo");

cajaPadre.addEventListener("click", () => {
    console.log("Has hecho click en la caja padre");
});

botonHijo.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Has hecho click en el botón hijo");
});
