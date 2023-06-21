let url = require("url");

urlString = "https://airindia.com/fares/calculate?from=delhi&to=detroit";

let parsedURL = url.parse(urlString);

console.log(parsedURL.query, parsedURL.pathname, parsedURL.protocol);

console.log(url.parse(parsedURL.query));
