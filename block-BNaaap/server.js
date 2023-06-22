var http = require("http");

var server = http.createServer(handleRequest);

server.listen(4444, () => {
    console.log("Server is listening to port 4444");
})

function handleRequest(req, res) {
    if (req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        res.end("GET Request");
    } else if (req.method === "POST") {
        res.statusCode = 201;
        res.setHeader("Content-type", "text/plain");
        res.end("POST Request");
    } else if (req.method === "PUT") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");
        res.end("PUT Request");
    } else if (req.method === "DELETE") {
        res.statusCode = 204;
        res.end();
    } else {
        res.statusCode = 400;
        res.setHeader("Content-type", "text/plain");
        res.end("Invalid Request");
    }
}
