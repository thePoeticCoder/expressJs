function add(x, y) {
  return x + y;
}

let result = add.call(this, 10, 20);
console.log(result); // 30

const car = {
  name: 'car',
  start() {
    console.log('Start the ' + this.name);
  },
  speedUp() {
    console.log('Speed up the ' + this.name);
  },
  stop() {
    console.log('Stop the ' + this.name);
  },
};

const aircraft = {
  name: 'aircraft',
  fly() {
    console.log('Fly');
  },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();

//output 
// Start the aircraft
// Speed up the aircraft
// Fly

fn.apply(thisArg, [args]);
const person = {
    firstName: 'John',
    lastName: 'Doe'
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}
let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);

//output Hello John. How are you?

fn.bind(thisArg[, arg1[, arg2[, ...]]])
let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let run = runner.run.bind(flyer, 20);
run();


