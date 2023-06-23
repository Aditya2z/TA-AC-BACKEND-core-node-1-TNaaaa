var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(handleRequest);

server.listen(5000, () => {
  console.log("Server is listening to port 5000");
});

function handleRequest(req, res) {
  const requestUrl = req.url;
  const requestMethod = req.method;
  const parsedUrl = url.parse(requestUrl);
  const pathname = parsedUrl.pathname;

  if (requestMethod === "GET" && pathname === "/" || requestMethod === "GET" && pathname === "/index.html") {
    res.writeHead(202, { "Content-Type": "text/html" });
    fs.createReadStream("./index.html").pipe(res);
  }  // check for css requests using url
  else if (requestUrl.split(".").pop() === "css") {
    // set header for css file
    res.setHeader("Content-Type", "text/css");
    // read css file and send it in response
    fs.readFile("./" + requestUrl, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (requestUrl.split(".").pop() === "jpg" || requestUrl.split(".").pop() === "png") {
    // set header for img file
    res.setHeader("Content-Type", "image/jpeg");
    // read img file and send it in response
    fs.readFile("./" + requestUrl, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (requestMethod === "GET" && pathname === "/blog.html" || requestMethod === "GET" && pathname === "/blog") {
    res.writeHead(202, { "Content-Type": "text/html" });
    fs.createReadStream("./blog.html").pipe(res);
  }
}
