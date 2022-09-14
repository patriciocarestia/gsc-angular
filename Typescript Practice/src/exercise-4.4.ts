interface EggLayer {
    layEggs(): void;
}

interface Flyer {
    fly(height: number): void;
}

interface Swimmer {
    swim(depth: number): void;
}

// Some classes and functions was renamed adding the sufix "2" in order to solve the duplicate name error
// For example, the Bird class in this file was renamed to "Bird2". 

// Type Alias
type Animal = Bird2 | Fish2;
type BirdLike = EggLayer & Flyer;
type FishLike = EggLayer & Swimmer;

class Bird2 implements BirdLike {
    constructor(public species: string) { }
    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }
    fly(height: number): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish2 implements FishLike {
    constructor(public species: string) { }
    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth: number): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal2(): Animal {
    const animals: (Animal)[] = [
        new Bird2('puffin'),
        new Bird2('kittiwake'),
        new Fish2('sea robin'),
        new Fish2('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal2(animal: Animal = getRandomAnimal2()): string  {
    if(animal instanceof Fish2) {
        animal.swim(10)
    }else if(animal instanceof Bird2) {
        animal.fly(10);
    }
    return animal.species;
}

console.log('[Ejercicio 4.4]',
    `Tenemos un ${interrogateAnimal2()} en nuestras manos!`);