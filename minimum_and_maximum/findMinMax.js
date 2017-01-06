/**
 * Created by koyexes on 1/6/2017.
 */
'use strict'

module.exports = {
    findMinMax : function (arrayOfNumbers) {
            var outputArray = [];
            var minimumNumber = arrayOfNumbers[0];
            var maximumNumber = arrayOfNumbers[0];
            for (var index = 1; index < arrayOfNumbers.length; index++) {
                minimumNumber = (arrayOfNumbers[index] < minimumNumber) ? arrayOfNumbers[index] : minimumNumber;
                maximumNumber = (arrayOfNumbers[index] > maximumNumber) ? arrayOfNumbers[index] : maximumNumber;
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
            return outputArray;
    }
}

