var http = require("http");

var server = http.createServer(handleRequest);
server.listen(4000, () => {
    console.log("Server is listening to port 4000");
})

function handleRequest(request, response) {
    response.end("Welcome my friend! Welcome!");
}