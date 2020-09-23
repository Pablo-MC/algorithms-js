/*

Crear una función que reciba una matriz de números enteros y devuelva una matriz donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos. 
OBS: Si la matriz de entrada está vacía entonces devuelve una matriz vacía.

.Ejemplos:

   > countPositivesSumNegatives([12, 7, -15, -1, -23, 34, -44, 1, -19]);  // return [4, -102]
   > countPositivesSumNegatives([]);                                      // return []

*/

// Solución:

const countPositivesSumNegatives = (array) => {
   if (array.length === 0) {
      return [];
   } else {
      let positives = 0;
      let negatives = 0;
      for (const nro of array) {
         (nro > 0) ? positives++ : negatives += nro;
      }
      return [positives, negatives];
   }
}