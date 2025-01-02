// Crear un array
let gadgets = ["PC", "Laptop", "Tablet", "Smartphone", "Smartwatch"];

// LENGTH: Longitud
console.log(gadgets.length);

// PUSH: Añadir elementos a un array
gadgets.push("Mouse");
console.log(gadgets);

// POP: Eliminar ultimo elemento de un array
gadgets.pop();
console.log(gadgets);

// UNSHIFT: Agregar elementos al principio de un array
gadgets.unshift("Mouse");
console.log(gadgets);

// SHIFT: Eliminar el primer elemento de un array
gadgets.shift()
console.log(gadgets);

// INDEXOF: Obtener el índice de un elemento
// Cuando lo devuelvo es igual a -1 entonces
// el indice no existe.
console.log(gadgets.indexOf("Tablet"));

// INCLUDES: Verificar si un elemento existe
console.log(gadgets.includes("PC"));

// FILTER: Filtrar arrays
gadgets.push("PS4");
gadgets.push("PS5");
gadgets.push("Teclado");
gadgets.push("Monitor");

/*
let gadgets_con_a = gadgets.filter(gadget => {
    let resultado = false;
    if(gadget.includes("a")){
        resultado = true;
    }
    return resultado;
});
*/

// Esto anterior se puede resumir de la siguiente forma
let gadgets_con_a = gadgets.filter(gadget => gadget.includes("a"));
console.log(gadgets_con_a);

// REDUCE: Permite reducir un array a un solo valor, 
//ejecutando una función de izquiera a derecha en sus elementos
let reducir = gadgets.reduce((total, actual)=> total + ", " + actual);
console.log(reducir);

let reducir_2 = gadgets.reduce((total, actual, indice)=> {

    let capitalizarTotal = total;
    if(indice == 1){
        capitalizarTotal = total[0].toUpperCase() + total.slice(1).toLowerCase();
    }

    let capitalizarActual = actual[0].toUpperCase() + actual.slice(1).toLowerCase();

    return capitalizarTotal + ", " + capitalizarActual;
});
console.log(reducir_2);

let numeros = [1, 2, 3, 4];

let suma = numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual);
console.log(suma)

// SORT: Ordenar un array de manera Ascendente
console.log(gadgets.sort());

// REVERSE: Ordenar un array de manera inversa
console.log(gadgets.reverse());

// CONCAT: Combinar arrays
let union = gadgets.concat(numeros);
console.log(union)

// JOIN: Convertir en cadena
let etiquetas = gadgets.join(", ");
console.log(etiquetas);

// SLICE: Copiar porcion de un array
let misGadgetsFavoritos = gadgets.slice(3, 5);
console.log(misGadgetsFavoritos);

// FIND: Busqueda (Primer resultado que encuentre)
let buscar = gadgets.find(gadget => gadget.length > 5);
console.log(buscar);

// FINDINDEX: Busqueda que devuelve el indice del elemento
let buscarIndice = gadgets.findIndex(gadget => gadget.length > 7);
console.log(buscarIndice);

// SOME: Buscar si hay elementos que contentan una letra
let letrasE = gadgets.some(gadgets => gadgets.includes("e"));
console.log(letrasE);

// EVERY: Buscar si todos los elementos tienen una letra
let letrasA = gadgets.every(gadgets => gadgets.includes("a"));
console.log(letrasA);

// FLAT: Aplanar
let anios = [
    [1990, 1991, 1992],
    [2001, 2002, 2005],
    [2010, 2011, 2015, [2020, 2023, 2024, 2025, [2026, 2030, 2035]]]
];

let plana = anios.flat(3); // El parametro indica la cantidad de dimensiones quiero aplanar
console.log(plana); 

// COPYWITHIN: Copiar una secuencia de los elementos de un array a otra posicion sin cambiar el tamaño del array9
let fechas = ["01-01-1991", "01-01-1992", "01-01-1993", "01-01-1994", "01-01-1995"];
fechas.copyWithin(2, 3);
console.log(fechas);

// FROM: Convertir string en array
let nombre = "Luis";
let array_string = Array.from(nombre);
console.log(array_string);

// Desestructuración
let [uno, dos, tres] = [1, 2, 3];
console.log(uno);
console.log(dos);
console.log(tres);

let [actor, ...resto_de_actores] = ["Robert de niro", "Oscar Isaac", "Keanu Reeves"];
console.log(actor);
console.log(resto_de_actores);

// Expandir arrays
let array_1 = [1, 2, 3];
let array_2 = [4, 5, 6];
let array_completo = [...array_1, ...array_2];

// TOSTRING: De array a string
console.log(gadgets.toString());

// SPLIT: De string a array
let frase = "Bienvenido al curso de JavaScript más sencillo de entender";
let palabras = frase.split(" ");
console.log(palabras);

// JOIN: Pasar a seo slug
let slug = palabras.join("-").toLowerCase();
console.log(slug);