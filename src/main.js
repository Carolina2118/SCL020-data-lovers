import { filterDatos, recorregenero } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let rickDatos = data.results;
console.log(rickDatos);
/*Diseño del afiche e imagen */
const mostrarPersonajes = (personajes) => {
    personajes.forEach(e => {
        let perName = e.name
        let geMaleFemal = e.gender
        let imagen = e.image
        document.getElementById("root").innerHTML += `
   <h1 class="personaje">Personaje:${perName}</h1>
   <h2 class ="genero">Genero:${geMaleFemal}</h2>
   <img src ="${imagen}">
     `
    })
}

//namePersonajes(rickDatos);

/*la funciond el click en personaje*/
/****** funciona! *****/
const personajesName = document.getElementById("personajes");
personajesName.addEventListener("click", function() {
    //recorrePersonaje(rickDatos);
    mostrarPersonajes(rickDatos);
});
const generoMaleFemal = document.getElementById("genero");
generoMaleFemal.addEventListener("click", function(e) {


    // mostrarPersonajes(rickDatos);
});