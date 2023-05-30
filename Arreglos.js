/* Arreglos
Los arreglos o array sonotro tipo de datos que existen en JavaScript (como numeros, booleanos, string, etc)
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
2.Zanahoria*/

var ListaDeCompras = [];
ListaDeCompras [3] = "Tomates";
ListaDeCompras [1] = "Lechuga";

//console.log(ListaDeCompras);
//console.log (ListaDeCompras[1]);
//var elementoDelArray = ListaDeCompras[3];
//console.log(elementoDelArray);

/* como en cuaqluier otro tipo de datos vamos a usar la palabra 
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

console.log(ListaDeCompras.length);

/* el resultado sera  4 ya que si bien tenemos 3 elementos en el indice
el resultado sera 4 porque se empieza a contar desde el cero 0 

EN CONCLUCION

Un arreglo o array funcionan muy parecido a una lista
contiene elementos o datos por un lado e indices o posiciones por otro 
Dentrop de los arreglos podemos almacenar y/o acceder a un dato en cualquier posicion
existe un metodo llamado length que nos permite saber rapidamente cuantos elementos existen en nuestro arreglo 

METODOS DE ARRAY 

Los arreglos ademas de ser un tipo de dato tambien es un objeto global dentro de javascript 
es decir que todos los arreglos estan asociados a una serie de metodos
Los metodos son las funciones nativas/preestablecidas en los lenguajes de programacion 
estas funciones son para ahorrar lineas de codigos y realizar tareas mas simple           
*/