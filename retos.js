/* Reto3 */

// Señalar cuales días  son laborables y  en que horas se trabaja
const diasLaborables = [1, 2, 3, 4, 5]; // L a V ( 0 es Domingo) 
const horaInicioLaboral = 9; // 9 AM
const horaFinLaboral = 18; // 6 PM

// Función para determinar si un día es laborable
function esDiaLaborable(fecha) {
  const dia = fecha.getDay(); // Obtener el día de la semana
  const hora = fecha.getHours(); // Obtener la hora del día (0 a 23)

  if (diasLaborables.includes(dia) && hora >= horaInicioLaboral && hora < horaFinLaboral) {
    return true;
  } else {
    return false;
  }
}

const fecha = new Date("2023-02-20, 11:30:00"); // Jueves 17 de febrero de 2023 a las 10:30 AM
if (esDiaLaborable(fecha)) {
  console.log("Es laborable");
} else {
  console.log("No es laborable");
}



/* RETO 4 */


let i = 0, count = 0;
const countTrue = arrayTrue =>{
    if(arrayTrue[i] == true){
    count ++;
    }
    if (i <= arrayTrue.length){
    i++;
    countTrue (arrayTrue);
    }
    return count;
}

    console.log(countTrue([true, false, true, true, false]));

    // Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

function piramideTriangular(nivel) {
  return (nivel * (nivel + 1)) / 2;
}

piramideTriangular(1); // devuelve 1
piramideTriangular(2); // devuelve 3
piramideTriangular(3); // devuelve 6
piramideTriangular(4); // devuelve 10
piramideTriangular(5); // devuelve 15

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

function proporcionAreaPais(nombrePais, areaPais) {
  // Area total de la tierra en km^2
  const areaTierra = 148940000;
  
  // Calcular la proporción del área del país
  const proporcionArea = (areaPais / areaTierra) * 100;
  
  // Devolver la proporción del área del país con dos decimales
  return `${nombrePais} ocupa el ${proporcionArea.toFixed(2)}% del área total de la tierra.`;
}
console.log(proporcionAreaPais('Rusia', 17100000)); // Devuelve "Rusia ocupa el 11.47% del área total de la tierra."
console.log(proporcionAreaPais('Australia', 7692024)); // Devuelve "Australia ocupa el 5.16% del área total de la tierra."
console.log(proporcionAreaPais('Japón', 377944)); // Devuelve "Japón ocupa el 0.25% del área total de la tierra."

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

function flipZeroOne(input) {
  const lookup = [1, 0];
  return lookup[input];
}

console.log(flipZeroOne(0)); // Devuelve 1
console.log(flipZeroOne(1)); // Devuelve 0
console.log(flipZeroOne(0.5)); // Devuelve undefined

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

function getOnlineUsers(users) {
  const count = users.length;

  switch (count) {
    case 0:
      return "No hay nadie en linea";
    case 1:
      return `${users[0]} esta en linea`;
    case 2:
      return `${users[0]} y ${users[1]} estan en linea`;
    default:
      return `${users[0]} y ${count - 1} mas estan en linea`;
  }
}

console.log(getOnlineUsers([])); // Devuelve "No hay nadie en linea"
console.log(getOnlineUsers(['user1'])); // Devuelve "user1 esta en linea"
console.log(getOnlineUsers(['user1', 'user2'])); // Devuelve "user1 y user2 estan en linea"
console.log(getOnlineUsers(['user1', 'user2', 'user3', 'user4'])); // Devuelve "user1 y 3 mas estan en linea"
