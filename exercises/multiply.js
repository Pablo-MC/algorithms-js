/*

Crear una función que multiplique dos números sin utilizar el signo de multiplicación.

.Ejemplos:

   > multiply(3, 12);  // return 36
   > multiply(-9, 6);  // return -54

*/

// Solución:

const multiply = (a, b) => {
   let result = 0;
   const positive = Math.abs(a) == a;
   for (let i = 0; i < Math.abs(a); i++) {
      result = positive ? result + b : result -b;      
   }

   return result;
}