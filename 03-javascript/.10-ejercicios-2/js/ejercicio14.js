/*
Ejercicio 14:

Un DJ no sabe que género musical poner en la fiesta...

Pregúntale al usuario que género quiere (pop, rock o rap)

Según lo que prefiera, devuelve un mensaje diferente.
*/

let respuesta = prompt("¿Qué género musical quieres escuchar? (pop, rock o rap)");

switch(respuesta){
    case "pop":
        mensaje = "Quiere escuchar Pop";
        break;

    case "rock":
        mensaje = "Quiere esuchar Rock";
        break;

    case "rap":
        mensaje = "Quiere escuchar Rap";
        break;
    
    default:
        mensaje = "No quiere escuchar música";
        break;  
}

alert(mensaje);