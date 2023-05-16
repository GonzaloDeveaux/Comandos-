// Condicionales > Permiten controlar el flujo de nuestro codigo
//ejemplo
// Si esta lloviendo, entonces me voy a quedar acostado en mi cama 
// mirando series.
//Si llueve, ejecuto la accion 

//Si esta lloviendo y hace frio, me voy a quedar en mi cama mirando
//series
//complejizamos la condicion 

//Tipos de operadores 
//Operador "and" ("y" en español) nos va a permitir conjugar 2 o mas 
//condiciones al mismo tiempo y se representa con && 

//Vamos a crear una funcion llamada "MayorYMenor" la cual se encargara
//de verificar si el numero es < 10 pero >5 
//Primero declaramos la funcion que recibira por parametro un numero
//y dentro del cuerpo de la funcion crearemos un condicional 
//este condicional perguntara si el numero recibido es mayor a 5 
//y menor que 10 
//solamente en el caso que ambas condiciones se cumplan haremos un 
//console.log de "true"
//si ninguna o alguna de las condiciones no se cumple entonces haremos 
//un console.log de "false" 

function MayorYMenor (num) {
    if (num > 5 && num < 10) console.log(true);
    else console.log (false);
};

MayorYMenor (2); 
MayorYMenor (7);

//Si tenemos mas de dos condiciones unidas por operadores "and" (&&), Todas
//deben ser verdaderas para que la condicion final lo sea 

function MayorYMenorYPar (num) {
    if (num > 5 && num < 10 && num % 2===0) console.log (true);
    else console.log (false);
};

MayorYMenorYPar (7);
MayorYMenorYPar (8);

//De esta forma podemos seguir agregando la cantidad de condiciones que queramos
//En cuanto no se cumpla alguna de estas toda la cantidad de condiconoes sera evaluada
//como "false".

//Tambien tenemos el operador "or" ("o" en español) y se representa con ||
//este nos va a permitir conjugar 2 o mas condiciones al igual que el operador "and"
//pero con un comportamiento distinto a su evaluacion logica

//Lo que haremos es declarar un condicional que pregunte si este string es igual a 
//"henrry" o su longitud es igual a 2
//en el caso que cumpla alguna de estas 2 condiciones se hara un console.log de "true"
//en caso contrario un console.log de "false"


function operadorOr (str){
    if (str=== 'henrry' || str.length<2) console.log (true);
    else console.log (false);
};

operadorOr ('henrry');
operadorOr ('javascript');
operadorOr ('h');

//operador "not" or negacion el cual nos va a permitir verificar condidiones opuestas
//a las normales 

//Vamos a crear ahora una funcion que se llame negacion
//Esta funcion recibira un operador booleano por parametro llamado 'permiso' 
//dentro de la funcion haremos un condicional que pregunte si el parametro permiso 
//es "true"
//en este caso se imprimira si el parametro permiso es "true"
//de lo contrario no se imprimira nada


function Negacion (permiso){
    if (permiso) console.log ("tiene permiso");
};

Negacion (false);
Negacion (true);

 //se mostro el mensaje solo cuando el permiso es verdadero 
//ahora agregaremos un signo de exlamacion dentro del condicional 
//esto lo que hara es preguntar por el valor opuesto del parametro 
//por lo que ahora solo se imprimira "tiene permiso" si el valor permiso es "false"


function Negacion (permiso) {
    if (!permiso) console.log ("tiene permiso");
};

Negacion (true);
Negacion (false);

//En este momento, dentro del condicional, estamos preguntando si existe o no el valor de permiso 
//esto seria equivalente a si hacemos una comparacion de valores
//ejemplo

function Negacion (permiso) {
    if (permiso === true) console.log('Tiene Permiso');

};

Negacion (true);

//ahora apliquemos la negacion en este ejemplo 

function Negacion (permiso){
    if (permiso !== true) console.log ("Tiene Permiso");
};

//Negacion (false);

//de esta manera podemos preguntar, no solo si un valor es igual a otro
//sino tambien si son diferentes 

//Podemos combinar todo para crear condiciones complejas

function CondicionesComplejas (num){
    if (num > 9 && num % 2 === 0 || num === 3) console.log (true);
    else console.log (false);
};

CondicionesComplejas (6);
CondicionesComplejas (3);
CondicionesComplejas (10);
CondicionesComplejas (11);

//Solo los valores 3 y 10 se cumplen, 3 porque cumple la condicion de ser igual a 3
//y 10 porque cumple con las condiciones de ser mayor a 9 y numero par
//IMPORTANTE 
//Presedencia de operadores. En este ejemplo el operador "or" (||), precede al operador "and" (&&)

//RESUMEN
//NEGACION > Transformar un valor en su opuesto
//AND > Nos permite juntar condiciones 
// OR > aceptara que solo se cumpla una de las conidiones propuestas.
// Podemos mezclar todos los operadores para crear verificaciones logicas mas complejas 
//Los condicionales son parte esencial de cualquier programa.
