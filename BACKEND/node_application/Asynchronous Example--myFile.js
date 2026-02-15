const fs = require('fs');
const data = "Hi,this is newFile.txt";


fs.writeFile('./myFolder/myFile.txt', data, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Written to file successfully!');
    }
})


console.log('File creating and writing  to file task!');
