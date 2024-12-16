const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GasFeeSchema = new Schema({
  transactionId: mongoose.Schema.Types.ObjectId,
  calculateFee: Number,
  timestamp: Date,
});

module.exports = mongoose.model("GasFee", GasFeeSchema);
