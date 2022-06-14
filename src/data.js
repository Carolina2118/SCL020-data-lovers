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