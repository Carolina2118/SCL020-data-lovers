 // recorro la data 

 export function filterDatos(dataRecorrer) {
     let respuesta = "";
     dataRecorrer.forEach((rickandmorty) => {
         respuesta += root(rickandmorty);
     });
     return respuesta;
 }
 //**************------------****************//
 /*es para que recorra el array uno a uno y muestre el elemento */


 export function recorregenero(dataRecorrerGenero) {
     for (let i = 0; i < dataRecorrerGenero.length; i++) {
         const recorregenero = dataRecorrerGenero[i].gender;


         console.log(recorregenero);
     }
 };