/*
Ejercicio 6:

En mi tienda de videojuegos tenemos una oferta. Si compras un juego de 50 euros o más,
te hacemos un 20% de descuento. Si un cliente compra el Tekken 8 que cuesta 50 euros
¿En cuánto se le queda?
*/

let precio_tekken = 50
let descuento = 20

let precio_con_descuento = precio_tekken - (precio_tekken * descuento) / 100

let mensaje = `El cliente pagaría un total de ${precio_con_descuento}`

console.log(mensaje)