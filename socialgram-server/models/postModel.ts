const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    description: String,
    likes: [],
    image: String,
  },
  { timestamps: true }
);

export {};
module.exports = mongoose.model("Post", PostSchema);
