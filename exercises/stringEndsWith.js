'use strict';

/*

Crear una función que devuelva verdadero si el primer argumento termina con el segundo argumento. 

OBS: Ambos argumentos deben ser valores de tipo string.

.Ejemplos:

   > stringEndsWith('abc', 'bc');  // return true
   > stringEndsWith('abc', 'd');  // return false

*/

// Solución:

const stringEndsWith = (str, ending) => str.endsWith(ending);
