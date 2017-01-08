/**
 * Created by koyexes on 1/8/2017.
 */
'use strict'

module.exports = {
    getPrime : function (parameter) {
                    try {
                            var num = (typeof parameter !== "number") ? parseInt(parameter)  : parameter;
                            if ((num !== NaN) && (num > 1) ) {
                                var size = num - (Math.floor(num / 2)); // calculates the size of the array for the to be filled with sequence number
                                var primeList = [];
                                var  currentNumber = 0;
                                var isPrime = true;
                                Array.apply(undefined,Array(size)).map((number , index) => {
                                    switch (index === 0) {
                                        case true:
                                            primeList.push(2);
                                            break;
                                        default:
                                            currentNumber = (index * 2) + 1;
                                            for (var i = 3; i <= Math.sqrt(currentNumber) + 1; i++) {
                                                if ((currentNumber % i) === 0 ){
                                                    isPrime = false;
                                                    break;
                                                }
                                            }
                                            if(isPrime) {
                                                primeList.push(currentNumber);
                                            }
                                            isPrime = true;
                                            break;
                                    }
                                });
                                return primeList;
                            } else {
                                return "no value";
                            }
                    } catch (err){
                        return 'no value';
                    }
    }
}

