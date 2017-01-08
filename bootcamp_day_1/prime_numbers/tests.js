/**
 * Created by koyexes on 1/7/2017.
 */
'use strict'
var myApp = require("./getPrime");

describe("Prime numbers tests ", function() {
    describe("Case for some values", function () {

        it("should return '[2,3,5]' for a value of 5", function () {
            expect(myApp.getPrime(5)).toEqual([2,3,5]);
        });

        it("should return '[2,3,5,7]' for a value 10", function () {
            expect(myApp.getPrime(10)).toEqual([2,3,5,7]);
        });

        it("should return 'true' for a value 10", function () {
            expect(myApp.getPrime(10) instanceof Array).toBe(true);
        });

        it("should return '[2,3,5,7,11,13]' for a string value '15'", function () {
            expect(myApp.getPrime('15')).toEqual([2,3,5,7,11,13]);
        });

        it("should return 'no value' for a value 'string'", function () {
            expect(myApp.getPrime("string")).toBe('no value');
        });

        it("should return 'no value' for a boolean value 'true'", function () {
            expect(myApp.getPrime(true)).toBe('no value');
        });

        it("should return 'no value' for a value '[]'", function () {
            expect(myApp.getPrime([])).toEqual('no value');
        });

        it("should return 'no value' for a value of -1", function () {
            expect(myApp.getPrime(-1)).toBe('no value');
        });

        it("should return 'no value' for a value of 1", function () {
            expect(myApp.getPrime(1)).toEqual('no value');
        });

        it("should return '[2]' for a value of 2", function () {
            expect(myApp.getPrime(2)).toEqual([2]);
        });

    });
});

