const users= [
    { f:'a',l:'b',a:23},
    { f:'b',l:'c',a:29},
    { f:'j',l:'h',a:2},
    { f:'q',l:'m',a:29},
    { f:'z',l:'c',a:28},
    { f:'s',l:'f',a:23}
];

const fullName=users.map((user)=>user.f+" "+user.l);

const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    [ssn]: '123-345-789'
};

const kv = Object.entries(person);

console.log(kv)

let amount = +0,
    volume = -0;
console.log(Object.is(amount, volume)); //false
objectName ?. propertyName
objectName ?. [expression] //optional chaining property
//console.log(fullName);//[ 'a b', 'b c', 'j h', 'q m', 'z c', 's f' ]

//for objects 
//Primitive values (null, undefined, boolean, number, string, symbol, and BigInt)

//Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and store it on the stack.

// Javascript has two types of values: primitive values and reference values.
// You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.
// Copying a primitive value from one variable to another creates a separate value copy. It means that changing the value in one variable does not affect the other.
// Copying a reference from one variable to another creates a reference so that two variables refer to the same object. This means that changing the object via one variable reflects in another variable.