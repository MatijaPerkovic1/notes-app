// NPM modules
const yargs = require('yargs');
// Custom modules
const notes = require('./notes');

yargs
    // Customize yargs version
    .version('1.1.0')
    // Add note
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
            notes.addNote(argv.title, argv.body);
        }
    })
    // Remove note
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
        },
        handler: (argv) => {
            notes.removeNote(argv.title);
        }
    })
    // List notes
    .command({
        command: 'list',
        describe: 'List the notes',
        handler: () => {
            console.log('Listing the notes!')
        }
    })
    // Read note
    .command({
        command: 'read',
        describe: 'Read a note',
        handler: () => {
            console.log('Reading the note!')
        }
    })
    .argv;
