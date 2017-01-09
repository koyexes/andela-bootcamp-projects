/**
 * Created by koyexes on 1/8/2017.
 */
'use strict';
 var object = require('./oop');
 var Animal = object.Animal;
 var Dog = object.Dog;
 var Fish = object.Fish;

 describe("Test Classes", function () {
     it("The pig should be a type of `object`, and an instance of the `Animal` class", function() {
          var pig = new Animal();
          expect(typeof pig).toEqual(typeof {});
          expect(pig instanceof Animal).toBeTruthy();
    });
     it("The newDog should be a type of `object`, and an instance of the `Dog` class", function() {
          var newDog = new Dog();
          expect(typeof newDog).toEqual(typeof {});
          expect(newDog instanceof Dog).toBeTruthy();
    });
     it("The newFish should be a type of `object`, and an instance of the `Fish` class", function() {
          var newFish = new Fish();
          expect(typeof newFish).toEqual(typeof {});
          expect(newFish instanceof Fish).toBeTruthy();
    });

     it("The oop should be called 'Living thing' if no name is passed as a parameter", function() {
          expect(new Animal().getName()).toEqual('Living Thing');
          expect(new Dog().getName()).toEqual('Living Thing');
          expect(new Fish().getName()).toEqual('Living Thing');
     });

      it("The oop name and age should be a property of the oop", function() {
          var newDog  = new Dog('Bingo', 23);
          expect(newDog.getName()).toBe('Bingo');
          expect(newDog.getAge()).toBe(23);
          expect(newDog.getColor()).toBe('black');
      });
      it("The oop instance of both Dog and Fish class should be Animal", function() {
          expect(new Dog() instanceof Animal).toBeTruthy();
          expect(new Fish() instanceof Animal).toBeTruthy();
      });

 });
