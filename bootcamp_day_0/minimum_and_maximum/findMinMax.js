/**
 * Created by koyexes on 1/6/2017.
 */
'use strict'

module.exports = {
    findMinMax : function (arrayOfNumbers) {
            var outputArray = [];
            try {
                var minimumNumber = (typeof arrayOfNumbers[0] !== "number") ? parseInt(arrayOfNumbers[0]) : arrayOfNumbers[0];
                var maximumNumber = (typeof arrayOfNumbers[0] !== "number") ? parseInt(arrayOfNumbers[0]) : arrayOfNumbers[0];
                for (var index = 1; index < arrayOfNumbers.length; index++) {
                    var num = (typeof arrayOfNumbers[index] !== "number" ) ? parseInt(arrayOfNumbers[index]) : arrayOfNumbers[index];
                    minimumNumber = (num < minimumNumber) ? num : minimumNumber;
                    maximumNumber = (num > maximumNumber) ? num : maximumNumber;
                }
                switch (minimumNumber === maximumNumber) {
                    case true:
                        outputArray.push(minimumNumber);
                        break;
                    default:
                        outputArray.push(minimumNumber);
                        outputArray.push(maximumNumber);
                        break;
                }
            } catch (err) {
                console.log(err);
            }

            return outputArray;
    }
}

