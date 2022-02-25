const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // between 1-280 chars
    }
  },
  {
    createdAt: {
      type: Date,
      default: Date.now,
      
    }
  }
)