const persons = ['Ram', 'Pragya', 'raja', 'Trideep', 'Dony', 'Suhail', 'Raghu'];

const commitObj = JSON.parse(`
[
  {
     "file":"payment.txt",
     "commits":[
        {
           "timestamp":"2012-04-23T18:25:43.511Z",
           "content":"first payment"
        },
        {
           "timestamp":"2012-04-25T18:25:43.511Z",
           "content":"third payment"
        },
        {
           "timestamp":"2012-04-24T18:25:43.511Z",
           "content":"second payment"
        }
     ]
  },
  {
     "file":"balance.txt",
     "commits":[
        {
           "timestamp":"2012-04-01T18:25:43.511Z",
           "content":"second balance"
        },
        {
           "timestamp":"2012-03-25T18:25:43.511Z",
           "content":"first balance"
        }
     ]
  }
]
`);

module.exports = { persons, commitObj };
