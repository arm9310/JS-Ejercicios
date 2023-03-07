// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]


function antipode(array) {
    // Si el array tiene una longitud impar, eliminamos el elemento del medio
    if (array.length % 2 !== 0) {
      array.splice(Math.floor(array.length / 2), 1);
    }
  
    // Dividimos el array en 2 partes iguales
    const middle = array.length / 2;
    const part1 = array.slice(0, middle);
    const part2 = array.slice(middle);

    const sumArray = part1.map((num, index) => num + (1 / part2[index]));
  
    // Dividimos  entre 2
    const result = sumArray.map(num => num / 2);
  
    return result;
  }
  
  // Ejercicio
  const array = [2, 4, 6, 7, 9];
  const result = antipode(array);
  console.log(result); 


// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

function arrayMultiplos(numero, longitud) {
  const result = [];

  for (let i = 1; i <= longitud; i++) {
    result.push(numero * i);
  }

  return result;
}

console.log(arrayMultiplos(2, 10)); // Devuelve [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(arrayMultiplos(17, 6)); // Devuelve [17, 34, 51, 68, 85, 102]
console.log(arrayMultiplos(5, 3)); // Devuelve [5, 10, 15]



// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

function positiveDom(array) {
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }

  return positiveCount > negativeCount;
}

console.log(positiveDom([1, -2, 55, 10])); // Devuelve true
console.log(positiveDom([-1, -3, -5, 4, 6767])); // Devuelve false
console.log(positiveDom([0, 1, 2, 3, -4])); // Devuelve true



// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

function promedioAntipode(array) {
  // Paso 1: dividir el array en 2 partes iguales
  const mid = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid).reverse();

  // Paso 2: sumar cada número de la primera parte con los números inversos de la segunda parte
  const sum = firstHalf.map((num, i) => num + secondHalf[i]);

  // Paso 3: dividir cada número del array final entre 2
  const result = sum.map(num => num / 2);

  return result;
}

console.log(promedioAntipode([1, 2, 3, 5, 22, 6])); // Devuelve [3.5, 12, 4]
console.log(promedioAntipode([1, 2, 3, 4, 5, 6])); // Devuelve [3.5, 7, 4.5]
console.log(promedioAntipode([10, 20, 30, 40])); // Devuelve [25, 25]

