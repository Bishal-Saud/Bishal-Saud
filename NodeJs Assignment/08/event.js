const events = require('events')


const eventEmitter = new events.EventEmitter();

function subscribeMessage(channelname){
    console.log(`Thanks for subscribing to ${channelname}`);
}
// eventEmitter.addListener('subscribe',subscribeMessage)
// eventEmitter.emit('subscribe','collegeWallah');

// 09 removing event listener 

eventEmitter.removeListener('subscribe',subscribeMessage)
eventEmitter.emit('subscribe','collegeWallah');
