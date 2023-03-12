const fs = require('fs')


fs.writeFileSync('notes.txt' , 'just by node.js')

fs.copyFile('notes.txt', 'notes-copy.txt', (err) => {
    if (err) throw err;
    console.log('notes.txt was copied to notes-copy.txt');
  });

  fs.rename('notes.txt', 'copied.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });

  fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log(files);
  });

  fs.stat('notes.txt', (err, stats) => {
    if (err) throw err;
    console.log(stats);
  });