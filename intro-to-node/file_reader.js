var fs = require('fs')

fs.readFile('limmerick.txt', 'utf-8', function(err, data) {
    console.log(data);
})