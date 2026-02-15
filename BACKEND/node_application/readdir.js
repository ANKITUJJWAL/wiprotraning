const fs = require('fs');
fs.readdir('./myFolder', (err, files) => {
    if(err){
    	console.log(err);
        return;
    }
   
 console.log('Directory read successfully! Here are the files:');
 console.log(files);
})

//renaming file
const fs = require('fs');
fs.rename('./myFolder/myFile.txt', './myFolder/myFileRenamed.txt', (err) => {
    if(err){
    	console.log(err);
        return;
    } 
    console.log('File renamed successfully');
});
//deleting file

const fs = require('fs');


fs.unlink('./myFolder/myFileSync.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }
   
 console.log('File Deleted Successfully!')
})

