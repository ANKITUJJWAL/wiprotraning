const path = require('path');
const fs = require('fs');


//joining sun-directory, demo-dir to current directory 
// which gives absolute path of the new directory
const dirname = path.join(__dirname, 'demo-dir');
console.log("Joined Path:", dirname);


//async creation of directory
//fs.mkdisr('./demo-dir', callback), relative path 
//dirname is absolute path
fs.mkdir(dirname, (err) => {
    if(err){
        console.log("Error creating directory:", err);
    } else{
        console.log("Directory created successfully:", dirname);
       
    }
});


const filename = path.join(dirname, 'demo-file.txt');
console.log("Joined Path:", filename);


//async creation of file
fs.writeFile(filename, 'This is a demo file.', (err) => {
    if(err){
        console.log("Error creating file:", err);
    } else{
        console.log("File created successfully:", filename);
        
    }
});


console.log("Reading file asynchronously...");


//async reading of file
fs.readFile(filename, 'utf8', (err, data) => {
    if(err){
        console.log("Error reading file:", err);
    } else{
        console.log("File content:", data); 
    }
});


