const events = require('events')


const eventEmitter = new events.EventEmitter();


function eventEmitterHandler(){
    console.log("I am eventhandler !!! made by a self a event i think.")
}


eventEmitter.on('eventhandlersss',eventEmitterHandler);

eventEmitter.emit('eventhandlersss')