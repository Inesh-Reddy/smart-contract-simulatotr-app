const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContractSchema = new Schema({
  name: String,
  rules: Array,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Contracts", ContractSchema);
