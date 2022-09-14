"use strict";
class Bird2 {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de aves.');
    }
    fly(height) {
        console.log(`Volando a la altura de ${height} metros.`);
    }
}
;
class Fish2 {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth) {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
function getRandomAnimal2() {
    const animals = [
        new Bird2('puffin'),
        new Bird2('kittiwake'),
        new Fish2('sea robin'),
        new Fish2('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}
function interrogateAnimal2(animal = getRandomAnimal2()) {
    if (animal instanceof Fish2) {
        animal.swim(10);
    }
    else if (animal instanceof Bird2) {
        animal.fly(10);
    }
    return animal.species;
}
console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal2()} en nuestras manos!`);
