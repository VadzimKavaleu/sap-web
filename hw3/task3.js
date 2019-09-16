console.log("***Plant***");

function Plant(name, description) {
    this.name = name;
    this.description = description;
    this.getName = function () {
        return this.name;

    }
    this.getDescription = function () {
        return this.description;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.setDescription = function (description) {
        this.description = description;
    }
}
Plant.prototype.show = function () {
    return this.name + ", " + this.description;
}

var p = new Plant("Plant", "It's plant");
console.log(p.show());

console.log("***Fern***");

function Fern(name, description, species) {
    Plant.call(this, name, description);
    this.species = species;
    this.getSpecies = function () {
        return this.species;
    }
    this.setSpecies = function (species) {
        this.species = species;
    }
}
Fern.prototype = Object.create(Plant.prototype);
Fern.prototype.constructor = Fern;
Fern.prototype.show = function () {
    return this.name + ", " + this.description + ", " + this.species;
}

var f = new Fern("Fern", "It's fern", "Pteris");
console.log(f.show());

console.log("***Spruce***")

function Spruce(name, description, age) {
    Plant.call(this, name, description);
    this.age = age;
    this.getAge = function () {
        return this.age;
    }
    this.setAge = function (age) {
        this.age = age;
    }
}
Spruce.prototype = Object.create(Plant.prototype);
Spruce.prototype.constructor = Spruce;
Spruce.prototype.show = function () {
    return this.name + ", " + this.description + ", " + this.age;
}

var s = new Spruce("Picea pungens", "Large and slender tree", 15);
console.log(s.show());