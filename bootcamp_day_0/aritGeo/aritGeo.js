/**
 * Created by koyexes on 1/7/2017.
 */
'use strict'

module.exports = {
    aritGeo: function (arrayOfNumbers) {
        switch (arrayOfNumbers.length) {
            case 0:
                return 0;
                break;
            default:
                switch (arrayOfNumbers.length > 2) {
                    case true:
                        var difference = arrayOfNumbers[1] - arrayOfNumbers[0];
                        var ratio = arrayOfNumbers[1] / arrayOfNumbers[0];
                        var aritFlag = true, geoFlag = true;
                        for (var index = 2; index < arrayOfNumbers.length; index++) {
                            aritFlag = ((arrayOfNumbers[index] - arrayOfNumbers[index - 1]) === difference) ? true : false;
                            geoFlag = ((arrayOfNumbers[index] / arrayOfNumbers[index - 1]) === ratio) ? true : false;
                            if (aritFlag === false && geoFlag === false) {
                                break;
                            }
                        }
                        return ((aritFlag === true) ? 'Arithmetic' : ((geoFlag === true) ? 'Geometric' : -1));
                        break;
                    default:
                        return -1;
                        break;
                }
                break;
        }
        
    }

}

