import { recorregenero, recorreespecie } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

let rickDatos = data.results;
//console.log(rickDatos);


/*Diseño del afiche e imagen */
const mostrarPersonajes = (personajes) => {
    personajes.forEach(e => {
        let perName = e.name
        let geMaleFemal = e.gender
        let espAlienHumano = e.species
        let imagen = e.image
        document.getElementById("root").innerHTML += `
        <div class ="container">
            <img class ="imagen" src ="${imagen}">
            <div class="personaje">Personaje:${perName}</div>
            <div class ="genero">Genero:${geMaleFemal}</div>
            <div class ="especie">Specie:${espAlienHumano}</div>

            </div>
            `
    })
}

/*la funciond el click en personaje*/
/****** funciona! *****/

const personajesName = document.getElementById("personajes");
personajesName.addEventListener("click", function() {
    document.getElementById("root").innerHTML = ""

    mostrarPersonajes(rickDatos);
});

/*se obtuvo el valor del selector */
/*****************--- el evento del change en genero ---*********************/
const generoMaleFemal = document.getElementById("genero");

generoMaleFemal.addEventListener("change", function() {
    document.getElementById("root").innerHTML = ""

    let selecoption = generoMaleFemal.options[generoMaleFemal.selectedIndex].value;
    let resturngener = recorregenero(rickDatos, selecoption);

    mostrarPersonajes(resturngener);
    console.log(resturngener);

});
/*****************--- el evento del change en species ---*********************/
const speAlienHumano = document.getElementById("especie");

speAlienHumano.addEventListener("change", function() {
    document.getElementById("root").innerHTML = ""

    let seleccion = speAlienHumano.options[speAlienHumano.selectedIndex].value;
    let resturnspecie = recorreespecie(rickDatos, seleccion);
    mostrarPersonajes(resturnspecie);
    console.log(resturnspecie);
});