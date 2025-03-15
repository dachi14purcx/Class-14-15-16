class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log(`${this.make} ${this.model} engine started!`);
    }

    stopEngine() {
        console.log(`${this.make} ${this.model} engine stopped!`);
    }
}

// კლასი გამოსაცემი კონსოლში
const myCar = new Car('Toyota', 'Corolla');
myCar.startEngine();
myCar.stopEngine();


class Animals {
    constructor(animal1, animal2, animal3, animal4, animal5) {
        this.animals = [animal1, animal2, animal3, animal4, animal5];
    }

    makeSound() {
        this.animals.forEach(animal => {
            switch(animal) {
                case 'dog':
                console.log('Woof!');
                break;
                case 'cat':
                console.log('Meow!');
                break;
                case 'cow':
                console.log('Moo!');
                break;
                case 'sheep':
                console.log('Baa!');
                break;
                case 'duck':
                console.log('Quack!');
                break;
                default:
                console.log(`${animal} makes no sound.`);
            }
        });
    }
}

const animalSounds = new Animals('dog', 'cat', 'cow', 'sheep', 'duck');
animalSounds.makeSound();
