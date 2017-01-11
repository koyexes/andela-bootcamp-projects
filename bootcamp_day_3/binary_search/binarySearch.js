/**
 * Created by koyexes on 1/10/2017.
 */

Array.prototype.toTwenty = () => Array.apply(undefined, Array(20)).map((value, index) => index + 1);
Array.prototype.toForty = () => Array.apply(undefined, Array(20)).map((value, index) => (index * 2) + 2);
Array.prototype.toOneThousand = () => Array.apply(undefined, Array(100)).map((value, index) => (index * 10) + 10);
Array.prototype.search = function (number) {
    var lowerLimit = 0;
    var upperLimit = this.length - 1;
    var midPoint;
    var counter = 0;
    var hasFoundIt = false;
    switch (number <= this[lowerLimit] || number >= this[upperLimit]){
        case false:
            
            do{
                 midPoint = Math.floor((upperLimit + lowerLimit) / 2);
                if (this[midPoint] === number) {
                    hasFoundIt = true;
                    break;
                } else {
                    if (number < this[midPoint]) {
                        upperLimit = midPoint - 1;
                    } else {
                        lowerLimit = midPoint + 1;
                    }
                }
                counter++;
            } while (lowerLimit <= upperLimit)

            midPoint = hasFoundIt ? midPoint : -1;
            break;
        default:
            midPoint = (this[lowerLimit] === number) ? lowerLimit : (this[upperLimit] === number ? upperLimit : -1);
            break;
    }
    return {
                count: counter,
                index: midPoint,
                length: this.length
            };
};


module.exports = {
    toTwenty: Array.toTwenty,
    toForty: Array.toForty,
    toOneThousand: Array.toOneThousand
}