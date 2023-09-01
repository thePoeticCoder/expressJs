// To put it simple, generator has two features:
// one can choose to jump out of a function and let outer code to determine when to jump back into the function.
// the control of asynchronous call can be done outside of your code
// The most important feature in generators — we can get the next value in only
//  when we really need it, not all the values at once. And in some situations it can be very convenient.