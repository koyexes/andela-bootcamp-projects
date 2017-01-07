/**
 * Created by koyexes on 1/6/2017.
 * use
 */

'use strict'
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
