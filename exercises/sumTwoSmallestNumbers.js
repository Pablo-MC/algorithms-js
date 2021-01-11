'use strict';

/*

Crear una función que dado arreglo de números enteros devuelva la suma de los dos números más bajos.

OBS: El arreglo debe tener un mínimo de 4 números enteros.

.Ejemplo:

   > sumTwoSmallestNumbers([5, 8, 12, 19, 22, 1, 32]);  // 6
   > sumTwoSmallestNumbers([5, 8, 12, 19, 22]);         // 13
   > sumTwoSmallestNumbers([-5, 8, 1, 19]);             // -4

*/

// Solución:

function sumTwoSmallestNumbers(numbers) {
   let minor1, minor2;
   minor1 = findMinorNumber(numbers);
   numbers.splice(numbers.indexOf(minor1), 1);
   minor2 = findMinorNumber(numbers);
   return minor1 + minor2;
}

const findMinorNumber = function (arr) {
   let minor = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minor) minor = arr[i];
   }
   return minor;
}