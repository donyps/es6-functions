const raFunction = (persons) => {
  const startsWithRa = persons.filter((person) => person.toLowerCase().startsWith('ra'));
  return startsWithRa;
};

const findLatestCommits = (commitObjects) => commitObjects.map((commitObject) => {
  const recentCommitObj = commitObject.commits.reduce((a, b) => (a.timestamp > b.timestamp ? a : b));
  commitObject.commits = [recentCommitObj];
  return commitObject;
});

const findArrMethods = (arrObj, max) => {
  const numberGrt = arrObj.find((k) => k > max);
  console.log(`First number found in the array greater than 50 is: ${numberGrt}`);
  const numberGrtInd = arrObj.findIndex((k) => k > max);
  console.log(`Index of the first number found in the array greater than 50 is: ${numberGrtInd}`);
};

const getLetterCount = (string) => {
  const letters = Array.from(string);
  const letterCount = letters.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
      accumulator[currentValue] += 1;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});
  return letterCount;
};

module.exports = { raFunction, findLatestCommits, findArrMethods, getLetterCount };
