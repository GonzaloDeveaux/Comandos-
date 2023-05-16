//console.log (4 < 7);
//console.log (4 < 1);
//console.log (4 > 4);
//console.log (4 == 7);

//console.log (3 == 3);
//console.log (3 === 3);
//console.log (3 == "3");
//console.log (3 === "3");
//console.log (7 == "7");
//console.log (7 === "7");

// IGUALDADES 
//=== Igualdad Estricta 
//Tipo de dato
//valor
//==
//valor
//Es una buena practica siempre usar la igualdad estricta

// Asociatividad
// var a = 1;
// var b = 2;
// var c = a = b

// La precedencua de operadores no nos ayuda ya que en este ejemplo tienen el mismo valor de presedencia 
//la asociatividad nos ayuda a identificar que operacion se realiza primero 
//en la tabla de presedencia la asignacion tiene una asociatividad a la derecha 
//es decir que empezamos a operar de derecha a izquierda 
//en el ejemplo la primera operacion que se ejecuta es a=b
//y despues c=a

var a = 1;
var b = 2;
var c = (a = b);

console.log(a);
console.log(b);