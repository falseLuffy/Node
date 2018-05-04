const fs = require('fs');

let mk = fs.mkdtempSync('./resource/temp-');

fs.appendFileSync('./resource/mkdtemp.txt',mk+"\n");
