/* 
Arreglos
Los arreglos o array son otro tipo de datos que existen en JavaScript (como numeros, booleanos, string, etc)
Nos permiten guarda y gestionar informacion (nos ayudara mucho cuando queramos almacenar muchos datos)
Los arreglos peuden ser comparados con una lista de datos a la cual podemos acceder en cualquier moemnto
Todas las listas tienen distintas posiciones para guardar un dato.
Esto mismo es loq ue nos permite realizar los arreglos, guardar y organizar informacion 
Dentro de los arreglos existen 2 conceptos que pueden llegar a confundir 

Elementos
Son aquiellos datos que hemos guardado 
en el ejemplo se muestra 
Tomates
Lechuga
Zanahoria 

Por lo cual tenemos 3 elementos 

Por otro lado esta el concepto de indice 
Los indices no representan el dato en si mismo sino la posicion en la que se esta guardando 
EN LOS ARREGLOS SIEMRPOE SE EMPEZARA A CONTABLIZIAR DESDE LA POSICION CERO 
Tomando el ejemplo anterior quedaria 
0.Tomate
1.Lechuga
2.Zanahoria
*/

//  var ListaDeCompras = [];
//  ListaDeCompras [3] = "Tomates";
//  ListaDeCompras [1] = "Lechuga";

// console.log(ListaDeCompras);
// console.log (ListaDeCompras[1]);
// var elementoDelArray = ListaDeCompras[3];
// console.log(elementoDelArray);

/*
como en cuaqluier otro tipo de datos vamos a usar la palabra 
VAR seguida del nombre con el que vamos a identificar nuestro arreglo

ya quedo creado nuestro primer arreglo pero falta agregar nuestros productos 
a esta lista

Como se asignan valores dentro de un arreglo?
primero definir en que indicie queremos que se guarde 
Supongamos que queremos guardar "Tomates" en el indice 3
 en el resultado saldra 1 empty items, 'Lechuga', 1 empty item, 'Tomates'
 ya que en la lista el espacio cero y 2 estan vacios.

Ya aprendimos a como agregar elementos en nuestro arreglo pero

COMO RECUPERARLOS??

paRA PODER ACCEDER A ELEMENTOS DE UN ARREGLO 
PRIMERO TENEMOS QUE SABER CUAL ES SU INDICE
Siguiendo  con el ejemplo de las verduras 
si queremos acceder al elemento numero 1 seria
ListaDeCompras[1];

Lo que tambien podemos hacer es guardar este valor en una variable y hacer un 
conole.log para ver el resultado   
si queremos acceder al indice uno tendiramos que escribir
ListaDeCompras[1];
Lo que tambien podemos hacer es guardar este valor dentro de una variable 
y hacer un console.log para ver el resultado 

RESUMEN

para recuperer el elemento de un arreglo solo tenemos que escribir
el nobre del arreglo y entre corchetes [] el indicie que queremos recuperar 
(recordar que elementos e indice es diferente)

El metodo mas utilizado en los arreglos el LENGTH (longitud)
nos permite saber cuantos elementos tiene un arreglo  
*/

//console.log(ListaDeCompras.length);

/* el resultado sera  4 ya que si bien tenemos 3 elementos en el indice
el resultado sera 4 porque se empieza a contar desde el cero 0 

EN CONCLUCION

Un arreglo o array funcionan muy parecido a una lista
contiene elementos o datos por un lado e indices o posiciones por otro 
Dentrop de los arreglos podemos almacenar y/o acceder a un dato en cualquier posicion
existe un metodo llamado length que nos permite saber rapidamente cuantos elementos existen en nuestro arreglo 
*/

// Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// console.log(nombres);

/*METODOS DE ARRAY 

Los arreglos ademas de ser un tipo de dato tambien es un objeto global dentro de javascript 
es decir que todos los arreglos estan asociados a una serie de metodos
Los metodos son las funciones nativas/preestablecidas en los lenguajes de programacion 
estas funciones son para ahorrar lineas de codigos y realizar tareas mas simple

METODOS DE INSERCION 
push() añade uno o mas elementos al final de un arreglo y devuelve la nueva longitud del array

    var colores = ["amarillo", "azul"];
    colores.push("rojo");
    console.log(colores); 
['amarillo', 'azul', 'rojo,]

unshift() agrega uno o mas elementos al inicio de un arreglo y devuelve la nueva longitud del array

    var colores = ["amarillo", "azul"];
    colores.push("rojo");
    colores.unshift("verde");
    console.log(colores);
['verde', 'amarillo', 'azul', 'rojo'] 

pop() elimina y devuelve el ultimo elemento de una rreglo

    var colores = ["amarillo", "azul"];
    colores.push("rojo");
    colores.unshift("verde");
    colores.pop();
    console.log(colores); 
['verde', 'amarillo', 'azul']

shift()elimina y devuelve el primer elemento de un arreglo 

    var colores = ["amarillo", "azul"];
    colores.push("rojo");
    colores.unshift("verde");
    colores.pop();
    colores.shift();
    console.log(colores);
['amarillo, 'azul']
*/

// var colores = ["amarillo", "azul"];
// colores.push("rojo");
// colores.unshift("verde");
// colores.pop();
// colores.shift();
// console.log(colores);

/*
Metodo INCLUDES  
Sirve para determinar si un arreglo incluye o no un elemento
esto nos devolvera un valor booleano true o false

    var pintores = ['Picaso', 'Velazquez', 'Van Gogh', 'Dali'];
    var incluyeDali = pintores.includes('Dali');
    console.log(incluyeDali);
true

    var pintores = ['Picaso', 'Velazquez', 'Van Gogh', 'Dali'];
    var incluyeDali = pintores.includes('Monet');
    console.log(incluyeDali);
false

Metodo EVERY
Nos permite saber si absolutamente todos los elementos del arreglo
cumplen con alguna condicion 
*/

// var numeros = [1, 6, 8, 9];
// var cumplenCondicion = numeros.every((num) => {
//     return num > 5;
// });

// console.log(cumplenCondicion);

//la resuesta fue false porque un elemento no cumple con la condicion
//si ese elemento que no cumple la condicion cambia entonces el
//resultado sera ture

/* Los metodos son muy utiles para trabajar 
nos permiten agregar o eliminar elementos a las listas
algunos metodos nos dan una respuesta buleana
el metodo INCLUDES verifica que un arreglo contenga un valor
el metodo EVERY calida que todos los elementos cumplan una condicion*/

/*  METODOS SPLIT & JOIN

Split = separar
Join = unir

nos permite convertir strings en arreglos y arreglos en strings*/

//var palabra = 'Henri';

/*
Henri esta escrito con 'I' pero se escribe con 'Y' 
Para poder corregir esto lo primero que tenemos que hacer es 
convertir nuestro string en un arreglo
*/

//var palabraSeparada = palabra.split('');

/*
Dentro de los parentesis pusismos dos comillas juntas ''
esto le indica al metodo que queremos separar la palabra
por cada caracter
si dejamos un espacio entre las comillas ' ' 
va a separar el string en cada espacio que haya
si escribieramos la letra A va a separar el string
cada que encuentre una letra A
*/

//console.log (palabraSeparada);

/*
El resultado es [ 'H', 'e', 'n', 'r', 'i' ]
ahora nuestra palabra es un arreglo
en donde cada elemento es uan de las letras de la palabra
*/

/*
Nosotros queremos corregir el error de la ultima letra
para esto podemos eliminar la ultima letra y agregar una nueva correcta 
podemos usar los metodos POP y PUSH 
para esto agregamos 
palabraSeparada.pop();
palabraSeparada.push('y');
*/

//palabraSeparada.pop();
//palabraSeparada.push('y');

//console.log(palabraSeparada);

/*
El resultado sera [ 'H', 'e', 'n', 'r', 'y' ]
ahora solo queda que lo volvamos a convertir en un string
*/

//var palabraArreglada = palabraSeparada.join('');

//console.log(palabraArreglada);

/*
El resultado final fue Henry
El codigo al final quedaria algo asi
*/
//  var palabra = 'Henri'
//  var palabraSeparada = palabra.split('');
//  palabraSeparada.pop();
//  palabraSeparada.push('y');
//  var palabraArreglada = palabraSeparada.join('');
//  console.log(palabraArreglada);

/*
  METODO FOR EACH
  nos permite recorrer un arreglo, realizando alguna
  accion en para cada elemento
*/

// var numeros = [1, 2, 3, 4];
// numeros.forEach((num) => console.log(num));

/*
El resultado es
1
2
3
4

Si quisieramos que solo imprimiera los numeros que son
iguales a 3 entonces seria:
*/

// var numeros = [1, 2, 3, 4];
// numeros.forEach(num => {
//      if (num === 3) { 
//         console.log(num);
//      }
//      });

/*
El resultado sera
3
Este metodo solo ejecuta una accion sobre el 
arregloq ue especificamos pero NO hara un
cambio sobre el mismo

Si quisieramos utilizar un metodo para realizar un 
cambio sobre el arreglo utilizariamos el metodo 
MAP
*/

// var masUno = numeros.map((num) => {
//     return num + 1
// });
// console.log(masUno);

/* 
el resultado sera
[ 2, 3, 4, 5]
ya que a la variante original se le suma uno y es lo 
que se imprime en la consola

RESUMEN

Los metodos SPLIT y JOIN transforma strings en arreglos y viceversa
El metodo forEach nos permite recorrer elemento por elemento 
y el metodo MAP crea una copua del arreglo y le puede realizar cambios.
 */

// var numeros = [ 1, 6, 8, 9, 43 ];
// var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

// console.log(cumplenCondicion);

/* 
FOR seguido por su parentesis y llaves
En el bucle FOR los parentesis no son para recibir parametros
los usaremos para guardar 3 datos de funciones especificas
para el bucle
Cuando trabajemos con un bucle FOR siempre trabajaremos
con una variable de interacion la cual nos permitira
tener un nodo para trabajar en cada interacion 
del bucle 
generalmente se usa la variable i y se iguala a cero 
var i=0;
para definir el segundo dato antes hay que preguntarnos
QUE QUEREMOS ITERAR? 
(siemree vamos a iterar arreglos asi que hay que definir que arreglo sera)
una vez que lo hayamos decidio nos vamos a preguntar
MIENTRAS SE CUMPLA QUE CONDICION? QUIERO QUE ESTE BUCLE SE INTERE
(esto nos permite tener una sentencia de cierre para nuestro bucle)
en el ejemplo que estamos usando  i sea menor que la cantidad de elemntos que tenga el arreglo
este bucle se seguira ejecutando pero cuando el numero de iteracion 
sea mayor a la cantidad de elemntos el bucle se romepra
la variable i representa el indice del elemento sobre el cual se esta iterando
si en lugar de querer iterar sobre todos los elementos queremos iterar solo los primeros 
3 elementos entonces en lugar de arr.legth se usaria i<3
luego de indicar el periodo de ejecucion del bucle tenemos que indicar 
QUE SUCEDERA CON LA VARIABLE DE ITERACION AL FINAL DE CADA ITERACION 
(generalmente es que se sume un elemento asi que se escribe i++)
cuando recorremos un arrelgo lo hacemos para cambiar algo en cada elemento
para realizar una accion sobre cada elemetno requerimos alguna forma 
para referirnos a el o sea el NOMBRE DEL ARREGLO (que estemos recorriendo) mas corchetes []
con la variante de iteracion dentro de ellos 
 */

// var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

/* 
el resultado fue
1
2
3
4
5
si i < 3 el resultado solo hubiese sido 
1
2
3
*/

/* 
supongamos que alguien nos pide que cosntruyamos una funcion que recibe
un string y revisar si alguna de esas letras es la letra P
para esto primero declaramos una nueva funcion llamada
function declararLetraP()
esta funcion va a recibir por parametro un string
function declararLetraP(string) {} 
para poder recorrer cada una de las letras tendriamos que 
transformar el string en un array
(con el metodo split y esta sera nuestra primer linea dentro de la funcion)

function encontrarLetraP(string) {
    var letras = string.split('');
}

Ahora que tenemos el array con todas las letras en string nos toca
recorrerlo

primero escribimos la palabra reservada FOR junto con sus parentesis ()
ahora declaramos la variable de interacion LET i=0;
luego de esto escribimos la condicion que se debe cumplir 
para que se ejecute el bucle. En este caso queremos recorrer un arreglo 
por lo que la condicion es que aun haya elementos para recorrer 
asi que escribimos que mientras i > letras.length(la cantidad de elementos); queremos
que este se siga ejecutnado
ahora solo nos queda incrementar la variable de interacion 
sumandole mas uno i++ 

function encontrarLetraP(string) {
    var letras = string.split('');

    for(Let i = 0; i > letras.length; i++) {

    }
}

Listo, ya podemos recorrer nuestro arreglo
ahora solo nos queda encontrar la letra 'P'
para esto vamos a escribir un codigo condicional que pregunte
si la letra en la que se esta interando es igual a P

function encontrarLetraP(string) {
    var letras = string.split('');

    for(let i = 0; i > letras.length, i++) {
        if (letras[i] === 'p') {
            console.log('Si contiene a p'):
        }
    }
}

encontrarLetraP('JavaScript');
encontrarLetraP('Henry');

el resultado es 
Si contiene a p (solo una vez)
esto es claramente por la palabra JavaScript
Si la palabra henry tuviese P nos hubiese salido 2 veces 
*/

// function encontrarLetraP(string) {
//     var letras = string.split('');

//     for(let i = 0; i < letras.length; i++) {
//         if (letras[i] === 'p') {
//             console.log('Si contiene a p');
//         }
//     }
// }

// encontrarLetraP('JavaScript');
// encontrarLetraP('Henry');

/* 
Ahora veremos el bucle WHILE 
Este bucle utiliza la palabra clave WHILE seguido de los parentesis
en los que escribiremos la condicion que se debe cumplir 
para que este bucle se ejecute
Esto nos permitira repetir la tarea muchas veces en pocas lineas de codigo 
Si quiseramos agregar 5 veces la palabra BOOM en un arreglo
podemos decir que la condicion es que el arreglo tenga una condicion de 5

primero creamos un arreglo vacio y luego declaramos un bucle WHILE 

var arr [];

while (arr.length < 5) {
    arr.push('BOOM');
}

console.log(arr);

El resultado fue
[ 'BOOM', 'BOOM', 'BOOM', 'BOOM', 'BOOM' ]
Este bucle WHILE fue agregando el string 'BOOM' uno por uno 
pero cuando el arreglo ya tenia 5 elementos 
(es decir cuando el arreglo tenia una longitud de 5)
la condicion se dejo de cumplir
*/

// var arr = [];

// while (arr.length < 5) {
//     arr.push('BOOM');
// }

// console.log(arr);

/* 
la principal diferencia entre el bucle FOR y el WHILE 
es la expresion de control que le permite a cada uno seguirse ejecutando 

El bucle FOR trabaja con un numero determinado de repeticiones
(para recorrer un arreglo, el bucle se repetira una vez 
por cada elemento que el arreglo tenga)

Por otro lado el bucle WHILE trabaja por condiciones especificas
mientras la condicion no se cumpla, el bucle seguira ejecutandose

Bucle infinito 
NO es un nuevo tipo de bucle pero se puede producir en lo que ya aprendimos

Un bucle infinito se puede dar porque nunca se llega una condicion de quiebre

cada que nos encontremos con un bucle infinito hay que pensar el por que no se cumple y el como 
solucionarlo 
 
*/

// var arr = [];
// var n=1;

// while (n < 3) {
//     arr.push(Math.random());
// }
