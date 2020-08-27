/*

Crear una función que convierta las palabras delimitadas por guiones medios ó guiones bajos en el estilo de escritura camelCase.
OBS: El retorno de la primera palabra debe estar en mayúscula solo si la palabra original fue ingresada en mayúscula.
  
.Ejemplos:
   
   > toCamelCase("the-stealth-warrior");  // return "theStealthWarrior"
   > toCamelCase("The_Stealth_Warrior");  // return "TheStealthWarrior"

*/

// Solución:

const toCamelCase = (str) => {
   let result = '';
   for (let i = 0; i < str.length; i++) {
      if (str[i] === '_' || str[i] === '-') {
         result += str[i + 1].toUpperCase();
         i++;
      } else {
         result += str[i];
      }
   }
   return result;
}
