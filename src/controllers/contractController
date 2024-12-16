const Contract = require("../models/contract");

exports.createContract = async (req, res) => {
  const { name, rules } = req.body;
  const newContract = new Contract({ name, rules });
  await newContract.save();
  res
    .status(200)
    .json({ message: "Contract created successfully", contract: newContract });
};

exports.getContract = async (req, res) => {
  const { id } = req.body;
  const newContract = await Contract.findOne({ _id: id });
  res
    .status(200)
    .json({ message: "Contract fetched successfully", contract: newContract });
};

exports.deleteContract = async (req, res) => {
  const { id } = req.body;
  const newContract = await Contract.findByIdAndDelete({ _id: id });
  res
    .status(200)
    .json({ message: "Contract deleted successfully", contract: newContract });
};
