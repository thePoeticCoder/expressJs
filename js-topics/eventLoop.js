// in microtask queue with high priority;
// Process.nextTick();
// promises.callback();
// async functions
// setTimeout();
// setImmediate();
// setInterval();



// process.nextTick(callback);
// Whenever a new queue of operations is initialized we can think of it as a new tick. 
// The process.nextTick() method adds the callback function to the start of the next event queue. 
// It is to be noted that, at the start of the program 
// process.nextTick() method is called for the first time before the event loop is processed. 
// other calls goes in call back queue 

