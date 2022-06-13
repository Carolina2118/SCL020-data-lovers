//
export const recorregenero = (dataRecorrer, genero) => {
    //  console.log(dataRecorrer);
    //  console.log(genero);
    return dataRecorrer.filter((e) => {
        return e.gender == genero
    })
};
// filtrar especie.