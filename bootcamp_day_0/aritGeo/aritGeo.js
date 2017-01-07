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
                        try{
                            var difference = (typeof arrayOfNumbers[1] !== "number" ? parseInt(arrayOfNumbers[1]) : arrayOfNumbers[1] ) - (typeof arrayOfNumbers[0] !== "number" ? parseInt(arrayOfNumbers[0]) : arrayOfNumbers[0] );
                            var ratio = (typeof arrayOfNumbers[1] !== "number" ? parseInt(arrayOfNumbers[1]) : arrayOfNumbers[1] ) / (typeof arrayOfNumbers[0] !== "number" ? parseInt(arrayOfNumbers[0]) : arrayOfNumbers[0] );
                            var aritFlag = true, geoFlag = true;
                            for (var index = 2; index < arrayOfNumbers.length; index++) {
                                aritFlag = ((typeof arrayOfNumbers[index] !== "number" ? parseInt(arrayOfNumbers[index]) : arrayOfNumbers[index]) - (typeof arrayOfNumbers[index - 1] !== "number" ? parseInt(arrayOfNumbers[index - 1]) : arrayOfNumbers[index - 1]) ) === difference ? true : false;

                                 geoFlag = ((typeof arrayOfNumbers[index] !== "number" ? parseInt(arrayOfNumbers[index]) : arrayOfNumbers[index]) / (typeof arrayOfNumbers[index - 1] !== "number" ? parseInt(arrayOfNumbers[index - 1]) : arrayOfNumbers[index - 1]) ) === ratio ? true : false;
                                //aritFlag = ((arrayOfNumbers[index] - arrayOfNumbers[index - 1]) === difference) ? true : false;
                              //  geoFlag = ((arrayOfNumbers[index] / arrayOfNumbers[index - 1]) === ratio) ? true : false;
                                if (aritFlag === false && geoFlag === false) {
                                    break;
                                }
                            }
                            return ((aritFlag === true) ? 'Arithmetic' : ((geoFlag === true) ? 'Geometric' : -1));
                        } catch (err) {
                            return -1;
                        }


                        break;
                    default:
                        return -1;
                        break;
                }
                break;
        }
    }
}

