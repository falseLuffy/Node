const fs = require('fs');


let resourceWatcher = fs.watch('./resource/');

resourceWatcher.on('change',(EventType,filename)=>{
   console.log(EventType)
   console.log(filename)
})