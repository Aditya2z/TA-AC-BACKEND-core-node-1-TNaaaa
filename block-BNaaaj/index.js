console.log("Welcome to Nodejs");

var os = require("os");

console.log(os.cpus().length, os.freemem(), os.uptime(), os.version());

// const { readFile, unlink } = require('fs');
const { readFile, unlink } = require("./customfs");
const { time } = require("console");
console.log(readFile, unlink);

let buff1 = Buffer.alloc(12);
buff1.write("I am him");

console.log(buff1.toString());

//Blocking Code
let startTime = Date.now();
while (Date.now() < startTime + 10000) {}
console.log("abc");

//Non-Blocking Code Using Callbacks
console.log("Start");

setTimeout(function() {
  console.log("Callback executed");
}, 1000);

console.log("End");

//Non-Blocking Code Using Promises
console.log("Start");

const delay = (milliseconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

delay(1000)
  .then(() => {
    console.log("Promise resolved");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

console.log("End");

//Non-Blocking Code Using async await
console.log("Start");

const delay1 = (milliseconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, milliseconds);
  });
};

const asyncFunction = async () => {
  await delay1(1000)
    .then(() => {
      console.log("Promise resolved");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

asyncFunction();

console.log("End");


