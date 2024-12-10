function  getValuesBetweenRange(set, min, max) {
    if(!(set instanceof Set)) {
        throw new Error(`El primer argumento debe ser un set, pero se recibio un ${typeof set}`);
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error(`Los valores de min y max deben ser números, pero se recibio ${typeof min} y ${typeof max}`);
    }
    return Array.from(set).filter(value => typeof value === 'number' && value >= min && value <= max);
}

//Para comprobar la función
//try {
//    const numberSet = new Set([15, 20, 25, 30]);
//    const minRange = 10;
//    const maxRange = 30; 
//    const valuesInRange = getValuesBetweenRange(numberSet, minRange, maxRange);
//    console.log(valuesInRange);
//} catch (error) {
//    console.error(error.message);
//}

module.exports = {
 getValuesBetweenRange,
}