//Ejercicio 1: Sumar los primeros N números naturales
//Escribe un programa que pida al usuario un número N y luego sume los primeros N números naturales e imprima el resultado.

function numerosNaturales (num){
    let suma = 0;

    for (i = 0; i <= num; i++) {
        suma += i;
    }
  console.log('La suma de los primeros ' + num + ' numeros naturales es: ' + suma);  
  return suma;
};

numerosNaturales(5);

//Ejercicio 2: Imprimir los números pares entre 1 y N
// Escribe un programa que pida al usuario un número N e imprima todos los números pares desde 1 hasta N.

function numerosPares (num){
  console.log('Estos son los numeros pares desde 1 hasta ' + num + ':');

for (let  i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(i);
    }
  }
};

numerosPares(15);

// Ejercicio 3: Calcular el factorial de un número
// Escribe un programa que pida al usuario un número N y calcule el factorial de ese número utilizando un bucle "for".

function factorial (num) {
  if (num === 0 || num === 1 ) return 1;
  else if (num < 0 ) return 0;
  
  let resultado = 1;
  for (let i = 2; i <= num; i ++) {
    resultado *= i
  }
  console.log(resultado)
  return resultado;
  };

  factorial(5);

//Ejercicio 4: Imprimir un patrón de asteriscos
//Escribe un programa que pida al usuario un número N y luego imprima un patrón de asteriscos en forma de triángulo con N filas.

function piramideAsteriscos (num){
  
}

//Ejercicio 5: Encontrar números primos en un rango
//Escribe un programa que pida al usuario dos números, inicio y fin, y luego encuentre e imprima todos los números primos entre ambos valores.