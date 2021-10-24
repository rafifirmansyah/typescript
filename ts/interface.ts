interface ICar {
    model: String;
    make: String;

    display(): void;
}

const Car: ICar = {
    model: 'Prius',
    make: 'Toyota',

    display() {
        console.log(`hi`);
    }
}