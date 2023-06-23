var http = require("http");
var url = require("url");
var fs = require("fs");
const querystring = require('querystring');

// writeCode

// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object
var server1 = http.createServer(handleRequest1);

server1.listen(5000, () => {
  console.log("Server1 is listening to port 5000");
});

function handleRequest1(req, res) {
  console.log(req);
  console.log(res);
  res.end();
}

// Q. create a node server
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

var server2 = http.createServer(handleRequest2);

server2.listen(5100, () => {
  console.log("server2 is listening to port 5100");
});

function handleRequest2(req, res) {
  res.end("My first server in NodeJS");
}

// Q. write code to create a node server
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

var server3 = http.createServer(handleRequest3);

server3.listen(5555, () => {
  console.log("server3 is listening to port 5555");
});

function handleRequest3(req, res) {
  const userAgent = req.headers["user-agent"]; // Extract the User-Agent header value

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`User-Agent: ${userAgent}`);
}

// Q. write code to create a node server
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

var server4 = http.createServer(handleRequest4);

server4.listen(5566, () => {
  console.log("server4 is listening to port 5566");
});

function handleRequest4(req, res) {
  const reqUrl = req.url;
  const reqMethod = req.method;

  console.log(reqUrl, reqMethod);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(` Reuest Url: ${reqUrl},
  Request Method: ${reqMethod}`);
}

// Q. write code to create a node server
//   - add listener on port 7000
//   - also add a callback function to listener with a console `server listening on port 7000`
//   - return entire request headers in response.

var server5 = http.createServer(handleRequest5);

server5.listen(7000, () => {
  console.log("server5 is listening to port 7000");
});

function handleRequest5(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(req.headers));
}

// Q. create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

var server6 = http.createServer(handleRequest6);

server6.listen(3333, () => {
  console.log("server6 is listening to port 3333");
});

function handleRequest6(req, res) {
  res.statusCode = 202;
  res.end();
}

// Q. create a server
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`)

// var server7 = http.createServer(handleRequest7);

// server7.listen(8000, () => {
//   console.log("server7 is listening to port 8000");
// });

// function handleRequest7(req, res) {

//   res.setHeader("Content-Type", "text/html");
//   res.end(`<h3>Welcome to altcampus</h3>`);
// }

// Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

var server7 = http.createServer(handleRequest7);

server7.listen(8000, () => {
  console.log("server7 is listening to port 8000");
});

function handleRequest7(req, res) {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.end(`<h3>Welcome to altcampus</h3>`);
}

// Q. create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

var server8 = http.createServer(handleRequest8);

server8.listen(8888, () => {
  console.log("server8 is listening to port 8888");
});

function handleRequest8(req, res) {
  res.writeHead(202, { "Content-Type": "application/json" });
  res.end(`{success: true, message: 'Welcome to Nodejs'}`);
}

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

var server9 = http.createServer(handleRequest9);

server9.listen(5050, () => {
  console.log("server9 is listening to port 5050");
});

function handleRequest9(req, res) {
  console.log(req.method);
  res.writeHead(202, { "Content-Type": "text/html" });
  res.end(`<h2>posted for first time</h2>`);
}

// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

// var server10 = http.createServer(handleRequest10);

// server10.listen(2345, () => {
//   console.log("server10 is listening to port 2345");
// });

// function handleRequest10(req, res) {
//   const reqMethod = req.method;
//   const reqUrl = url.parse(req.url).pathname;

//   if (reqMethod === "GET" && reqUrl === "/") {
//     res.writeHead(202, { "Content-Type": "text/plain" });
//     res.end(`Aditya Dhanraj`);
//   } else if (reqMethod === "GET" && reqUrl === "/about") {
//     res.writeHead(202, { "Content-Type": "text/html" });
//     fs.readFile("./name.html", (error, content) => {
//       if (error) console.log(error);
//       res.end(content);
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page not found");
//   }
// }

// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.

var server10 = http.createServer(handleRequest10);

server10.listen(2345, () => {
  console.log("server10 is listening to port 2345");
});

function handleRequest10(req, res) {
  const reqMethod = req.method;
  const reqUrl = url.parse(req.url).pathname;

  if (reqMethod === "GET" && reqUrl === "/") {
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.end(`Aditya Dhanraj`);
  } else if (reqMethod === "GET" && reqUrl === "/about") {
    res.writeHead(202, { "Content-Type": "text/html" });
    fs.readFile("./name.html", (error, content) => {
      if (error) console.log(error);
      res.end(content);
    });
  } else if (reqMethod === "GET" && reqUrl === "/users") {
    res.writeHead(202, { "Content-Type": "text/html" });
    fs.readFile("./form.html", (error, content) => {
      if (error) console.log(error);
      res.end(content);
    });
  } else if (reqMethod === "POST" && reqUrl === "/users") {
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.end('Posted for the second time');
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
}

// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

var server11 = http.createServer(handleRequest11);

server11.listen(3456, () => {
  console.log("server11 is listening to port 3456");
});

function handleRequest11(req, res) {
  const reqMethod = req.method;
  const reqUrl = req.url;
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;
  const queryParams = querystring.parse(query);
  const email = queryParams.email;
  console.log(pathname);

  if (reqMethod === "GET" && pathname === "/") {
    res.writeHead(202, { "Content-Type": "text/plain" });
    res.end(`Aditya Dhanraj`);
  } else if (reqMethod === "GET" && pathname === "/about") {
    res.writeHead(202, { "Content-Type": "text/html" });
    fs.readFile("./name.html", (error, content) => {
      if (error) console.log(error);
      res.end(content);
    });
  } else if (reqMethod === "GET" && pathname === "/users") {
    res.writeHead(202, { "Content-Type": "text/html" });
    fs.readFile("./form.html", (error, content) => {
      if (error) console.log(error);
      res.end(content);
    });
  } else if (reqMethod === "POST" && pathname === "/users") {
    res.writeHead(202, { "Content-Type": "application/json" });
    res.end(email);
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
}