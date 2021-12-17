const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;

  readFile('./content/subfolder/test2.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      './content/subfolder/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with the task');
      }
    );
  });
});

console.log('starting the next task');
