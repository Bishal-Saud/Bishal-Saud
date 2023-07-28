const events = require('events');
const eventEmitter = new events.EventEmitter();

function subscribeMessage(channelname){
    console.log(`Thanks for subscribing to ${channelname}`);
}
eventEmitter.addListener('subscribe',subscribeMessage);
eventEmitter.emit('subscribe','collegeWallah')
console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );

  eventEmitter.setMaxListeners(5);
  console.log(
    `The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`
  );
