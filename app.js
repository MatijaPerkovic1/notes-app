const notes = require('./notes');
const chalk = require('chalk');

const msg = notes.getNotes();

console.log(msg);
console.log(chalk.blue('I\'m blue dabudidabuda'));