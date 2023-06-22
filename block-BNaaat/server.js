var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(handleRequest);
server.listen(5000, () => {
    console.log("Server is listening to port 5000");
});

function handleRequest(req, res) {
    let parsedUrl = url.parse(req.url);
    const { pathname } = parsedUrl;
    if(req.method === "GET" && pathname === "/") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Welcome to Homepage");
        res.end();
    }  else if(req.method === "GET" && pathname === "/file") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.readFile("./node.html", (error, content) => {
            res.end(content);
            console.log(content);
        });
    } else if(req.method === "GET" && pathname === "/stream") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream("./node.html").pipe(res);
    } else if(req.method === "GET" && pathname === "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>this is all about NodeJS<h2>");
        res.end();
    } else if(req.method === "POST" && pathname === "/about") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "json");
        res.write("{message: this is a post request}");
        res.end();
    } else {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Page not found");
        res.end();
    }
}