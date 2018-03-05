
var http = require('http');
var url=require('url');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    var pathname=url.parse(req.url).pathname;
    switch(pathname) {
    case '/lim2':
        var fs = require('fs')
        fs.readFile('limmerick2.txt', 'utf-8', function(err, data) {
            res.end(data);
        })
    break;
    default:
        var fs = require('fs')
        fs.readFile('limmerick.txt', 'utf-8', function(err, data) {
            res.end(data);
        })
    break;
    }
});

server.listen(3000);


// var server=http.createServer(function(req,res){
//     var pathname=url.parse(req.url).pathname;
//     switch(pathname){
//         case '/subpage':
//             res.end('subpage');
//         break;
//         default:
//             res.end('default');
//         break;
//     }

// }).listen(8080);