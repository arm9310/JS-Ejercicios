// Encontrar puntos totales en un juego de basketball 
// Hay valores de 2 puntos por canasta y 3 por canasta  // 

function puntosTotales(dosPuntos, tresPuntos) {
    const puntosDos = dosPuntos * 2; // puntaje total de canastas de 2 puntos
    const puntosTres = tresPuntos * 3; // puntaje total de canastas de 3 puntos
    const puntajeTotal = puntosDos + puntosTres; // puntaje total del juego
    return puntajeTotal;
  }

  const puntaje = puntosTotales(10, 5);
console.log(puntaje); // Devuelve 35



// Encontrar cuantas patas de animales hay en total 
// gallinas = 2 // vacas = 4 // cabras = 4  

function patasAnimales(numGallinas, numVacas, numCabras) {
    const patasGallinas = numGallinas * 2; // patas totales de las gallinas
    const patasVacas = numVacas * 4; // patas totales de las vacas
    const patasCabras = numCabras * 4; // patas totales de las cabras
    const patasTotales = patasGallinas + patasVacas + patasCabras; // patas totales de todos los animales
    return patasTotales;
  }

  const patasTotales = patasAnimales(10, 5, 3);
console.log(patasTotales); // Devuelve 54


// Encontrar cantidad de FPS dados minutos  
//1seg = 60 fps

function calcularFPS(minutos) {
    const segundos = minutos * 60; // total de segundos en minutos
    const fps = segundos * 60; // total de fps en segundos
    return fps;
  }

  const fpsTotal = calcularFPS(2.5);
console.log(fpsTotal); // Devuelve 9000



// escribir una funcion que acepte un angulo en radianes y retorne un angulo en grados

function radianesAGrados(anguloRad) {
    return anguloRad * (180 / Math.PI);
  }

  const anguloRad = Math.PI / 2;
const anguloGrados = radianesAGrados(anguloRad);
console.log(anguloGrados); // Devuelve 90



// Encontrar la poblacion de la tierra en 3 decadas a partir de cantidad de personas
// poblacion(3248, 6) -> 5408

function poblacion(personas, tasaCrecimiento) {
    const tasaDecimal = tasaCrecimiento / 100; // Convertir la tasa de crecimiento a decimal
    const poblacionEnTresDecadas = personas * Math.pow((1 + tasaDecimal), 3); // Calcular la población en 3 décadas
    return Math.round(poblacionEnTresDecadas); // Redondear el resultado y devolverlo
  }

  poblacion(3248, 6); // Retorna 5408


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

// (63.5, 7.35) -> 1715

function kineticEnergy(m, v) {
    const ke = 0.5 * m * v ** 2;
    return ke;
  }
  

kineticEnergy(60, 3);    // devuelve 270
kineticEnergy(45, 10);   // devuelve 2250
kineticEnergy(63.5, 7.35); // devuelve 171



// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio

function countTrue(arr) {
    return arr.filter(Boolean).length;
  }
  
  console.log(countTrue([true, false, false, true, false])); // Output: 2
  console.log(countTrue([false, false, false, false])); // Output: 0
  console.log(countTrue([])); // Output: 0
  


// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

function mcd(a, b) {
    // Caso base: si b es igual a cero, el mcd es a
    if (b === 0) {
      return a;
    } else { // Caso recursivo: llamada a la función con b y el residuo de a/b
      return mcd(b, a % b);
    }
  }
  

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let prev = fibonacci(n - 1);
      prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
      return prev;
    }
  }
  
  // Ejemplo de uso:
  console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  
