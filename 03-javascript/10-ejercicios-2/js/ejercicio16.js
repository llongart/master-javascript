/*
Ejercicio 16:

Escribe un programa que muestre la tabla de multiplicar 
del número que introduzca el usuario.
*/

let tabla = "";
do{
    tabla = parseInt(prompt("Introduce la tabla de multiplicar"));
}while(isNaN(tabla))


console.log(`***** Tabla del ${tabla} *****`)
for(let i = 1; i <= 10; i++){
    console.log(`${tabla} x ${i} = ${tabla * i}`)
}