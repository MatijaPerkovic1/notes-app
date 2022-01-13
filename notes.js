const fs = require('fs');

const getNotes = () => {
    const notes = fs.readFileSync('notes.txt');
    return 'Your notes... \n' + notes;
};

module.exports = {
    getNotes
};
