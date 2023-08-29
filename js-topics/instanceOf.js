function Person(name) {
  this.name = name;
}

let p1 = new Person('John');

console.log(p1 instanceof Person); // true

