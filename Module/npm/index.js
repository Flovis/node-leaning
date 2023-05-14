const logEvents = require("./logEvent");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
//initialize objet
const myEmitter = new MyEmitter();

// add listenner for the logEvent
myEmitter.on("log", (msg) => logEvents(msg));

// Emit
setTimeout(() => {
    myEmitter.emit("log", "the emitter is imitted");
}, 2000);
