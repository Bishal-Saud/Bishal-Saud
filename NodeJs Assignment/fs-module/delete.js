const fs = require('fs')

fs.unlink('nodejs-architecture.txt',(err) =>{
if(err){
    console.log('Error in deleting ');
}
console.log('Deleting successfully');
})