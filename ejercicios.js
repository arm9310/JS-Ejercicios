// Encontrar puntos totales en un juego de basketball 
// Hay valores de 2 puntos por canasta y 3 por canasta  // 


// Encontrar cuantas patas de animales hay en total 
// gallinas = 2 // vacas = 4 // cabras = 4  


// Encontrar cantidad de FPS dados minutos  
//1seg = 60 fps

// escribir una funcion que acepte un angulo en radianes y retorne un angulo en grados

// Encontrar la poblacion de la tierra en 3 decadas a partir de cantidad de personas
// poblacion(3248, 6) -> 5408

// Conviertan un Array de caracteres  -> 'Zabdiel'
const arrayName = ['z','a','b','d','i','e','l'];


const arrayToString = arr => {
    return arr.join('_');
}

console.log(arrayToString(arrayName));

const circleSquare = (r, a) => {
    const circ = 2 * Math.PI * r;
    const per = Math.sqrt(a) * 4;
    
   return (circ > per)  ? true : false;
}

console.log(circleSquare(16, 625));

// Calculate Kinetic Energy
// KE = (1/2) mv^2

// (60, 3) -> 270

// (45, 10) -> 2250

// (63.5, 7.35) -> 171

// Calculate Kinetic Energy
// KE = (1/2) mv^2

// (60, 3) -> 270

// (45, 10) -> 2250

// (63.5, 7.35) -> 1715


const calcKineticE = (m , v) => {
    return (1/2) * m * (v ** 2);
}

console.log(calcKineticE(45, 10));


// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio



// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion
