const notes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');

// Customize yargs version
yargs
    .version('1.1.0')
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note body',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log(`Title: ${argv.title}`);
            console.log(`Body: ${argv.body}`);
        }
    })
    .command({
        command: 'remove',
        describe: 'Remove a note',
        handler: () => {
            console.log('Removing the note!')
        }
    })
    .command({
        command: 'list',
        describe: 'List the notes',
        handler: () => {
            console.log('Listing the notes!')
        }
    })
    .command({
        command: 'read',
        describe: 'Read a note',
        handler: () => {
            console.log('Reading the note!')
        }
    })
    .argv;
