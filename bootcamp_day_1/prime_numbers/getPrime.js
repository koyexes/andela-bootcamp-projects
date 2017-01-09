/**
 * Created by koyexes on 1/8/2017.
 */
'use strict'
/*
* This function filters a sequence of numbers and return the prime numbers within the sequence
 */
module.exports = {
    getPrime : function (parameter) {
                    try {
                            var num = (typeof parameter !== "number") ? parseInt(parameter)  : parameter; // checking if the input is a number, if not it tries to parse it
                            if ((num !== NaN) && (num > 1) ) {
                                var size = num - (Math.floor(num / 2)); // calculates the size of the array for the to be filled with sequence number
                                var primeList = []; // an array to hold the prime numbers
                                var  currentNumber = 0; // this variable holds the current number being checked if prime
                                var isPrime = true; // a flag telling whether a number is prime
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
                                                primeList.push(currentNumber); // checks if isPrime flag is true then adds the number to the prime array
                                            }
                                            isPrime = true; // resetting the isPrime flag to its default value
                                            break;
                                    }
                                });
                                return primeList; // returns the the array containing the prime numbers
                            } else {
                                return "no value";
                            }
                    } catch (err){
                        return 'no value';
                    }
    }
}

