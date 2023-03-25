
const Logger = require('./logger');
const logger = new Logger();

logger.on("onMessageLogged",  (eventArg) => {
    console.log(`Hello World ${ eventArg.id }`);
})

logger.log("mensahe");