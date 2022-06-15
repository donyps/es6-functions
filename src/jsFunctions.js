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

module.exports = { raFunction, findLatestCommits, findArrMethods };
