const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.addListener("onMessageLogged", (eventArg) => {
    console.log(`Hello World ${ eventArg.name }`);
});

let eventArg = {
    id: 1,
    name: "hello mom"
}

emitter.emit("onMessageLogged", eventArg);