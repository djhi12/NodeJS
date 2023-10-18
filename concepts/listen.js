
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js!');
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
