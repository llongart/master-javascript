let frameworks = ["Angular", "React", "Vue", "Astro", "NodeJS", "Svelte", "SolidJS", "Qwik", "ExpressJS"];

// // Acceso manual
// console.log(frameworks[0]);
// console.log(frameworks[1]);
// console.log(frameworks[2]);
// console.log(frameworks[3]);

// Acceso con bucles
for(let i = 0; i < frameworks.length; i++){
    console.log(frameworks[i]);
}

// Mostrar en página
document.write("<h1>Listado de frameworks</h1>");
document.write("<ul>");
for(let i = 0; i < frameworks.length; i++){
    document.write("<li>"+frameworks[i]+"</li>");
}
document.write("</ul>");

// Bucles para recorrer arrays
console.log("************************************************");
let actores = ["Bruce Willis", "Sylvester Stallone", "Arnorld Swarzenegger", "Al Pacino", "Robert Deniro"];

console.log("* Listado de actores");

// Bucle for
console.log("----Bucle for");
for(let i = 0; i < actores.length; i++){
    console.log(actores[i]);
}

// Bucle For OF
console.log("----Bucle for of");
for(let actor of actores){
    console.log(actor);
}

// Bucle For IN
console.log("----Bucle for in");
for(let indice in actores){
    console.log(indice, actores[indice]);
}

// Bucle For Each
console.log("----Bucle for each: Un parámetro");
actores.forEach(actor => {
    console.log(actor);
});

console.log("----Bucle for each: Mas parámetros");
actores.forEach((actor, indice) => {
    console.log(indice, actor);
});

// Bucle map
console.log("----Bucle map");
let nuevos_actores = actores.map(actor => {
    console.log(actor);

    return actor + " - Hollywood";
});

console.log(nuevos_actores);