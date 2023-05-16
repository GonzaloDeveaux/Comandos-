//Sintaxis de una funcion
//siempre encontraremos una palabra reservada (function)
//Nombre de la funcion 'el que sea'
// argumento o parametro (entre parentesis y se pueden agregar todos los parametros que queramos)
//cuerpo de la funcion (entyre llaves {}) en donde inidcaremos las instrucciones que ejecutara la funcion

//function sumaTres (x) {
    //console.log (x + 3);
//}

//sumaTres (5);

//Hay distintas formas de ejecutar una funcion que JS nos ofrece 

//PRIMERO
function sumaTres (x) {
    return x = 3;
}


//SEGUNDO
var sumaTres = function (x) {
    return x +3;
};

//TERCERO
var sumaTres = (x) => {
    return x +3;
};

//RETURN > Fundamental para toda funcion ya que es la instruccion que va a indicar que valor nos debe devolver

function CuidadoConElConsoleLog (nombre) {
    console.log (nombre);
    return nombre;
}


//Si quitamos el return como en el ejemplo de abajo el resultado al correr node nos dara un valor indefinido
//es decir que vere el resultado pero no tendra un valor definido 
 
function CuidadoConElConsoleLog (nombre) {
    console.log(nombre);
}

//En la terminal escribimos el comando "node" para poder correr el return por asi decirlo 
//copiamos el codigo y llamamos a la funcion (en este caso cuidadoconelconsolelog) y le damos el valor al parametro (en este caso "Camilo")
//podemos tener muchos console.log pero al final el que importa es el dato que se retorna  

function OtraFuncion() {
    return (
    "El nombre retornado por la funcion 'CuidadoConElConsoleLog' es: " + CuidadoConElConsoleLog ("Camilo")
    );
}

//El resultado al ejecutar la funcion OtraFuncion() es:
//Camilo (este es el console.log utilizado para visualizar el nombre que recibe la funcion CuidadoConElConsoleLog ya que la estamos llamando desde la funcion OtraFuncion)
//"El nombre retornado por la funcion 'CuidadoConElConsoleLog' es: undefined" (esto es el resultado del valor que retorna la funcion OtraFuncion)
// el hecho que el valor sea indefinido es porque no estamos retornando ningun valor por lo cual JS retornara por defecto UNDEFINED
//para corregir esto bastara con agregar la linea de return en la funcion CuidadoConElConsoleLog y el valor que queremos retornar (en este caso el parametro nombre)

function CuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}

//El resultado de ejecutar la funcion CuidadoConElReturn es:
//"Camilo" (esto es solamente el return con el valor de string)
//cuando llega a una linea en donde se instruye un return la funcion va a terminar su ejecucion 
//es decir que todo lo que se encuentra por debajo de un return no se va a ejecutar.

//Resumen
//Las funciones son bloques de codigos que podemos ejecutar y nos retornaran algun valor como resultado
//si no definimos nosotros mismos el valor a retornar por defecto JS retornara undefined
//Los parametros son palabras clave que nos permiten introducir informacion externa de una funcion
//Una funcion puede recibir uno o varios parametros 