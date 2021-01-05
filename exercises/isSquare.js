'use strict';

/*

Crear una función que reciba un número entero y determine si es un número cuadrado perfecto:

OBS: un número cuadrado perfecto es un número entero que es el resultado del producto de algún número entero consigo mismo.

.Ejemplos:

   > isSquare(25);  // return true  -> 5 * 5 = 25
   > isSquare(3);   // return false -> No existe ningún número que multiplicado a si mismo de como resultado 3. 
   > isSquare(1);   // return true  -> 1 * 1 = 1

*/

// Solución:

const isSquare = function (n) {
   for (let i = 0; i <= n; i++) {
      if (i * i === n)
         return true;
   }
   return false;
}
