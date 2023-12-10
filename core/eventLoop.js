// in microtask queue with high priority;
// Process.nextTick();
// promises.callback();
// async functions
// setTimeout();
// setImmediate();
// setInterval();


/// ? order of execution
// current event loop
// nextTick
// timeout
// immediate


// process.nextTick(callback);
// Whenever a new queue of operations is initialized we can think of it as a new tick. 
// The process.nextTick() method adds the callback function to the start of the next event queue. 
// It is to be noted that, at the start of the program 
// process.nextTick() method is called for the first time before the event loop is processed. 
// other calls goes in call back queue 

//timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
// pending callbacks: executes I/O callbacks deferred to the next loop iteration.
// idle, prepare: only used internally.
// poll: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.
// check: setImmediate() callbacks are invoked here.
// close callbacks: some close callbacks, e.g. socket.on('close', ...)
let count = 0
const cb = () => {
    console.log(`Processing nextTick cb ${++count}`)
    //process.nextTick(cb)
}
setImmediate(() => console.log('setImmediate is called'))
setTimeout(() => console.log('setTimeout executed'), 0)
process.nextTick(cb)
console.log('Start')

//? /////////////////////////////////////////////////////////////////////////////////////////

// let count1 = 0
// const cb1 = () => {
//     console.log(`Processing setImmediate cb ${++count1}`)
//     setImmediate(cb)
// }
// setImmediate(cb1)
// setTimeout(() => console.log('setTimeout executed'), 100)
// console.log('Start')

