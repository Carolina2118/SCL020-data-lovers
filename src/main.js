import { recorregenero, recorreespecie, datordenadoAZ, datordenadoZA } from './data.js';
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
    let returngener = recorregenero(rickDatos, selecoption);

    mostrarPersonajes(returngener);
    console.log(returngener);

});
/*****************--- el evento del change en species ---*********************/
const speAlienHumano = document.getElementById("especie");

speAlienHumano.addEventListener("change", function() {
    document.getElementById("root").innerHTML = ""

    let seleccion = speAlienHumano.options[speAlienHumano.selectedIndex].value;
    let returnspecie = recorreespecie(rickDatos, seleccion);

    mostrarPersonajes(returnspecie);
    console.log(returnspecie);
});
const ordenarAoZ = document.getElementById("orden");

ordenarAoZ.addEventListener("change", function() {
    document.getElementById("root").innerHTML = "" //limpiar 
    let selec = ordenarAoZ.options[ordenarAoZ.selectedIndex].value;
    //console.log(selec)
    if (selec == "a-z") {
        let returnOrden = datordenadoAZ(rickDatos);
        mostrarPersonajes(returnOrden);

    }
    if (selec == "z-a") {

        let returnZA = datordenadoZA(rickDatos);
        mostrarPersonajes(returnZA);
    }
    console.log(returnOrden);

})