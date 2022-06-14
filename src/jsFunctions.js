const raFunction = (persons) => {
    const startsWithRa = persons.filter((person) => person.toLowerCase().startsWith('ra'));
    return startsWithRa;
  };
  
  const findLatestCommits = (commitObjects) => commitObjects.map((commitObject) => {
    const recentCommitObj = commitObject.commits.reduce((a, b) => (a.timestamp > b.timestamp ? a : b));
    commitObject.commits = [recentCommitObj];
    return commitObject;
  });
  
  module.exports = { raFunction, findLatestCommits };
  