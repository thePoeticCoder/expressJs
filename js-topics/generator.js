// To put it simple, generator has two features:
// one can choose to jump out of a function and let outer code to determine when to jump back into the function.
// the control of asynchronous call can be done outside of your code
// The most important feature in generators — we can get the next value in only
//  when we really need it, not all the values at once. And in some situations it can be very convenient.
//Generator-Object : Generator functions return a generator object. Generator objects are used either by calling the next method on the generator object or using the generator object in a “for of” loop (as shown in the above program) 
//The Generator object is returned by a generating function and it conforms to both the iterable protocol and the iterator protocol.

// Generate Function generates three 
// different numbers in three calls
function* fun() {
    yield 10;
    yield 20;
    yield 30;
}
  
// Calling the Generate Function
let gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);