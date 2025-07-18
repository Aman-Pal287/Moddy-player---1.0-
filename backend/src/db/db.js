const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .then(() => {
      console.log("Database connection established");
    });
}

module.exports = connectDB;
