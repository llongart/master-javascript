/*
 Strings
*/

// LENGTH: Longitud
let nombre = "Luis Longart";
console.log(nombre.length);

// TOSTRING: Conversión a texto (CASTEO)
let numero = 1255;
numero.toString();

// TOUPPERCASE: Convertir texto a mayusculas
let texto = "texto en mayusculas";
console.log(texto.toUpperCase());

// TOLOWERCASE: Convertir texto a minúsculas
let texto2 = "TEXTO EN MINUSCULAS";
console.log(texto2.toLowerCase());

// CHARAT: Obtener caracter de una cadena
let texto3 = "Esta es una cadena de texto";
console.log(texto3.charAt(12));

// INCLUDES: Comprobar si una cadena tiene dentro otra
let cadena = "No soy el mejor, pero seguramente si seré al que mejor entiendas";

if(cadena.includes("seguramente")){
    console.log("La palabra existe dentro de la cadena");
}else{
    console.log("No existe la palabra dentro de la cadena");
}

// INDEXOF: Buscar la posicion inicial de una palabra
console.log(cadena.indexOf("seguramente"));

// SLICE y SUBSTRING: Extraer parte de un texto 
console.log("SLICE:", cadena.slice(22));
console.log("SLICE:", cadena.slice(22, 33));
console.log("SUBSTRING:", cadena.substring(-15)); // No funciona con indices negativos y el slice si
console.log("SUBSTRING:", cadena.substring(22, -1));

// REPLACE: reemplazar parte de un texto
console.log(cadena.replace("seguramente", "creo que"));

// REPLACEALL: reemplazar todas las ocurrencias de una palabra o un caracter en una cadena
let cadena2 = "Si, yo soy bueno programando, pero aparte de ser bueno programando, soy bueno debuggeando";
console.log(cadena2.replaceAll("programando", "jugando"));

// TRIM: eliminar espacios en blanco al principio y al final
let cadena3 = "               cadena de      texto    .   ";
console.log(cadena3.trim() + ":");

// SPLIT: separar cadena por partes
console.log(cadena2.split(","));

// Concatenar o unir cadenas de texto 
// cadena1 + " " + cadena2
// `${cadena1} ${cadena2}`
// CONCAT: 
let ciudad = "Guayana";
let pais = "Venezuela";

let frase_final = "Mi ciudad es "+ciudad+" y esta en "+pais;
console.log(frase_final);

frase_final = `Mi ciudad es ${ciudad} y esta en ${pais}`;
console.log(frase_final);

frase_final = "".concat("Mi ciudad es ", ciudad, " y esta en ", pais);
console.log(frase_final);

// STARTSWITH: Comienza por una palabra especifica
let frase_dos = "Bienvenido a mi nuevo curso de programación";
console.log(frase_dos.startsWith("Bienvenido"));

// ENDSWITH: Acaba por una palabra especifica
let frase_tres = "Bienvenido a mi nuevo curso de programación";
console.log(frase_tres.endsWith("programación"));

// REPEAT: Repetir palabras
let mensajito = "JavaScript mola mucho!! \n";
console.log(mensajito.repeat(10));

// SEARCH y MATCH: Buscar texto en una cadena
let cadena4 = "Si, yo soy bueno programando, pero aparte de ser bueno programando, soy bueno debuggeando";
console.log(cadena4.search("yo"));
console.log(cadena4.match("yo")); //Devuelve un array con la info de la palabra buscada, el indice y la frase
console.log(cadena4.match(/programando/g)) //Usarla de esta forma devuelve todas las posiciones de las ocurrencias de la palabra