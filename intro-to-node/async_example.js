var fs = require('fs')

var a = 2
var b = 3
console.log('a:', a, 'b:', b)

fs.readFile('limmerick.txt', 'utf-8', function(err, data) {
    a = a + b
    b++
    console.log('a:', a, 'b:', b)
})

console.log('a:', a, 'b:', b)