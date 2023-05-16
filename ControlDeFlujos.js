function viajar (destino) {
    if (destino === "Brasil") {
        console.log ("Gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log ("Gire a la DERECHA");
    } else {
        console.log ("Estamos perdidas, perdidas, perdidas");
    }
}

viajar ("Brasil")
viajar ("Mexico")

//priemro escribimos la palabra function y el nombre de la funcion viajar seguido de parentesis ()
//dentro de los parentesis escribiremos la palabra desitno. abriremos y cerraremos llaves {}
//dentro de las llaves escribiremos if seguido de parentesis () 
//dentro de estos parentesis escribiremos nuevamente destino === y el string (que es el valor para este ejemplo) "Brasil" abrimos y cerramos llaves {}
//dentro de estas llaves escribiremos console.log ("Gire a la IZQUIERDA") y terminamos con un punto y coma ;
//al terminar las lalves del primer if (linea 4 en este ejemplo) escribiremos la palabra else seguido de if y abrimos parentesis ()
//dentro de los parentesis escribiremos la palabra destino === y el string "Argentina" y se abren llaves {}
//dentro de las llaves escribimos console.log ("Gire a la DERECHA") y terminamos con un punto y coma ;

//esto es una funcion que recibe el parametro de destino
//dependiendo del destino que ingresemos, esta funcion nos dara alguna respuesta 

//Si se ingresa una respuesta que no sea ninguna de las especificadas no pasaria nada
//por lo que podemos agregar una sentencia else 

//los condicionales tienen una estructura
//lo primero es la palabra reservada if y esto nos indica que a continuacion tendremos un condicional 
//Seguido tenemos los parentesis y dentro tenemos la condicion que sempre se va a resumir en una comparacion booleana 
//si la condicion se cumple (es decir que sea true) se va a ejecutar el cuerpo de este condicional (lo que se encuentra dentro de las llaves)
//Si es False, se va a saltear este codigo y JS continua con la ejecucion del codigo siguiente 
//Luego tenemos la otra palabra reservada else 
//esta palabra nos permite avisarle a nuestro codigo que hay una sentencia mas
//podemos repeitr la sentencia else pro cada condicion if que tengamos 
//en caso que se quede una condicion NO es necesario que aclaremos con la palabra if
//la palabra reservada else abarca el resto de los condicionales posibles
// el problema de anidar muchos condicionales es que hacen a nuestro codigo poco legible y escalable asi que vamos a ver maneras para mejorar la eficiencia de nuestro codigo 
//tambien se pueden ocupar otros operadores de comparacion 

function puedeManejar(edad) {
    if (edad >= 18) {
        console.log ("Puede Manejar");
    } else {
        console.log ("Te habla tu mama");
    }
}

puedeManejar (33);
puedeManejar (16);

//Los resultados a estos parametros es:
// "Puede Manejar"
// "Te habla tu mama"

// Nuestro codigo tome diferentes caminos, dependiendo de ciertas condiciones.
//y como estructurar y anidar condicionales 