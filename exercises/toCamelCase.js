/*

Crear una función que convierta las palabras delimitadas por guiones ó guiones bajos en camellCase. 
La primera palabra dentro de la salida debe estar en mayúscula solo si la palabra original fue en mayúscula. 
  
.Ejemplos:
   
   > toCamelCase("the-stealth-warrior");  // return "theStealthWarrior"
   > toCamelCase("The_Stealth_Warrior");  // return "TheStealthWarrior"

*/

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