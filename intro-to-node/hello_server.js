
var http = require('http');
var url = require('url');
var fs = require('fs')

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    var pathname = url.parse(req.url).pathname;
    switch(pathname) {
    case '/lim2':
        fs.readFile('limmerick2.txt', 'utf-8', function(err, data) {
            res.end(data);
        })
    break;
    case '/lim1':
        fs.readFile('limmerick.txt', 'utf-8', function(err, data) {
            res.end(data);
        })
    break;
    }
});

server.listen(3000);