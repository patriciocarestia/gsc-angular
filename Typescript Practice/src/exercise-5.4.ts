// Some classes and functions was renamed adding the sufix "2" in order to solve the duplicate name error
// For example, the Animal class in this file was renamed to "Animal2". 

abstract class Animal2 {
    constructor(private name: string) { }
    move(meters: number) {
        console.log(`${this.name} se movio ${meters}m.`);
    }
}

class Snake extends Animal2 {
    move(meters: number = 5) {
        console.log(`Deslizandose ${meters}m.`);
        // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
        // de 5 metros
    }
}

class Pony extends Animal2 {
    move(meters: number = 60) {
        console.log(`Galopando ${meters}m.`);
        // debe invocar al metodo `move` del padre con un galope predeterminado
        // de 60 metros
    }
}

// La clase Animal2 no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.

//const andrew = new Animal2("Andrew el Animal");
//andrew.move(5);

const sammy = new Snake("Sammy la serpiente");
sammy.move();
//console.log(sammy.name); // debe devolver error

const pokey = new Pony("Pokey el pony");
pokey.move(34);
//console.log(pokey.name); // debe devolver error