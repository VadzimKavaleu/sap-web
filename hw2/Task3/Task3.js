console.log('*** Plant ***');

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

var p = new Plant("Plant", "It's general class");
console.log(p.show());


console.log('*** Fern ***');

function Fern(name, description, hazardClass, inflorescenceSize) {
    Plant.call(this, name, description);
    this.hazardClass = hazardClass;
    this.inflorescenceSize = inflorescenceSize;
    this.getHazardClass = function () {
        return this.hazardClass;
    }
    this.getInflorescenceSize = function () {
        return this.inflorescenceSize;
    }
    this.setHazardClass = function (hazardClass) {
        this.hazardClass = hazardClass;
    }
    this.setInflorescenceSize = function (inflorescenceSize) {
        this.inflorescenceSize = inflorescenceSize;
    }
}
Fern.prototype = Object.create(Plant.prototype);
Fern.prototype.constructor = Fern;
Fern.prototype.show = function () {
    return this.name + ", " + this.description + ", " + this.hazardClass + ", " + this.inflorescenceSize;
}
var f = new Fern('Fern', "It's Fern class", "low", 4);
console.log(f.show());

console.log('*** Spruce ***')

function Spruce(name, description, application, habitat) {
    Plant.call(this, name, description);
    this.application = application;
    this.habitat = habitat;

    this.getApplication = function () {
        return this.application;
    }
    this.getHabitat = function () {
        return this.habitat;
    }
    this.setApplication = function (application) {
        this.application = application;
    }
    this.setHabitat = function (habitat) {
        this.habitat = habitat;
    }

}

Spruce.prototype = Object.create(Plant.prototype);
Spruce.prototype.constructor = Spruce;
Spruce.prototype.show = function () {
    return this.name + ", " + this.description + ", " + this.application + ", " + this.habitat;
}
var s = new Spruce('Spruse', "It's spruce", 'oil', 'coniferous forests');
console.log(s.show());