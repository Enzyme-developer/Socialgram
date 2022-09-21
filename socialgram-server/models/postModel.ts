const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    description: String,
    likes: [],
    image: String,
  },
  { timestamp: true }
);

export {};
module.exports = mongoose.model("Post", PostSchema);
