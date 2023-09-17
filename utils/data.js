const users = [
{
  username: 'user1',
  email: "user1@test.com",
},
  {
    username: 'user2',
  email: 'user2@test.com'
  },
  {
    username: 'user3',
    email: 'user3@example.com'
  },
  {
    username: 'user4',
    email: 'user4@example.com'
  }

];

const thoughts = [
  {
    thoughtText: 'Random inspirational quote',
    username: 'user1'
  },
  {
    thoughtText: 'The earth is flat',
    username: 'user2'
  },
  {
    thoughtText: 'There is 5g in my vaccine!',
    username: 'user2'
  },
  {
    thoughtText: 'Just got my first coding job!',
    username: 'user3'
  },
  {
    thoughtText: 'I need to lose like 400 lbs',
    username: 'user1',
  }

];

const reactions = [
  {
    reactionbody: 'I disagree!',
    username: 'user4'
  },
  {
   reactionbody: 'This was awesome',
   username: 'user4'
  }
];

// Export the data for use in seed.js
module.exports = { users, thoughts, reactions}
