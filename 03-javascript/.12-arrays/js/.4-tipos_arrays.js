// Arrays multidimensionales
console.log("********************************************");
let categorias = ["Lucha", "Deportes", "Acción"];
let titulos = ["Battlefield", "Tekken", "Formula 1"];

let videojuegos = [categorias, titulos];

console.log(videojuegos);
console.log(videojuegos[0][1]); // Deportes
console.log(videojuegos[1][2]); // Formula 1

// Arrays bidimensionales
console.log("********************************************");
let tabla = [
    ["Producto", "Cantidad", "Precio"],
    ["PC", 2, 350],
    ["Smartphone", 4, 127],
    ["Impresora", 10, 57]
];

console.table(tabla);
//console.log(tabla[2][0], tabla[2][2]); //Smartphone

document.write("<table border=1>");

tabla.forEach((fila, indexFila) => {

    document.write("<tr>");

    fila.forEach(elemento =>{    
        if(indexFila===0)
            document.write("<th>"+elemento+"</th>");
        else
            document.write("<td>"+elemento+"</td>");
    })

    document.write("</tr>");
});

document.write("</table>");

// Arrays tridimensionales
let cartaRestaurante = [
    ["Plato",       "Cantidad",     "Precio",       "Tamaño"],
    ["Menu Pizza",  2,              [8, 10, 15],    ["Pequeño", "Mediano", "Grande"]],
    ["Menu Burger", 4,              [10, 12, 17],   ["Pequeño", "Mediano", "Grande"]],
    ["Menu Paella", 10,             [14, 18, 25],   ["Pequeño", "Mediano", "Grande"]],
];

for(let menu of cartaRestaurante){
    console.log("------------------------")
    for(let elemento of menu){        
        

        if(Array.isArray(elemento)){
            for(let subElemento of elemento){
                console.log(subElemento);
            }
        }else
            console.log(elemento);
    }
}

for(let menu of cartaRestaurante){
    console.log("------------------------");

    console.log(menu);
    if(Array.isArray(menu[2]) && Array.isArray(menu[3])){
        console.log(menu[0]);

        for(let index in menu[2]){
            console.log(menu[3][index], menu[2][index], "euros");
        }
    }
}