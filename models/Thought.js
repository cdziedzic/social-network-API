const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (createdAt) {
        return formatDate(createdAt)
    },
  },
    username: {
      type: String,
      required: true
    },
   reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true 
    },
    id: false,
  }
);

// Create a virtual property that gets the amount of reactions per thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });
//format date on query
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;
  }
  
// Initialize the model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
