const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createAt: Date,
});

module.exports = mongoose.model("Users", UserSchema);
