console.log('Starting Backend');

const fs = require('fs');

fs.writeFile('output.txt', 'Writing file', (err) => {
  if(err) console.log('Error Occured');
  else console.log('File written successfully');
});