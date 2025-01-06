/*
Ejercicio 1:

    Calcula cuántas horas le llevaria llegar a la luna a una nave espacial y
    guarda el resultado en una variable.

    La distancia desde la tierra hasta la luna es de 384.400 kilómetros.

    La velocidad de la nave es de 1225 km/h.
*/

const distancia_luna = 384400;
let velocidad_nave = 1225;
let horas = distancia_luna / velocidad_nave;

/*
   t = d / v
*/
console.log("La nave espacial tardaría", Math.ceil(horas), "horas en llegar a la luna");


