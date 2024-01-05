const fs = require('fs');

//Blocking synchronous way
// const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(txtIn);

// const outTx = `this is a good thought that you think so i suggest to you work on it and as you do better ${txtIn} \n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', outTx);
// console.log('tada');

//Non-blocking Asynchronous way

fs.readFile('./txt/readThat.txt', 'utf-8', (err, data) => {
  console.log(data);
});
console.log('will file read');
