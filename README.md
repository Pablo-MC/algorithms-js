# Algoritmos JavaScript ES6+

### _Ejercicios de algoritmos propuestos y resueltos utilizando JavaScript_    

#### :small_orange_diamond: Ejercicio # 1: _toCamelCase_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/toCamelCase.js)
‣ Crear una función que convierta las palabras delimitadas por guiones medios ó guiones bajos en el estilo de escritura **camelCase**.    

__OBS__: El retorno de la primera palabra debe estar en mayúscula solo si la palabra original fue ingresada en mayúscula. 
  
‣ Ejemplos: 
~~~  
‣ toCamelCase('the-stealth-warrior');  // return theStealthWarrior
‣ toCamelCase('The_Stealth_Warrior');  // return TheStealthWarrior
~~~

#

#### :small_orange_diamond: Ejercicio # 2: _digitize_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/digitize.js)
‣ Crear una función que reciba un número aleatorio no negativo y devuelva los dígitos de este número dentro de una matriz en orden inverso.

‣ Ejemplo:
~~~
‣ digitize(35231);  // return [1,3,2,5,3]
~~~

#

#### :small_orange_diamond: Ejercicio # 3: _findSmallestInt_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/findSmallestInt.js)
‣ Crear una función que reciba una matriz de números enteros y devuelva el número más pequeño.           

__OBS__: La matriz ingresada no debe estar vacía.

‣ Ejemplos:
~~~
‣ findSmallestInt([34, -345, -1, 100]);  // return -345
‣ findSmallestInt([34, 15, 88, 2]);      // return 2
~~~

#

#### :small_orange_diamond: Ejercicio # 4: _countPositivesSumNegatives_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/countPositivesSumNegatives.js)
‣ Crear una función que reciba una matriz de números enteros y devuelva una matriz donde el primer elemento es el recuento de números positivos y el segundo elemento es la suma de números negativos.   

__OBS__: Si la matriz de entrada está vacía entonces devuelve una matriz vacía. 
  
‣ Ejemplos: 
~~~  
‣ countPositivesSumNegatives([12, 7, -15, -1, -23, 34, -44, 1, -19]);  // return [4, -102]
‣ countPositivesSumNegatives([]);                                      // return []
~~~

#

#### :small_orange_diamond: Ejercicio # 5: _multiply_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/multiply.js)
‣ Crear una función que multiplique dos números __sin__ utilizar el signo de multiplicación.  
  
‣ Ejemplos: 
~~~  
‣ multiply(3, 12);  // return 36
‣ multiply(-9, 6);  // return -54
~~~

#

#### :small_orange_diamond: Ejercicio # 6: _fizzBuzz_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/fizzBuzz.js)
‣ Crear una función que imprima los números del 1 al 100 con la condición de que:   
- si el número a impirmir es divisible por 3, entonces imprima la palabra: 'Fizz',   
- si el número a impirmir es divisible por 5, entonces imprima la palabra: 'Buzz',   
- si el número a imprimir es divisible por 3 y por 5, entonces imprima la palabra: 'FizzBuzz'

#

#### :small_orange_diamond: Ejercicio # 7: _isSquare_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/isSquare.js)
‣ Crear una función que reciba un número entero y determine si es un número cuadrado perfecto.

__OBS__: Un número cuadrado perfecto es un número entero que es el resultado del producto de algún número entero consigo mismo.

‣ Ejemplos:
~~~ 
‣ isSquare(25);  // return true  -> 5 * 5 = 25
‣ isSquare(3);   // return false -> No existe ningún número entero que multiplicado a si mismo de como resultado 3. 
‣ isSquare(1);   // return true  -> 1 * 1 = 1
~~~ 

#

#### :small_orange_diamond: Ejercicio # 8: _stringEndsWith_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/stringEndsWith.js)
‣ Crear una función que devuelva verdadero si el primer argumento termina con el segundo argumento.

__OBS__: Ambos argumentos deben ser valores de tipo string.

‣ Ejemplos:
~~~ 
‣ stringEndsWith('abc', 'bc');  // return true
‣ stringEndsWith('abc', 'd');  // return false
~~~ 

#

#### :small_orange_diamond: Ejercicio # 9: _sumTwoSmallestNumbers_  [(Solución)](https://github.com/Pablo-MC/algorithms-js/blob/master/exercises/sumTwoSmallestNumbers.js)
‣ Crear una función que dado arreglo de números enteros devuelva la suma de los dos números más bajos.    

__OBS__: El arreglo debe tener un mínimo de 4 números enteros.    

‣ Ejemplos:
~~~ 
‣ sumTwoSmallestNumbers([5, 8, 12, 19, 22, 1, 32]);  // return 6
‣ sumTwoSmallestNumbers([23, 71, 33, 82, 1]);        // return 24
‣ sumTwoSmallestNumbers([-5, 8, 1, 19]);             // return -4
~~~ 

#
