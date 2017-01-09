/**
 * Created by koyexes on 1/7/2017.
 */
'use strict'

module.exports = {
    dataTypes: function (parameter) {
        var output;
         switch (typeof parameter) {
             case "string":
                 output = parameter.length;
                 break;
             case "object":
                 output = (parameter instanceof Array) ? ((parameter.length) > 2 ?  parameter[2] : undefined) : "no value"; // checks if the object is an array
                 break;
             case "undefined":
                 output = "no value";
                 break;
             case "boolean":
                 output = parameter;
                 break;
             case "number":
                 output = (parameter > 100) ? "more than 100" : ((parameter < 100) ? "less than 100" : "equal to 100"); // checks if the number is greater than, or less than or equal to 100
                 break;
             default:
                 output = parameter(true);
                 break;
         }
         return output;
    }
}
