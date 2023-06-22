var http = require("http");

var server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log("Server is listening to port 3000");
});

function handleRequest(req, res) {
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.end("Hello!");
}