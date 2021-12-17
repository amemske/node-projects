const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise('./content/subfolder/test.txt', 'utf8');
    const second = await readFilePromise(
      './content/subfolder/test2.txt',
      'utf8'
    );
    writeFilePromise(
      './content/subfolder/mindgrenade.txt',
      `Thisi is GREAT - ${first} ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
