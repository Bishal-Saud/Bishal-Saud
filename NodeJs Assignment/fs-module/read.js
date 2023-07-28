const fs = require('fs');

fs.readFile('nodejs-architecture.txt',function(err,data){
    if(err){
        console.log('Error unable to read');
    }
    console.log('reading : ',data.toString());
    return data;
})