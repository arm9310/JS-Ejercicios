const arr = ['a','b','c','d'];


const bucle1 = (arr) => {

    for(let cont = 0; cont == 10; cont++) {
        console.log(cont);
        
    }

}


// const arr = [1,2,3,4,5];
// const arr2 = [1, -563, 999, 0 , -1, -999];

// Encontrar el numero mas grande
// Encontrar el numero mas pequeño
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "25.5 ohms"
// Ohms >= 1


// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];


if (typeof var === “number”) { 
    console.log("Great! Go ahead and run the code!"); 
} else {
    console.log("Oopsydoodle. Check your input!");
}

const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];

names.indexOf('Zabdiel')


// indexOf nos indica en que indice o posicion del array esta el dato que buscamos
const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];

// console.log(names.indexOf('Griselo'));

// indexOf nos indica en que indice o posicion del array esta el dato que buscamos
const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];

// console.log(names.indexOf('Griselo'));

// Pop elimina el ultimo elemento
// console.log(names.pop());
// console.log(names);

// Push agregar un elemento al final del array
// Return es la nueva longitud
// console.log(names.push('Sergio'));
// console.log(names);

// Shift elimina el primer elemento y recorre el resto una posicion hacia atras
names.shift();
console.log(names);

// Unshift
// names.unshift('Hugo');
// console.log(names);

// delete

// delete names[0];
// console.log(names);

// Splice elimina elementos y si es necesario podemos ingresar nuevos en el arreglo
// console.log(names);
// names.splice(1, 0, 'Hugo', 'Carlos');
// console.log(names);

// Slice corta el array de (index inicial, index final) y crea uno nuevo con ese rango
// console.log(names);
// const arr2 = names.slice(2, 4);
// console.log(arr2);


// forEach
// por Cada elemento de un array/objeto/matriz realizar el bloque de codigo
// Comunmente utiliza funciones anonimas para su ejecucion


names.forEach((elemento, index, arr) => {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});

/*
names.forEach(function (elemento, index, arr) {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});
*/

// names.forEach( e => console.log(e));

// arr.forEach(valor, index, arr);


// map
// Conserva la integridad del array/objeto original y crea uno nuevo a partir de instrucciones que le demos

const newNames = names.map(elemento => {
    return elemento.toUpperCase();
});

console.log(newNames);

// Slice corta el array de (index inicial, index final) y crea uno nuevo con ese rango
// console.log(names);
// const arr2 = names.slice(2, 4);
// console.log(arr2);


// forEach
// por Cada elemento de un array/objeto/matriz realizar el bloque de codigo
// Comunmente utiliza funciones anonimas para su ejecucion


// names.forEach((elemento, index, arr) => {
//     console.log(elemento);
//     console.log(index);
//     console.log(arr);
// });

/*
names.forEach(function (elemento, index, arr) {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});
*/

// names.forEach( e => console.log(e));
// arr.forEach(valor, index, arr);

