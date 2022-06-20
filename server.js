const app = require('express')();
const { raFunction, findLatestCommits, findArrMethods, getLetterCount } = require('./src/jsFunctions');
const { persons, commitObj, numbersArray } = require('./src/data');
const router = require('./src/router');

const port = 3001;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening to host http://localhost:${port}`);
});

console.log(`Names starts with "ra" : ${raFunction(persons)}`);
console.log('Latest committed objects');
console.log(JSON.stringify(findLatestCommits(commitObj)));
console.log('-----------------------');
console.log(`Letter count for the word "mississippi" is ${JSON.stringify(getLetterCount('mississippi'))}`);

findArrMethods(numbersArray, 50);
