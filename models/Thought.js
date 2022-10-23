const { Schema, model } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, maxlength: 280 },
    // TODO: use a getter method to format the timestamp on query
    createdAt: { type: Date, default: Date.now },
    // TODO: make unique and trimmed
    username: { type: String, required: true },
    reactions: [Reaction],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
