const mongoose = require("mongoose");
const Schema = mongoose.schema;

const TransactionSchema = new Schema({
  contractId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  sender: String,
  receiver: String,
  status: String,
  fee: Number,
  timeStamp: Date,
});

module.exports = mongoose.model("Transactions", TransactionSchema);
