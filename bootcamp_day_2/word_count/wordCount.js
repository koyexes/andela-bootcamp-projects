/**
 * Created by koyexes on 1/9/2017.
 */
'use strict'


var words = function (string) {
    var wordCount = {};
    string.trim().split(/[\s.,-]+/).forEach((input) => wordCount.hasOwnProperty(input) ? wordCount[input] += 1 : wordCount[input] = 1);
    return wordCount;
}
module.exports = {
    words
}
