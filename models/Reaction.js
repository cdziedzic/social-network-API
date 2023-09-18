const { Schema, Types } = require('mongoose');
//not a model
const responseSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date)=> date.toLocaleDateString("en-US")
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = responseSchema;
