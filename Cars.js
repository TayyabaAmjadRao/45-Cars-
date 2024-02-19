"use strict";
//written by : TAYYABA RAO
// Date: 18/feb/2024
//Roll no : 00388416
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manfacture, modelName, ...extras) {
    const carInfo = Object.assign({ manfacture,
        modelName }, Object.assign({}, ...extras));
    return carInfo;
}
const car = storeCarInfo('Toyato', 'Camty', { color: 'blue' }, { features: ['navigation', 'sunroof'] });
console.log(car);
