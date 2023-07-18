x = 1;
 var a = 5;
 var b = 10;
 var c = function (a, b, c) {
    var x = 10;
    console.log(x); //10  resultado correcto 10
    console.log(a); //5  resultado correcto 8
    var f = function (a, b, c) {
       b = a;
       console.log(b); //5  resultado correcto 8
       b = c;
       var x = 5;
    };
    f(a, b, c);
    console.log(b); //10  resultado correcto 9
 };
 c(8, 9, 10);
 console.log(b); //10  resultado correcto 10
 console.log(x); //1  resultado correcto 1

// /*
// falle en mi resultado proque en la linea 4 hacia referencia a la variable c
// que tenia los valores 8, 9 y 10
// */

 console.log(bar); //1  resultado correcto undefined
 console.log(baz); //2  resultado correcto undefined
 foo();
 function foo() {
    console.log('Hola!'); //undefined  resultado correcto Hola!
 }
 var bar = 1;
 var baz = 2;  //originalmente baz no tenia una variable y por eso nos marcaba error



 var instructor = 'Tony';
 if (true) {
    var instructor = 'Franco';
 }
 console.log(instructor);  //Franco  resultado correcto Franco
// /*
// el resultado fue Franco porque js toma el primer resultado verdadero? (preguntar maniana)
// */



 var instructor = 'Tony';
 console.log(instructor); //Tony  resultado correcto Tony
 (function () {
    if (true) {
       var instructor = 'Franco';
       console.log(instructor); //Franco  resultado correcto Franco
    }
 })();  //auto invocación 
 console.log(instructor); //Tony  resultado correcto Tony
 /* 
 no tuvimos error
 */


 var instructor = 'Tony';
 let pm = 'Franco';
 if (true) {
    var instructor = 'The Flash';
    let pm = 'Reverse Flash';
    console.log(instructor);  //The Flash
    console.log(pm); //Reverse Flash
 }
 console.log(instructor); //Tony resultado correcto The Flash 
 console.log(pm); //Franco
//porque toma el primer resultado correcto? preguntar mañana

 console.log (6 / "3") //2 solo realiza la operacion sin importar si es num o string 
 console.log("2" * "3") //6
 console.log(4 + 5 + "px") //9xp
 console.log ("$" + 4 + 5) //$45
 console.log("4" - 2) // 6
 console.log("4px" - 2) //NaN
 console.log (7 / 0) //infinito
 console.log({}[0])
 console.log(parseInt("09")) //2 resultado correcto 9 pero por que?
 console.log(5 && 2)
 console.log(2 && 5)
 console.log(5 || 0)
 console.log(0 || 5) //5 pero por que?
 console.log([3]+[3]-[10]) //23 pero por que?
 console.log ( 3> 2> 1)
 console.log([2] == ![2])



 function test() {
    console.log(a); //undef
    console.log(foo()); //2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();


 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);


var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); //undef