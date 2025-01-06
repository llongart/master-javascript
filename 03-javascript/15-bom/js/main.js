/* BOM - Browser Object Model

Es una interfaz de acceso a todos los objetos del navegador.

*/

// Alertas y dialogos
alert("Hola soy Luis y estoy aprendiendo JavaScript");
prompt("¿Que edad tienes?", 18);
confirm("¿Estas seguro de querer continuar?");

// Window
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth, window.outerHeight);
console.log(window.closed);
console.log(window.document);

// Navegador
console.log(window.navigator);
if(!navigator.onLine){
    console.log("No tienes conexión a internet");
}else{
    console.log("Estas conectado a internet");
}

// Redirecciones
// window.location.href = "https://victorroblesweb.es/ruta";
// location.reload();

//History - Ir para atras y adelante
history.back(numero_pagina);
history.forward(numero_pagina);

// Ventanas emergentes
let miWeb = window.open("https://victorroblesweb.es", "Ruta de aprendizaje de desarrollo web", "width=400, height=300, left=450, top=150");