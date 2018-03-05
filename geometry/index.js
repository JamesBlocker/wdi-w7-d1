// import built-in package to create server
var http = require('http');
// import user-made geometry library
var geometry = require('./geometry.js');

function requestResponseCycle(req, res) {
    // ignore requests for favicon
    if (req.url !== '/favicon.ico') {
        console.log(req.url);
        //grab string from request, parse number without the first slash
        var number = parseInt(req.url.slice(1));
        //parse back to string, can only write strings
        var circumference = geometry.circumference(number);
        var diameter = geometry.diameter(number);
        res.write("Radius: " + number +" Circumference: " + circumference + " Diameter: " + diameter);
        res.end();
    }
}

// build server that uses our function for request/response
    var server = http.createServer(requestResponseCycle);
    // listen for requests on that server at port 3000
    server.listen(3000)