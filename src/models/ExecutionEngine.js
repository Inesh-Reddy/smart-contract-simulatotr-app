const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExecutionEngineSchema = new Schema({
  contractId: mongoose.Schema.Types.ObjectId,
  state: Object,
  transactionHistory: Array,
});

module.exports = mongoose.model("ExecutionEngine", ExecutionEngineSchema);
