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