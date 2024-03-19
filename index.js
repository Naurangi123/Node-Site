// Practice file

// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file 😊: ');
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject('Could not write file');
//       resolve('Successfully wrote file');
//     });
//   });
// };

// readFilePro('./txt/dog.txt')
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro('./txt/dog-img2.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image to saved file');
//   })
//   .catch((err) => console.log(err.message));

//Blocking synchronous way
// const txtIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(txtIn);

// const outTx = `this is a good thought that you think so i suggest to you work on it and as you do better ${txtIn} \n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', outTx);
// console.log('tada');

//Non-blocking Asynchronous way

// fs.readFile('./txt/readThat.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });
// console.log('will file read');

//Event loops

// const fs = require('fs');

// const crypto = require('crypto');
// const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 2;

// setTimeout(() => console.log('timer 1 is finished'), 0);
// setImmediate(() => console.log('Immidiate 1 finished'));

// fs.readFile('text-file.txt', () => {
//   console.log('I/O finished');
//   console.log('--------------------------------');

//   setTimeout(() => console.log('timer 2 is finished'), 0);
//   setTimeout(() => console.log('timer 3 is finished'), 3000);
//   setImmediate(() => console.log('Immidiate 2 is finished'));
//   //This is the just next process running  event-loops before first are executed.
//   process.nextTick(() => console.log('Process.nextTick is finished'));

//   crypto.pbkdf2('password', 'naurangi', 100000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'password encrypted');
//   });
//   crypto.pbkdf2('password', 'naurangi', 100000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'password encrypted');
//   });
//   crypto.pbkdf2('password', 'naurangi', 100000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'password encrypted');
//   });
//   crypto.pbkdf2('password', 'naurangi', 100000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'password encrypted');
//   });
//   crypto.pbkdf2('password', 'naurangi', 100000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'password encrypted');
//   });
//   crypto.pbkdf2('password', 'naurangi', 100000, 1024, 'sha512', () => {
//     console.log(Date.now() - start, 'password encrypted');
//   });
// });
// console.log('Hello from the top-level code');

// events files work//

// const EventEmitter = require('events');

// // const myEmitter = new EventEmitter();

// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }
// const myEmitter = new Sales();

// myEmitter.on('newSale', () => {
//   console.log('There was a new sale!');
// });

// myEmitter.on('newSale', () => {
//   console.log('Customer name is changed');
// });

// myEmitter.on('newSale', (stock) => {
//   console.log(`There are only ${stock} items left in stock`);
// });
// myEmitter.emit('newSale', 5);

// ////////////////////////////////////////////
// const http = require('http');
// const server = http.createServer();

// server.on('request', (req, res) => {
//   console.log('Request recieved!');
//   console.log(req.url);
//   res.end('Request recieved');
// });

// server.on('request', (req, res) => {
//   console.log('Another Request recieved 🤣🤣🤣😘😘😘');
// });

// server.close('close', () => {
//   console.log('Server closed');
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Waiting for requests...');
// });

////////////////////////////////////////////////
//streams in JS

const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('test-file.txt', (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
});
server.listen(3000, '127.0.0.1', () => {
  console.log('Server Listening...');
});
