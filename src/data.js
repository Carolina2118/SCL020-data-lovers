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

 export function rick(dataRecorrer) {
     for (let i = 0; i < dataRecorrer.length; i++) {
         const namePersonajes = dataRecorrer[i].name;
         console.log(namePersonajes);
         //return namePersonajes;
     }
 };