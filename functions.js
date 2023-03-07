// Convertir de F a C

function calcCelcius(fahr) {
    let celc = (fahr -32) * 5 / 9;
    return celc;
}

console.log(calcCelcius(100));
console.log('b' + 'a' + + 'a' + 'a');
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

function calcSquared2(num) {
    const res = num + num;
    console.log(res);
    calcSquared2(res);
}

// recursividad

function recursiveData(x) {
    const res = x + x;
    console.log(res);
    recursiveData(res);
}


const recursive = x => {
    recursiveData(x + x);
}
