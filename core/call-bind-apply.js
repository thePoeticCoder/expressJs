
//call
// The call method binds the this value to the function and executes the function.
//  It takes the this value and a list of arguments as parameters. Then, 
//  it returns the value returned by the function, which is called using the call method.
//in arrow function it will not work this argument will be undefined.

function test(arg1, arg2){
  console.log(this.num, arg1, arg2); // 100, 10, 20
}

test.call({num: 100}, 10, 20);

//apply
//The apply method binds the this value to the function and executes the function.
// It takes the this value and a single array object as parameters, 
//and it returns the value returned by the function, which is called using the apply method.

function test(...arguments){
  console.log(this.num, arguments);//100, [1,2,3]
}

test.apply({num: 100}, [1,2,3]); 


//bind
//The bind method binds the this value to the function and returns a new function. However,
// we still need to separately invoke the returned function.

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
console.log(fullName());

// call: binds the this value, invokes the function, and allows you to pass a list of arguments.

// apply: binds the this value, invokes the function, and allows you to pass arguments as an array.

// bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.