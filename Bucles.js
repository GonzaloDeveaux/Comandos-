//Los bucles o ciclos de interaccion nos permite realizar acciones de caracter repetitivo de manera facil
//veremos 2 tipos de bucles 
//for y while 

//var suma = 0;
//suma = suma + 1;

// El  resultado fue 1 ya que al igualar el valor de suma + 1, suma = 1.

//suma = suma + 1;
//suma = suma + 2;
//suma = suma + 3;
//suma = suma + 4;
//console.log (suma)

// El resultado fue 10 y tal vez no parezca tanto problema repetir la misma linea de codigo 20 veces
//pero para realizar una sumatoria hasta el 1000 seria mucho codigo y aqui entran los bucles
//que son una fomra rapida y sencilla de hacer procesos repetitivos.

// FOR

// for (variable de iteracion (inicializacion), condicion, actualizacion){
//   //sentencias a ejecutar en cada iteracion 
// }

// for (i = 0 ; i <= 10; i++) {
//   console.log (i);
// }

// Definir la variable para almacenar la tabla del 7
 var tablaDel7 = "";

// Utilizar un bucle for para generar la tabla
 for (var i = 1; i <= 10; i++) {
// Multiplicar el número actual (i) por 7
   var resultado = i * 7;
  
// Agregar el resultado a la tabla
   tablaDel7 += i + " x 7 = " + resultado + "\n";
 }

// Mostrar la tabla del 7 en la consola
console.log(tablaDel7);







//utilizamos la palabra reservada FOR seguida de parentesis ()
//dentro de los parentesis escribiremos tres valores
//el primero sera la VARiable de iteracion. Esta nos servira como pibote o iterador en cada bucle
//para poder ejecutar acciones (en este caso lo llamaremos i y sera igual a 0)
//el segundo valor es una condicion de cumplimiiento. Mientras esta condicion sea
//verdadera el bucle seguira ejecutandose.
// en este ejemplo digamos que la condicion sea i sea menor que 10.
//el tercer valor es la instruccion al bucle de que tiene que hacer la variable de iteraccion 
//cada vez que termina de ejecutarse cada ciclo.
//en este ejemplo le diremos que se incremente una sola vez por cada iteraccion 
//se abren llavez {} y dentro de las llaves escribiremos el codigo que queremos que se repita.
//en este ejemplo buscaremos que la variable suma se incremente hasta el 10 

//for ( var i=0 ; i < 10 ; i++){
  //  suma = suma +1;
   // console.log (suma);
//}

//lo que va a suceder cuando ejecutemos este codigo se le ira sumando +1 a la variable suma
//y cada vez que esto se repita se va a imprimir el resultado en la terminal. 

//Volveremos a usar este bucle FOR pero le diremos a la variable suma que en lugar de incrementar de a uno
//ahora se le sume la VARiable de iteracion y a demas haremos un console log de ella 
//al final del archivo haremos tambien un console log de suma para ver el resultado final 

// for (var i=0 ; i < 5 ; i++){
//     suma = suma + i;
//     console.log("Variable de iteracion: ", i);
// }
// console.log ("Variable de la suma: ", suma)

//Asi se comporta la variable de iteracion, primero la declaramos con un cero y despues va incrementando de uno
//en uno en cada iteracion ya que esto fue lo especificado en la tercera condicion 
//podemos ver que el resultado de la variable suma fue 10 



//WHILE

// while (condition){
//   codigo
//}

// let i=0;
// while (i<3){
//   alert (1);
//   i++;
//   console.log (i);
// }



//Este bucle nos permitira repetir una condicion siempre y cuando una condicion sea verdadera 
//sintaxis

//palabra reservada WHILE y un parentesis () 
//en el parentesis pondremos  la condicion que debe cumplirse para que el bucle se ejecute 
//en este caso suma=3 y se abren llaves {}
//dentro de las llaves escribiremos el codigo que queremos que se repita
//en este ejemplo haremos que suma sea igual a suma mas 1  
//consolelog de suma 

  // while (suma < 3){
  //     suma = suma + 1;
  //     console.log (suma);
  // }

//LA variable suma se incremento en 1 y cuando llego a 3 la condicion dejo de cumplirse 
//a diferencia del bucle FOR ahora solo tenemos una posicion dentro de los parentesis 
//la cual tiene que ser una evaluacion logica que nos retorna verdadero o falso 
//si esa evaluacion es verdadera se seguira ejecutando el bucle.

// QUE DIFERENCIA HAY ENTRE FOR Y WHILE?

//El bucle FOR lo utilizamos cuando sabemos la cantidad maxima exacta de pasos que queremos ejecutar
//esta cantidad se efectua como segundo parametro entre los parentesis

//El bucle WHILE es usado cuando no tenemos la certeza de cuantos pasos necesitaremos hasta finalizar la ejecucion 

