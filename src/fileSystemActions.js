const fs = require('fs');

const fileSystemActions = (req, res) => {
  res.send('I am here in file system');
  fs.readFile('./public/note.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('--------------note.txt - Read ---------------');
      console.log(data);
      console.log('------------------------------');
    }
  });

  const writeStr = 'Writing this line to the existig file\n';
  fs.writeFile('./public/note.txt', writeStr, 'utf-8', (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('--------------note.txt - Write----------------');
    }
  });

  const writeNewStr = 'Creating new file and writing text';
  fs.writeFile('./public/noteCreate.txt', writeNewStr, 'utf-8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('--------------noteCreate.txt - Write - New----------------');
    }
  });

  const appendNewStr = 'Appending text to the existing file\n';
  fs.appendFile('./public/note.txt', appendNewStr, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('--------------note.txt - Append ---------------');
      console.log(data);
      console.log('------------------------------');
    }
  });
};

module.exports = fileSystemActions;
