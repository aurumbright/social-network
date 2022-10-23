const { Schema, Types } = require("mongoose");
const luxon = require("luxon");

const reactionSchema = new Schema(
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
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => luxon(createdAtVal).toLocaleString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
