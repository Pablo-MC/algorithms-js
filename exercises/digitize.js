/*

Crear una función que reciba un número aleatorio no negativo y devuelva los dígitos de este número dentro de una matriz en orden inverso.

.Ejemplo:

   > digitize(35231);  // return [1,3,2,5,3]

*/

// Solución:

const digitize = (n) => {
   let result = [];
   while (n !== 0) {
      let lastDigit = n % 10;
      result.push(lastDigit);
      n = Math.trunc(n / 10);
   }
   return result;
}