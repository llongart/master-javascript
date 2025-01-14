/*
Ejercicio 31:

Crea un semáforo con tres luces (rojo, amarillo y verde)
Haz los circulos del semaforo con HTML y CSS

Cuando un peaton quiere cruzar la calle debe pulsar un botón.
Crea un botón para cambiar el color de las luces del semáforo
secuencialmente (de rojo a verde, pasando por amarillo).

Entonces, 
El semáforo siempre empieza en rojo.
Cuando haces click en el botón pasará a amarillo.
Al hacer click otra vez, pasa a verde, y así todo el rato.
*/

function cambiarColor() {
    // let semaforo = document.querySelector('#semaforo');
    // let rojo = document.querySelector('#rojo');
    // let amarillo = document.querySelector('#amarillo');
    // let verde = document.querySelector('#verde');

    switch (semaforo.className){
        case 'semaforo luz-roja':
            semaforo.className = 'semaforo luz-amarilla';
            rojo.classList.add('apagado');
            amarillo.classList.remove('apagado');
            break;
        case 'semaforo luz-amarilla':
            semaforo.className = 'semaforo luz-verde';
            amarillo.classList.add('apagado');
            verde.classList.remove('apagado');
            break;
        case 'semaforo luz-verde':
            semaforo.className = 'semaforo luz-verde-amarilla';
            verde.classList.add('apagado');
            amarillo.classList.remove('apagado');
            break;
        case 'semaforo luz-verde-amarilla':
            semaforo.className = 'semaforo luz-roja';
            amarillo.classList.add('apagado');
            rojo.classList.remove('apagado');
            break;            
    }

}
