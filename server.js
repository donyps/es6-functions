// const app = require('express')();
const { raFunction, findLatestCommits } = require('./src/jsFunctions');
const { persons, commitObj } = require('./src/data.js');
// const port = 3001;

// app.get('/', (req, res) => {
//     res.send('Hi, I am working');
// })

// app.listen(port, () => {
//     console.log(`Server is listening to post http://localhost:${port}`);
// });

console.log(`Names starts with "ra" : ${raFunction(persons)}`);
console.log(`Latest committed objects`);
console.log(JSON.stringify(findLatestCommits(commitObj)));