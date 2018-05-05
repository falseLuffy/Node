const fs = require('fs')

fs.open('../resource/json.json', 'a', (error, fd) => {
    if (error) {
        throw error;
    }
    console.log(fd)
    console.log(fs.fdatasyncSync(fd))
})