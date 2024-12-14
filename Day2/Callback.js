"use strict";
function sample(name, callback) {
    const message = `Hello ${name}`;
    callback(message);
}
function printmsg(msg) {
    console.log(msg);
}
sample("Alice", printmsg);
