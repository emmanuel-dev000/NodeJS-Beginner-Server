const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello World");
        res.end();
    }
    
    if (req.url === "/api/") {
        res.write(JSON.stringify(["dog", "cat", "human"]));
        res.end();
    }
});
const portNumber = 3000;


server.listen(portNumber);

console.log("Server start on port " + portNumber);
