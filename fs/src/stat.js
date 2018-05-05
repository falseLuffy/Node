const fs = require('fs');

console.log(fs.statSync('../resource/json.json'));

fs.open('../resource/json.json','a', (error, fd) => {
    if (error) {
        throw error;
    }
    fs.fstat(fd, (err, state) => {
        if (err) {
            throw err;
        }
        console.log(state);
    })
})