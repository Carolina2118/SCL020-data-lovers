import { recorregenero } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let rickDatos = data.results;
//console.log(rickDatos);


/*Diseño del afiche e imagen */
const mostrarPersonajes = (personajes) => {
    personajes.forEach(e => {
        let perName = e.name
        let geMaleFemal = e.gender
        let imagen = e.image
        document.getElementById("root").innerHTML += `
        <div class ="container">
            <img class ="imagen" src ="${imagen}">
            <div class="personaje">Personaje:${perName}</div>
            <div class ="genero">Genero:${geMaleFemal}</div>
            </div>
            `
    })
}

//namePersonajes(rickDatos);

/*la funciond el click en personaje*/
/****** funciona! *****/

const personajesName = document.getElementById("personajes");
personajesName.addEventListener("click", function() {
    document.getElementById("root").innerHTML = ""

    mostrarPersonajes(rickDatos);
});
/*se obtuvo el valor del selector */
const generoMaleFemal = document.getElementById("genero");

generoMaleFemal.addEventListener("change", function() {
    document.getElementById("root").innerHTML = ""

    let selecoption = generoMaleFemal.options[generoMaleFemal.selectedIndex].value;
    let restungener = recorregenero(rickDatos, selecoption);
    mostrarPersonajes(restungener);
    console.log(restungener);

});