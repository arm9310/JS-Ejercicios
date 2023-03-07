/* Mejores Practicas */

/* camelCase
Case Sensitive
UpperCamelCase
lowCamelCase
Nombres relevantes
No se usan guines 
Palabras Reservadas*/

/* Declarar con var 
numerico*/
var age = 23;
var altura = 1.2;


/*  String */
var name = "Kilian";
var ColorFav = "fa67ff";

/* console.log(typeof(""));
 */

/* Arrays */
var michiNames = ["Pedro", "Juanita", "Pepe"];
var person1  = ['Zabdiel', 'Diaz', 25, true, 'México', 'Té', 'Googleador profesional', 'Gamera'];
var person2 = ['Sergio', 'Gil', 27, true, 'México', 'Whisky', 'Ingeniero'];
var person3 = ['Hugo','Morales', 25, true, 'Mexico', 'Cafe', 'Ingeniero','Peliculas de Terror'];
var person4 = ['Rafael', 'Encinas', 28, true, 'Mexico', 'Cafe', 'Los angeles de evangelion'];


console.log(michiNames);
console.log(michiNames[2]);
console.log(person2[6]);

//  Hoisting es la forma en que se ejecutan las instrucciones de codigo antes de declarar variables o funciones

/* console.log(goodbye);
let goodbye = "bye" */

// El Scope para var solo es de forma global o local
// var global = 'hello';

// function myFunction() {
//     var greeting = 'hola';
// }

// console.log(greeting);

let greeting = 'hola';
let count = 4;

if (count > 3) {
    let greeting = 'hola de nuez';
    if (count == 4) {
        let greeting = 'hola en diferente bloque';
    }
    console.log(greeting);
}

console.log(greeting);
