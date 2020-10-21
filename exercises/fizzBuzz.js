/*

Crear una función que imprima los números del 1 al 100 con la condición de que:
	-> si el número a impirmir es divisible por 3, entonces imprima: 'Fizz',
	-> si el número a impirmir es divisible por 5, entonces imprima: 'Buzz',
	-> si el número a imprimir es divisible por 3 y por 5, entonces imprima: 'FizzBuzz'

*/   

// Solución:

const fizzBuzz = () => {
   for (let i = 1; i <= 100; i++) {
      let result = '';

      if (i % 3 === 0) result += 'Fizz';
      if (i % 5 === 0) result += 'Buzz';

      console.log(result || i);
   }
}