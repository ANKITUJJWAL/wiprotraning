const fs = require('fs');
const data = 'Hello, appending the text';
fs.writeFile('./myFolder/myFile.txt', data, {flag: 'a'}, 
(err) => {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Written to file successfully!');
    }
})
