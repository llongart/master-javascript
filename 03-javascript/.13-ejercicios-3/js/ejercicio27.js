/*
Ejercicio 27:

Crea un array de personajes de películas y
clasificalos en grupos (Héroes, villanos, etc.)

Muestra un mensaje para cada grupo.
*/

const personajes = ["H:John Wick", "V:Dart Vader", "H:Neo", "H:Aquíles", "V:Joker", "H:Batman"]

let heroes = personajes.filter(heroe => heroe.startsWith("H:"));
heroes = heroes.map(heroe => heroe.slice(2))
console.log(heroes)

let villanos = personajes.filter(villano => villano.startsWith("V:"));
villanos = villanos.map(villano => villano.slice(2))
console.log(villanos)