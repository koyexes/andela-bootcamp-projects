/**
 * Created by koyexes on 1/6/2017.
 * use
 */

'use strict'

/*
* this function outputs
* fizzBuzz if input is divisible by 5 and 3,
 * fizz if input is divisible by 3
 * buzz if input is divisible by 5,
 * returns input back if its not divisible by either 3 or 5
 */
module.exports = {
    fizzBuzz: function (num) {
        var number = 0;
        try {
            number = (typeof num !== "number") ? parseInt(num) : num;
            return (((number % 3 == 0) && (number % 5 == 0)) ? 'FizzBuzz' : ((number % 3 == 0) ? "Fizz" : ((number % 5 == 0) ? 'Buzz' : number)));
        } catch (err) {
            console.error(err);
        }

    }

}
