//written by : TAYYABA RAO
// Date: 18/feb/2024
//Roll no : 00388416

import { features } from "process";

function storeCarInfo(manfacture: string, modelName: string, ...extras: { [key: string]: any }[]):object{
    const carInfo = {
    manfacture,
    modelName,
    ...Object.assign({}, ...extras)
    };
    return carInfo;
    }

    const car = storeCarInfo('Toyato', 'Camty',{color: 'blue'},{features:['navigation', 'sunroof']});
    console.log(car);