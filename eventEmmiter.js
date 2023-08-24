const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 23);
//event bubbling 
// event listner