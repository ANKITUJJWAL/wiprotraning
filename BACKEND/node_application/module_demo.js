//Core module example: 'os' module
const os = require('os');


console.log("Platform:", os.platform());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Hostname:", os.hostname());


//Third-party module example: chalk module
//From the terminal install chalk,  npm install chalk@4
const chalk = require('chalk');


console.log(chalk.blue('This text is blue!'));
console.log(chalk.red('This text is red!'));
console.log(chalk.green('This text is green!'));    
console.log(chalk.bgGreen.white('White text on a green background.'));


//Lodash module example
//install lodash, npm install lodash
const lodash = require('lodash');


const numbers = [1, 2, 3, 4, 5, 6];
const shuffledNumbers = lodash.shuffle(numbers);
console.log("Original Numbers:", numbers);
console.log("Shuffled Numbers:", shuffledNumbers);  


//Manipulation of strings using lodash
const str = "hello world from lodash";
const capitalizedStr = lodash.startCase(str);
console.log("Original String:", str);
console.log("Capitalized String:", capitalizedStr);




//Local module example
const math = require('./math');


const result = math.add(5, 10);
console.log("Result from local module add function:", result);
console.log("Result from local module sub function:", math.sub(10, 5) );
