//
export const recorregenero = (dataRecorrer, genero) => {
    //  console.log(dataRecorrer);
    //  console.log(genero);
    return dataRecorrer.filter((e) => {
        return e.gender == genero
    })
};
// filtrar especie.
export const recorreespecie = (dataRecorrer, especie) => {
    return dataRecorrer.filter((e) => {
        return e.species == especie
    })
};
// 
export const datordenadoAZ = (dataRecorrer) => {

    return dataRecorrer.sort((a, z) => {
        if (a.name > z.name) {
            return 1;
        }
        if (a.name < z.name) {
            return -1;
        } else {
            return 0;
        }

    })
};
// la funcion recibe dos parametros q son los elementos de q va antes o despues.
export const datordenadoZA = (dataRecorrer) => {
    return dataRecorrer.sort((a, z) => {
        if (a.name < z.name) {
            return 1;
        }
        if (a.name > z.name) {
            return -1;
        } else {
            return 0;
        }

    })
};