/*

Crear una función que imprima los números del 1 al 100 con la condición de que:
	-> si el número a impirmir es divisible por 3, entonces imprima la palabra: 'Fizz',
	-> si el número a impirmir es divisible por 5, entonces imprima la palabra: 'Buzz',
	-> si el número a imprimir es divisible por 3 y por 5, entonces imprima la palabra: 'FizzBuzz'

*/   

// Solución:

const fizzBuzz = () => {
   for (let nro = 1; nro <= 100; nro++) {
      let word = '';

      if (nro % 3 === 0) word += 'Fizz';
      if (nro % 5 === 0) word += 'Buzz';

      console.log(word || nro);
   }
}