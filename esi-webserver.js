// WHOLE PROJECT MOVED TO ANOTHER REPOSITORY
// THIS IS A VERY OLD FILE

const http = require('http');
const fs = require('fs');
const port = 80;

const server = http.createServer(function(req, res) {
    
    if (req.url == "/test.html") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./html/index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File not found.');
        }
        else {
            res.write(data);
        }
        res.end();
    })
}
else if (req.url == "/all.min.css") {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fs.readFile('./all.min.css', function(error, data) {
    res.write(data);
    res.end();
    });
}
});

server.listen(port, function(error) {
    if (error) console.log(error);
    else console.log(`Listening on port ${port}`);
});

