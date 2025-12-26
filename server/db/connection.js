const mongoose = require("mongoose");
const conn = mongoose
  .connect(process.env.ATLAS_URI)
  .then((db) => {
    console.log("datebase is connected");
    return db;
  })
  .catch((err) => {
    console.log("server error", err);
  });

module.exports = conn;
