const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        let eventArg = {
            id: 1,
            name: "Ohio"
        }
        this.emit("onMessageLogged", eventArg);
    }
}

module.exports = Logger;