const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});
eventEmitter.emit('start', 23);
//event bubbling 
// The "Event Bubbling" behavior makes it possible for you to handle an event in a parent element 
//instead of the actual element that received the event.
// The pattern of handling an event on an ancestor element is called Event Delegation.

// event listner

//The EventEmitter is a module that facilitates communication/interaction between objects in Node.
// EventEmitter is at the core of Node asynchronous event-driven architecture.
// Many of Node’s built-in modules inherit from EventEmitter including prominent frameworks like Express.js.eve
