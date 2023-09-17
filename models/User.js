const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property that counts the amount of friends the user has
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
