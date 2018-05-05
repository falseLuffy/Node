const fs = require('fs');

console.log(fs.statSync('./resource/json.json'))
console.log(fs.fstatSync('./resource/json.json'))