const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/subfolder/test.txt', 'utf8');
const second = readFileSync('./content//subfolder/test2.txt', 'utf8');

//console.log(first, second);

writeFileSync(
  './content/subfolder/result-sync.text',
  `Here is the new file: ${first},${second}`
);

//To append add a flag a
/* writeFileSync(
    './content/subfolder/result-sync.text',
    `Here is the new file: ${first},${second}`,{flag: 'a'}
  );
 */
