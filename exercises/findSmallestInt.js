/*

Crear una función que reciba una matriz de números enteros y devuelva el número más pequeño.
OBS: La matriz ingresada no debe estar vacía.

.Ejemplos:

   > findSmallestInt([34, -345, -1, 100]);  // return -345
   > findSmallestInt([34, 15, 88, 2]);      // return 2

*/

// Solución:

const findSmallestInt = (args) => {
   let minor = args[0];
   for (const n of args) {
      if (n < minor) minor = n;
   }
   return minor;
}
