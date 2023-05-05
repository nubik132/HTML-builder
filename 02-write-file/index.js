const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filename = '02-write-file/text.txt';

rl.on('line', (input) => {
  if (input === 'exit') {
    console.log('Goodbye!');
    rl.close();
  } else {
    fs.appendFile(filename, input + '\n', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});

process.on('SIGINT', () => {
  console.log('Goodbye!');
  fs.readFile(filename, 'utf8', (err, fileContent) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(filename, fileContent.trim(), (err) => {
        if (err) {
          console.error(err);
        }
        process.exit();
      });
    }
  });
});
