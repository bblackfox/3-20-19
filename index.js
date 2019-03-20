// console.log("Hi");
const chalk = require('chalk');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));


var arr = [1, 1, 2, 2, 3, 5]
 
require("uniq")(arr)
console.log(arr)