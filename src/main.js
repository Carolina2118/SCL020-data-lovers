import { filterDatos, recorrePersonaje, recorregenero } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let rickDatos = data.results;
console.log(rickDatos);
/*Diseño del afiche e imagen */
const namePersonajes = (personajes) => {
    personajes.forEach(e => {
        let perName = e.name
        let geMaleFemal = e.gender
        document.getElementById("root").innerHTML += `
   <h2 class="personaje">Personaje:${perName}</h2>
   <h3 class ="personaje">Genero:${geMaleFemal}</h3>
     `
    })
}

namePersonajes(rickDatos);

/*la funciond el click en personaje*/
/****** funciona! *****/
const personajesName = document.getElementById("personajes");
personajesName.addEventListener("click", function(e) {
    recorrePersonaje(rickDatos);
});
const generoMaleFemal = document.getElementById("genero");
generoMaleFemal.addEventListener("click", function(e) {
    recorregenero(rickDatos);
});