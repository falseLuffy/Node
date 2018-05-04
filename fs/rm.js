const fs = require('fs');

let rmdir = fs.rmdirSync('./resource/rmdir');
debugger
if(rmdir === null){
    console.log('删除成功')
}else{
    console.log(rmdir)
}