const fs = require('fs');
/*

fs.readFile('./resource/132.html',(err, data) => {
   console.log(data.toString())
})
*/

let json = fs.readFileSync('../resource/json.json');

console.log(json.toString())