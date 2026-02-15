

const fs = require('fs');


// Write file
fs.writeFileSync('data.txt', "Hello Node!");


// Read file
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);


fs.writeFileSync('data.txt', "Hello Node JS!");
console.log(fs.readFileSync('data.txt', 'utf8'));


// Append
fs.appendFileSync('data.txt', '\nLearning Node.js');
console.log(fs.readFileSync('data.txt', 'utf8'));


// Delete file
fs.unlinkSync('data.txt');


if(!fs.existsSync())   {
    console.log("File does not exist");
}



const fs = require('fs');

// Write file
fs.writeFileSync('data.txt', "Hello Node!");

// Read file
const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);

fs.writeFileSync('data.txt', "Hello Node JS!");
console.log(fs.readFileSync('data.txt', 'utf8'));

// Append
fs.appendFileSync('data.txt', '\nLearning Node.js');
console.log(fs.readFileSync('data.txt', 'utf8'));

// Delete file
fs.unlinkSync('data.txt');

if(!fs.existsSync())   {
    console.log("File does not exist");
}


// mkdirSync and rmdirSync are Synchronous methods, 
// they are blocking methods and are deprecated

//create folder synchronously
// fs.mkdirSync('./demo-dir');
// console.log("Folder Created Successfully");

//synchronous folder deletion
// fs.rmdirSync('./demo-dir');
// console.log("Folder Deleted Successfully");



// mkdir and rmdir are Asynchronous methods which are non-blocking methods

//create folder asynchronously
// fs.mkdir('./demo-dir', (err) => {
//     if(err){
//     	console.log(err);
//     } else{
//     	console.log('Folder Created Successfully');
//     }
// })


//Promise based folder creation

function createFolder(){
    return new Promise((resolve, reject) => {
        fs.mkdir('./demo-dir', (err) => {
            if(err){
                reject(err);
            } else{
                resolve('Folder Created Successfully');
            }
        })
    });
}

createFolder();

console.log("Folder deletion initiated...");
//asynchronous folder deletion
fs.rmdir('./demo-dir', (err) => {
    if(err){
    	console.log(err);
    } else{
    	console.log('Folder Deleted Successfully');
    }
})
