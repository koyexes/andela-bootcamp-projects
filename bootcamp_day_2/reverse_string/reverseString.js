/**
 * Created by koyexes on 1/9/2017.
 */

function helperFunction(parameter) {
    return (parameter.length === 0) ? "" : (helperFunction(parameter.substring(1)) + parameter.charAt(0));
}