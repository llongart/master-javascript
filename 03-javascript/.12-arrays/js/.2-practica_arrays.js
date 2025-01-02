// Pedir un indice del array y si el elemento existe que muestre el nombre al usuario
let listado_nombres = ["Luis", "Alba", "Ivana", "Alana"];

let indice;
do{
    indice= parseInt(prompt("Indica un indice de algun nombre y te lo muestro"));
}while(isNaN(indice))

if(indice >= 0 && indice <= listado_nombres.length){
    console.log(listado_nombres[indice]);
}else{
    console.log("El indice no existe en el array");
}