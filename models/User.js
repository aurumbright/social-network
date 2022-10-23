const { Schema, model } = require("mongoose");

const userSchema = newSchema(
  {
    // TODO: make unique and trimmed
    username: { type: String, required: true },
    //   TODO: make unique and email validated
    email: { type: String, required: true },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
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

userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return this.friends.length;
  });

const User = model("user", userSchema);

module.exports = User;
