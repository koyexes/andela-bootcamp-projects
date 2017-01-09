/**
 * Created by koyexes on 1/8/2017.
 */

var Animal = class Animal {
    constructor(name, age, color, size, weight, height) {
        this.name = name || "Living Thing";
        this.age = age;
        this.color = color || "black";
        this.size = size;
        this.weight = weight;
        this.height = height;
    }

    getName() {
        return this.name;
    }
    setName(param) {
        this.name = param;
    }
    getAge() {
        return this.age;
    }
    setAge(param) {
        this.age = param;
    }
    getColor() {
        return this.color;
    }
    setColor(param) {
        this.color = param;
    }
    getSize() {
        return this.size;
    }
    setSize(param) {
        this.size = param;
    }
    getHeight() {
        return this.weight;
    }
    setHeight(param) {
        this.height = param;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(param) {
        this.weight = param;
    }

    eat() {
        return "Eating";
    }
    move(speed) {
        return `Animal.move() is called. Animal is moving at ${speed}`;
    }

}


var Dog = class Dog extends Animal {
    constructor(name, age, color, size, weight, height, legs, teeth, coat, tail) {
        super(name, age, color, size, weight, height);
        this.legs = legs;
        this.teeth = teeth || true;
        this.coat = coat || false;
        this.tail = tail || true;
    }
    getLegs() {
        return this.legs;
    }
    setLegs(param) {
        this.legs = param;
    }
    hasTeeth() {
        return this.teeth;
    }
    setTeeth(param) {
        this.teeth = param;
    }
    hasCoat() {
        return this.coat;
    }
    setCoat(param) {
        this.coat = param;
    }
    hasTail() {
        return this.tail;
    }
    setTail(param) {
        this.tail = param;
    }
    chew() {
        return "Dog.chew() called";
    }
    eat() {
        return "Dog.eat() called which overrides the Animal.eat()";
    }
    walk() {
        return "Dog.walk() called";
    }
    bark() {
        return "Dog.bark() called";
    }

}

var Fish = class Fish extends Animal {
    constructor(name, age, color, size, weight, height, gills, fins) {
        super(name, age, color, size, weight, height);
        this.gills = gills || true;
        this.fins = fins || true;
    }
    hasGills() {
        return this.gills;
    }
    setGills(param) {
        this.gills = param;
    }
    hasFins() {
        return this.fins;
    }
    setFins(param) {
        this.fins = param;
    }
    swim(speed) {
        return `${this.name} swims at a speed of ${speed}`;
    }

}

module.exports =  {
    Animal,
    Dog,
    Fish
}

