const mongoose = require("mongoose");

const imageSchame = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", imageSchame);

module.exports = Image;
