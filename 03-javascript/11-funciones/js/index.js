/*
    Funciones

    function nombre_funcion(){
        ...
        return ...
    }

    Todas las funciones deben devolver algo
*/

function hola_mundo(){
    console.log("Hola mundo!");
}

hola_mundo()

/*
    Parametros obligatorios y parámetros opcionales

    -   Para hacer un parámetro opcional se debe asignar un valor por defecto en la definición de la función
        De lo contrario el parámetro sera obligatorio.

    function nombre_funcion(parametro_1 , parametro_2 = "Valor por defeto"){
        ...
        return ...
    }
*/

function mensaje(texto, emisor = null){
    let enviado_por = "";
    if(emisor != null)
        enviado_por = `enviado por: ${emisor}`;

    console.log(texto, enviado_por);
}

mensaje("Este es un mensaje");
mensaje("Este es un mensaje", "Luis Longart");

/* 
    Parámetros REST
        Son parámetros adicionales que se le pasan a una función cuando no se sabe 
        cuáles son esos parámetros que recibe la función exáctamente.

        Los parámetros REST se guardan en un Array.

    function nombre_funcion(parametro_1, parametro_2, ...parametro_rest){
        ...
        return ...
    }
*/

function mensaje(texto, emisor = null, ...parametros_rest){
    let enviado_por = "";
    if(emisor != null)
        enviado_por = `enviado por: ${emisor}`;

    console.log(texto, enviado_por);
    console.log(parametros_rest)
}

mensaje("Este es un mensaje", "Luis Longart", "Parametro adicional 1", "Parametro adicional 2", "Parametro adicional 3");

/*
    Operador SPREAD
        Permite desempaquetar los elementos de una array dentro de otro
*/

let numeros = [1, 2, 3, 4];

let misNumeros = [...numeros, 5, 6, 7, 8, 9, 10];

console.log(misNumeros);

function misPeliculas(peli1, peli2, ...resto_de_pelis){
    console.log(peli1);
    console.log(peli2);
    console.log(resto_de_pelis);
}

let misPelisFavoritas = ["Matrix", "Terminator"]
misPeliculas(...misPelisFavoritas, "Toy Story", "Spiderman", "Batman");

/*
    Funciones anónimas

    let variable = function(){
        ...
    };

    variable();

*/

const saludo = function(){
    console.log("Hola ¿Cómo estás?")
};

saludo();


// let veces = 0;

// setInterval(function(){
//     veces++;
//     console.log("Se ha ejecutado el timeout "+veces+" veces");
// }, 1000);

// setInterval(saludo, 1000);

// setInterval(function(){
//     saludo()
// }, 1000);


/* 
    Funciones de callback "Avanzadas"
*/

function restame(n1, n2, mostrar, multiplicarPorTres){
    let resta = n1 - n2;

    mostrar(resta);
    multiplicarPorTres(resta);

    return resta;
}

restame(20, 5, function(resultado){
    console.log(resultado);
},
function(resultado){
    console.log(resultado * 3);
});

/*
    Ambito de variables (Scope)

*/

let ruta = "llongart.com/ruta"

function mostrarRuta(){
    console.info(ruta);

    let nombre = "Luis Longart";
    console.log(nombre);
}

console.warn(ruta);
// console.info(nombre); // No se tiene acceso a esta variable fuera de la función
mostrarRuta();

/*
    Hoisting o elevación
*/

// Ejemplos con "var"
var coche = "Ferrari Enzo";

console.log(coche);  // Imprime el valor de la variable coche

// Ejemplo al reves

console.log(coche);  // Imprime el valor undefined. El hoisting hace que eleve la declaración de la variable pero no la asignación del valor
var coche = "Ferrari Enzo";

// Ejemplo con "let"

let moto = "ducati x1";

console.log(moto) // Imprime como normalmente

// Al reves

// console.log(moto2);
// let moto2 = "ducati x1"; // Para let y const no existe hoisting o elevación por lo tanto el programa daría un error al tratar de ejecutar esta linea

/*
    Funciones de flecha
*/

// Definicion
let nuevo_curso = () =>{
    console.log("Máster en JavaScript");
};

nuevo_curso();

// // Utilizar en un callback
// setTimeout(()=>{
//     console.log("Estoy usando una función de flecha")
// }, 1000);

