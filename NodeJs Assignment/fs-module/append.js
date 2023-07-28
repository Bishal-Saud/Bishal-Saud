const fs = require('fs')

const dataToAppend= '----- Advantages : There are a few main advantages of Node. js for businesses that make it a strong solution for developing an application: fast delivery, scalability, cross-platform support, community support, and ease of adoption.'

fs.appendFileSync('nodejs-architecture.txt',dataToAppend,'utf-8',function(err){
    if(err){
        console.log('Error in appending the data');
    }
    console.log('Append Success');
})