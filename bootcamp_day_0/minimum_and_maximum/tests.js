  'use strict';
  var myApp = require('./findMinMax.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1,4]);
      })

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      })

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

    describe('Return the min and max number in the list in a new list follows `[min , max]` for an array input contain string datas', function () {
      it('should return [1,4] for ["1", "2", "3" , "4"]', function () {
        expect(myApp.findMinMax(["1", "2", "3" , "4"])).toEqual([1,4]);
      });

      it('should return [4, 6] for ["6", "4"]', function () {
        expect(myApp.findMinMax(["6", "4"])).toEqual([4, 6]);
      });

      it('should return -1 for ["string", "4"]', function () {
        expect(myApp.findMinMax(["string", "4"])).toEqual([NaN, NaN]);
      });

    });

    describe("Case for a non Array argument", function () {
        it("should return -1 for 3", function () {
            expect(myApp.findMinMax(3)).toEqual(-1);
        });
        it("should return -1 for 'hello'", function () {
            expect(myApp.findMinMax('hello')).toEqual(-1);
        });
    });

  });

