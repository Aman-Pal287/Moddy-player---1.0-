const moongoose = require("mongoose");

const songSchema = new moongoose.Schema({
  title: String,
  artist: String,
  audio: String,
});

const song = mongoose.model("song", songSchema);

module.exports = song;
