/**
 * Created by koyexes on 1/10/2017.
 */
'use strict'
var geo = require('./coordinates');

describe("Geographical coordinates", function() {
    var call = function (error, result) {
        if(error) {
            return undefined;
        }
    }
    it("should return undefined if error occurs for a boolean value", function () {
        expect(geo.geocodeAddress(true, call)).toEqual(undefined);
    });
    var fcall = function (error, result) {
            return result;
    };
     it("should return undefined for result for a boolean value", function () {
        expect(geo.geocodeAddress(true, fcall)).toEqual(undefined);
    });

     it("should return undefined for value ',,,,,'", function () {
        expect(geo.geocodeAddress(",,,,,", call)).toEqual(undefined);
    });

});




