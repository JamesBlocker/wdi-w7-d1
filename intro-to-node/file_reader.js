var fs = require('fs')

console.log('BEFORE loading the limmerick');
fs.readFile('limmerick.txt', 'utf-8', function(err, data) {
    console.log(data.toUpperCase());
})
console.log('AFTER loading the limmerick');