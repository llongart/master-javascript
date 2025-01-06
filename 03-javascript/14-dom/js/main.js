/* DOM - Documente Object Model

Es una interfaz de acceso a todos los objetos de un html. 
Permite interactuar con las etiquetas de una página.

*/

// getElementById
// Seleccionar un elemento del html por medio de su ID
let caja =  document.getElementById("caja");

// Modificar caracteristicas de un elemento seleccionado
caja.innerHTML = "<h2>Hola soy Luis</h2>";
caja.classList.add("cajita");
caja.classList.add("cajaza");
caja.classList.add("cajon");
// console.log(caja.className)

function cambiarColor(color, radio){
    caja.style.background = color;
    caja.style.borderRadius = radio;    
}

cambiarColor("lightcoral", "100px");
// console.log(caja.innerText);

// // getElementByClassName
// // Seleccionar multiples elementos con la misma clase
// let articulos = document.getElementsByClassName("articulo")
// for(let i = 0; i < articulos.length; i++){
//     articulos[i].classList.add("articuloBase");

//     // Añadir más HTML
//     articulos[i].innerHTML += "<a href='https://victorroblesweb.es/ruta'>Leer más</a>";

//     // Añadir un nodo del DOM
//     let enlace = document.createElement("a");
//     enlace.setAttribute("href", "https://victorroblesweb.es");
//     enlace.setAttribute("target", "_blank");
//     enlace.style.color = "green";

//     let textoEnlace = document.createTextNode("Sigue Leyendo");
//     enlace.append(textoEnlace);
//     articulos[i].append(enlace);

//     if(i === 0){
//         articulos[i].classList.add("articuloAmarillo");
//     }

//     if(i === (articulos.length - 1)){
//         articulos[i].classList.add("articuloUltimo");

//         articulos[i].innerHTML = "<h2>Sigue leyendo mas cosas acerca del curso</h2>";
//     }
// }

// // getElementByTagName
// // Seleccionar multiples elementos con el mismo nombre de etiqueta
// let etiquetasArticulo = document.getElementsByTagName("article");
// console.log(etiquetasArticulo);

// Recomendables:
// QuerySelector
// Seleccionar un elemento del HTML por medio de etiqueta/clase como se usa en css

// QuerySelector por medio de ID
let seccionArticulos = document.querySelector("#articulos");
// seccionArticulos.style.background = "lightblue";
seccionArticulos.style.padding = "40px";
// console.log(seccionArticulos);

// QuerySelector por medio de clase
let primerArticulo = document.querySelector(".articulo");
primerArticulo.style.borderRadius = "10px";
// console.log(primerArticulo);

// QuerySelectorAll
// Seleccionar todos los elementos del HTML por medio de etiqueta/clase como se usa en css
let articulos = document.querySelectorAll(".articulo");
// let articulos = document.querySelectorAll("article");
articulos.forEach((articulo, indice) => {
    articulo.classList.add("articuloBase");

    // Añadir más HTML
    articulo.innerHTML += "<a href='https://victorroblesweb.es/ruta'>Leer más</a>";

    // Añadir un nodo del DOM
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://victorroblesweb.es");
    enlace.setAttribute("target", "_blank");
    enlace.style.color = "green";

    let textoEnlace = document.createTextNode("Sigue Leyendo");
    enlace.append(textoEnlace);
    articulo.append(enlace);

    if(indice === 0){
        articulo.classList.add("articuloAmarillo");
    }

    if(indice === (articulos.length - 1)){
        articulo.classList.add("articuloUltimo");

        articulo.innerHTML = "<h2>Sigue leyendo mas cosas acerca del curso</h2>";
    }
});


// Modificación
const tarjeta = document.querySelector("#tarjeta");


tarjeta.textContent = "Nuevo contenido para la tarjeta";
tarjeta.innerHTML = "<strong>Contenido en HTML de mi tarjeta</strong>";
tarjeta.setAttribute("data-id", 12);
tarjeta.setAttribute("class", "hola que tal");
// console.log(tarjeta.getAttribute("data-id"));

tarjeta.style.border = "1px solid blue";
tarjeta.style.backgroundColor = "steelblue";
tarjeta.style.padding = "30px";
tarjeta.style.textAlign = "center";

tarjeta.classList.add("destacar");
tarjeta.classList.add("remarcado");
console.log(tarjeta);

tarjeta.classList.remove("destacar");
console.log(tarjeta);

tarjeta.classList.toggle("small"); // Si existe lo quita y viceversa
console.log(tarjeta);

// Crear elementos
const titular = document.createElement("h2");
titular.textContent = "Esta es la tarjeta";
tarjeta.insertBefore(titular, tarjeta.firstChild)
// tarjeta.append(titular);

// Eliminar elemento completo
// tarjeta.remove();

// tarjeta.querySelector("strong").remove();