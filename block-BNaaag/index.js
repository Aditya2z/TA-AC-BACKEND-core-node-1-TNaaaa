let fs = require("fs");

fs.readFile('./content.md', 'utf8', (err, data) => {
    if (err) {
      console.log("Error:", err);
      return;
    }
    console.log("Asynchronous reading:");
    console.log(data);
  });
  
  try {
    const data = fs.readFileSync('./content.md', 'utf8');
    console.log("Synchronous reading:");
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }

let buff1 = Buffer.alloc(10);

console.log(buff1);

buff1.write("Welcome to buffer");

console.log(buff1.toString());