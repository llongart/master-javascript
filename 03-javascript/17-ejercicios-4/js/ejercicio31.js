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

let btnCambiar = document.querySelector('#btnCambiar');
let luces = [...document.querySelectorAll('.luz')];

btnCambiar.addEventListener("click", () => {
    cambiarColorSemaforo();
});

function cambiarColorSemaforo(){
    // Define el orden en el que se dirige el encendido (rojo-amarillo-verde o verde-amarillo-rojo)
    if(luces[2].className.includes('encendido')){
        luces.reverse();
    }

    let indice = luces.findIndex(luz => luz.className.includes('encendido'))
    luces.forEach(luz => luz.classList.remove('encendido'));

    // Encender la luz siguiente a partir del indice anteriormente encendido
    // Cambio de rojo a verde / cambio de verde-amarillo-rojo
    luces[0].className.includes('rojo') ? luces[indice+2].classList.add('encendido') : luces[indice+1].classList.add('encendido');
}