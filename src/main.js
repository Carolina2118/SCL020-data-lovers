import { filterDatos, rick } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let rickDatos = data.results;
console.log(rickDatos);


const personajesName = document.getElementById("personajes");
personajesName.addEventListener("click", function(e) {
    // e.preventDefault();
    console.log("hola");

    rick(rickDatos);
});