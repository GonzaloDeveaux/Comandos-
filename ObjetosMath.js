//JS tiene una serie de objetos globales integrados que nos son de utilidad. 
//por ejemplo ya trabajamos con el objeto CONSOLE y su metodo LOG para ver informacion en nuestra consola.
//Otro de esos objetos es MATH, que tiene varios metodos propios

//Math.pow
//Este metodo te permite potenciar un numero.
//Por ejemplo

console.log (Math.pow (2, 3));

//El resultado es 8 al ser el 2 elevado al cubo

//Math.round
//Redondea el numero decimal al entero mas proximo. Es decir que si tenemos 0.49 el resultado sera 0, peeeeeeeero si es 0.50 el resultado sera 1

console.log (Math.round (0.49));
//El resultado es 0

console.log (Math.round (0.50));
//El resultado es 1

//Math.floor
//Redondeara el numero decimal al entero de menor valor

console.log (Math.floor (5.99));

//Math.ceil
//Redondeara el numero al siguiente entero 

console.log (Math.ceil (4.01));
//El resultado es 5

//Math.max
//Nos permitira conocer el valor maximo de un conjunto 

console.log (Math.max (1,2,3,4,5,45678));
//el resultado es 45678

//Math.min
//Nos permite conocer el valor minimo de un conjunto

console.log (Math.min (1,2,3,4,5));
//El resultado es 1

//Math.random
// Nos permitira generar un numero aleatorio 
//Ojo: El numero que se genera es decimal y menor a uno 

console.log (Math.random ());
//En este caso el resultado fue 0.24381523417527462

