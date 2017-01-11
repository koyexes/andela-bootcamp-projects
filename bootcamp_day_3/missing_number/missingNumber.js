/**
 * Created by koyexes on 1/11/2017.
 */

var findMissing = (array1, array2) => {
    var missingNumber;
    switch ((array1.length === 0) || (array2.length === 0) || (array1.length === array2.length)) {
        case true:
            return 0;
            break;
        default:
          var smallerArray = (array1.length > array2.length) ? array2 : array1;
          var largerArray = (array1.length < array2.length) ? array2 : array1;
          largerArray.some((value) => {
               missingNumber = value;
               return !(smallerArray.some((value2) =>  value === value2 ))
          });
          break;

    }
     return missingNumber;
};

module.exports = findMissing