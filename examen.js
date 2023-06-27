/*
Escribe una funcion que q partir de un arreglo de numeros enteros, 
pueda encontrar tanto el valor mayor como el valor menor y al finalizar 
retornar la diferencia entre ambos
 * Complete the 'mayorMenosMenor' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY numeros as parameter.
 */

function mayorMenosMenor(numeros) {
    //Tu código aquí
      let mayor = numeros[0];
  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  return mayor - menor
}


/*
2 Deberas escribir una funcion que recibe como argumento 2
arreglos de actividades (strings) y retornar un nuevo arreglo con las
actividades (strings) que tengan en comun ambos arreglos (personas)
 * Completa la función actividadesEnComun a continuación.
 *
 * La función debería retornar un ARREGLO DE STRINGS.
 * La función acepta dos ARREGLOS DE STRINGS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */


function actividadesEnComun(persona1, persona2) {
    // Tu código aquí
    const actividadesComunes = [];
    
    for (let i=0; i < persona1.length; i++) {
        const actividad = persona1[i];
        if(persona2.includes(actividad)){
            actividadesComunes.push(actividad);
        }
    }
    return actividadesComunes; 
}


/*
3 Definir una clase Alumno con sus propiedades y metodos.
las propiedades de la clase alumno son:
nombre
apellido
cohorte
grupoDeAmigos
notasDeCheckpoints

El constructor de la clase recibe esos cinco datos por parametro.
Los metodos propios de la clase Alumnos son:

countAmigos: retorna la cantidad de amigos del alumno
addAmigo: permite agregar un nuevo elemento al arreglo de amigos
getNotas: retorna el arreglo de notas de checkpoints del alumno 
addNota: agrega un nuevo elemento al arreglo de notas de checkpoints
presentacion: retorna un string coneteniendo el nombre, apellido y cohorte del alumno 

La nueva instancia creada, alumno1, debera tener
alumno1.addAmigo("Neville", "Longbottom")
alumno1.countAmigos()        // debería retornar 3

alumno1.getCohorte()       // debería retornar 1
alumno1.presentacion()     // debería retornar "Hola, soy Harry Potter del cohorte 1"

alumno1.addNota(7)
alumno1.getNotas()         // debería retornar [6, 7, 6, 9, 7]

El constructor recibe como parametros
nombre: string
apellido: string
cohorte: entero
grupoDeAmigos: arreglo de objetos, donde cada objeto tiene propiedades nombre (string) y apellido (string)
notasDeCheckpoints:arreglo de enteros

el metodo countAmigos retorna un entero que indica la cantidad de amigos del alumno
El metodo countAmigos no recibe parametro(s)

el metodo addAmigo no retorna nada
el metodo addAmigo recibe por parametro(s)
nombre: string
apellido: string

el metodo getNota retorna un arreglo de enteros.
el metodo getNota recibe como parametro
nota: entero

El metodo de presentacion retorna el string "Hola, soy nombre apellido del cohorte cohorte" donde nombre, apellido y cohorte son las propiedades del alumno.
El metodo presentacion no recibe parametros 
 * Completa la clase 'Alumno' a continuación.
 *
 * No modifiques nada por fuera del cuerpo de los métodos.
 */

class Alumno {
    constructor(nombre, apellido, cohorte, grupoDeAmigos, notasDeCheckpoints) {
        // Inicializar las propiedades del alumno con los valores recibidos como argumento
        // tu código aquí
        this.nombre = nombre;
        this.apellido = apellido;
        this.cohorte = cohorte;
        this.grupoDeAmigos = grupoDeAmigos;
        this.notasDeCheckpoints = notasDeCheckpoints;
    }
    
    countAmigos() {
        // Retorna la cantidad de amigos del alumno
        // tu código aquí
        return this.grupoDeAmigos.length;
    }

    addAmigo(nombre, apellido) {
        // Agregar un objeto: { nombre: nombre, apellido: apellido }
        // al arreglo de amigos del alumno.
        // tu código aquí
        this.grupoDeAmigos.push({nombre, apellido });
    }

    getNotas() {
        // tu código aquí
        return this.notasDeCheckpoints;
    }

    addNota(nota) {
        // Agrega un nuevo elemento al arreglo de notas del alumno
        // tu código aquí
        this.notasDeCheckpoints.push(nota);
    }

    presentacion() {
        // Retorna nombre, apellido y cohorte del alumno dentro del string 'Hola, soy ______ _____ del cohorte ____'
        // tu código aquí
        return 'Hola, soy ${this.nombre}  ${this.apellido} del cohorte ${this.cohorte}';
        
    }
}

/*
4 Escribir una funcion que reciba un objeto y lo 
retorne con los pares clave-valor intercambiados es decir
que las claves pasen a ser valores y los valores claves 
 * Completa la función 'intercambio' a continuación.
 *
 * La función debe retornar un OBJETO.
 * La función recibe un OBJETO como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function intercambio(objeto) {
    // Tu código aquí
    const nuevoObjeto = {};
    for (let clave in objeto){
        const valor=objeto[clave];
        nuevoObjeto[valor]=clave;
    }
return nuevoObjeto;
}

/*
5 Un ingrediente de cuerta comida esta en mal estado, y hay que sacarlo de la receta junto a los que estan a su lado.
tu tarea es escribir una funcion que va a recibir un menu, una comida y elk ingrediente en cuestion, y si el ingrediente esta en la comida debes retornar un arreglo con el ingrediente y los dos elementos mas cecanos a el (con un indice de digerencia, ya sea para atras o para adelante).
Si no encuentra el ingrediente, debe devovler "El menu esta perfecto" 

 * Completa la función 'ingredienteEnMalEstado' a continuación.
 * Completa la función 'ingredienteEnMalEstado' a continuación.
 *
 * La función debe retornar un ARRAY DE STRING ó un STRING.
 * La función recibe los siguientes parámetro(s):
 *  1. OBJETO 'menu'
 *  2. STRING 'comida'
 *  3. STRING 'ingrediente'
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function ingredienteEnMalEstado(menu, comida, ingrediente) {
    //Tu código aquí
  if (menu.hasOwnProperty(comida)) {
    const ingredientIndex = menu[comida].indexOf(ingrediente);

    if (ingredientIndex !== -1) {
      const startIndex = Math.max(0, ingredientIndex - 2);
      const endIndex = Math.min(menu[comida].length - 1, ingredientIndex + 2);
      const ingredientsToRemove = menu[comida].slice(startIndex, endIndex + 1);
      return ingredientsToRemove;
    }
  }

  return "El menú está perfecto";
}

/*
6 Deberas escribir una funcion que reciba una palabra (string)
como parametro y retorne true en caso de que sea simetrica o false 
en caso de que no lo sea

 * Completa la función 'palabraSimetrica' a continuación.
 *
 * La función deberá retornar un BOOLEANO.
 * La función recibe un STRING 'palabra' como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function palabraSimetrica(palabra) {
    //Tu código aquí
     const longitud = palabra.length;
  for (let i = 0; i < longitud / 2; i++) {
    if (palabra[i] !== palabra[longitud - 1 - i]) {
      return false;
    }
  }
  return true;
}

/*
7 Escribir una funcion que encuentre el string "Wally" dentro
de un arreglo, y retorne el string "Wally en la psosison x"
donde x sea el indice del arreglo que ocupa "Wally"
 * Completa la función 'buscandoAWally' a continuación.
 *
 * La función debe retornar un STRING.
 * La función acepta un ARREGLO DE STRINGS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function buscandoAWally(personajes) {
    // tu código aquí
      const indiceWally = personajes.indexOf('Wally');
  if (indiceWally !== -1) {
    return `He encontrado a Wally en la posicion ${indiceWally}`;
  } else {
    return 'No encontré a Wally :(';
  }
}

/*
8 Escribe una funcion que reciba un arreglo de las ideas y determine
cuantas de ellas son buenas
Una idea buena es un string cuyo valor es "buena", y la manera
de identificar cuantas hay sera la siguiente:
si hay al menos una idea buena, la funcion deberia retornar el 
string "Activa!"
si hay 3 o mas ideas buenas, la funcion deberia retornar el 
string "Jackpot!"
si ninguna es buena, la funcion debera retornar "Fail!"
 * Completa la función 'ideas' a continuación.
 *
 * La función debe retornar un STRING.
 * La función acepta un ARREGLO DE STRINGS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function ideas(listaDeIdeas) {
    // tu código aquí
  const buenas = listaDeIdeas.filter(idea => idea === "buena");
  if (buenas.length >= 3) {
    return "Jackpot!";
  } else if (buenas.length >= 1) {
    return "Activa!";
  } else {
    return "Fail!";
  }
  }