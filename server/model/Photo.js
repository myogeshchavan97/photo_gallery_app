const mongoose = require("mongoose");

const PhotoSchema = mongoose.Schema({
  photo: {
    type: Buffer
  }
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
