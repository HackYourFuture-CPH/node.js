const http = require('http');
const fs = require('fs');

var state = 10;

const server = http.createServer(function(req, res){
    if (req.url === '/' || req.url === '/state') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`state = ${state}`);
        
    } else if (req.url === '/add') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        state += 1;
        res.end(`state = ${state}`);
    } else if (req.url === '/remove') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        state -= 1;
        res.end(`state = ${state}`);
    } else if (req.url === '/reset') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        state = 10;
        res.end(`state = ${state}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('the requested page was not found on the server');
    }
});

server.listen(8080);
console.log('http server started...')