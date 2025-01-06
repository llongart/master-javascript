/*
Ejercicio 24:

Crea un array con 10 número aleatorios del 1 al 100.
Luego, pide al usuario que adivine un número.

Si acierta, muestra un mensaje de celebración;
Si no, muestra el número correcto.
*/

let array_aleatorios = [];

// while(array_aleatorios.length < 10){
//     numero_aleatorio = Math.ceil(Math.random() * (100 - 1) + 1);
//     if (array_aleatorios.includes(numero_aleatorio) == false){
//         array_aleatorios.push(numero_aleatorio);                
//     }
// }

array_aleatorios = Array.from({length: 10}, () => Math.floor(Math.random() * (100 - 1) + 1));

let respuesta 
do{
    respuesta = parseInt(prompt("Introduce un número:"))
    if(isNaN(respuesta)){
        alert("Debe introducir un número válido.")
    }else{
        break;
    }
}while(true)

if (array_aleatorios.includes(respuesta)){
    alert("Felicidades has acertado")
}else{
    alert(`Incorrecto, los números eran: ${array_aleatorios}`)    
}
