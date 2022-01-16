// NPM modules
const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(x => x.title === title);

    if (!note) {
        console.log(chalk.red.inverse(`Note with title "${title}" not found!`));
        return;
    }

    console.log(chalk.blue.inverse(note.title));
    console.log(note.body);
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find(note => note.title === title);

    if (duplicateNote) {
        console.log(chalk.red.inverse(`Note with title "${title}" already exists.`));
        return;
    }

    notes.push({
        title,
        body
    });

    saveNotes(notes);

    console.log(chalk.green.inverse('Note added'));
};

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToSave = notes.filter(note => note.title !== title);

    if(notesToSave.length < notes.length) {
        console.log(chalk.green.inverse(`Removing notes with title "${title}""`));
        saveNotes(notesToSave);
        return;
    }

    console.log(chalk.red.inverse(`No notes with title "${title}" have been found!`));
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue('Your notes...'));
    notes.forEach(note => {
        console.log(`Title: ${chalk.green(note.title)}`);
        console.log(note.body);
    })
}

const loadNotes = () => {
    try 
    {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const notes = JSON.parse(dataJSON);
        return notes;
    } 
    catch (e) 
    {
        return [];
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};
