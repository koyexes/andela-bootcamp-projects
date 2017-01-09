/**
 * Created by koyexes on 1/9/2017.
 */

function helperFunction(parameter) {
    return (parameter.length === 0) ? "" : (helperFunction(parameter.substring(1)) + parameter.charAt(0));
}

function reverseString(string) {
    var output = helperFunction(string.trim()); // calls the helper function as a callback
    return (output.trim().length === 0) ? null : (output === string ? true : output);
}

module.exports = {
    reverseString
}