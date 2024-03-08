const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file 😊: ');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file');
      resolve('Successfully wrote file');
    });
  });
};

readFilePro('./txt/dog.txt')
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('./txt/dog-img2.txt', res.body.message);
  })
  .then(() => {
    console.log('Random dog image to saved file');
  })
  .catch((err) => console.log(err.message));

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
