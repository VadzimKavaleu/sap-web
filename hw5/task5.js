console.log("***Plant***");
class Plant {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    show() {
        console.log(this.name + ", " + this.description);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
    get description() {
        return this._description;
    }
    set description(desc) {
        this._description = desc;
    }
}
let plant = new Plant("Plant", "desc");
console.log(plant.name + "," + plant.description);

console.log("***Fern***");

class Fern extends Plant {
    constructor(name, description, species) {
        super(name, description);
        this.species = species;
    }
    get species() {
        return this._species ;
    }
    set species(species) {
         this._species = species;
    }
    show() {
        console.log(this.name + ", " + this.description+", "+this.species);
    }
}
let fern = new Fern("Fern", "It's fern", "Pteris");
fern.show();

console.log("***Spruce***")

class Spruce extends Plant {
    constructor(name, description, age) {
        super(name, description);
        this.age = age;
    }
    get age() {
        return this._age ;
    }
    set age(age) {
         this._age = age;
    }
    show() {
        console.log(this.name + ", " + this.description+", "+this.age);
    }
}
let spruce = new Spruce("Picea pungens", "Large and slender tree", 15);
spruce.show();

