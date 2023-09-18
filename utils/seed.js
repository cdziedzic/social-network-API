const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {users, thoughts, reactions} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }


  await User.collection.insertMany(users);
  // let userData = await User.collection.find({})
  // console.log(userData);


  let userIdArr = users.map(user=> (user._id))
  console.log(userIdArr);

  for (let i = 0; i < thoughts.length; i++) {
    
    thoughts[i][`userId`] = userIdArr[i]
    console.log(userIdArr);
    console.log(thoughts)
  }

  await Thought.collection.insertMany(thoughts);
  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
