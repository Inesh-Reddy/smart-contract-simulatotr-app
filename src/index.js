const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());

const contractsRouter = require("./routes/contracts");
app.use("/contracts", contractsRouter);

const MONGODB_URL = process.env.MONGODB_URL;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = MONGODB_URL;

async function main() {
  await mongoose.connect(mongoDB);
  console.log("Connect to DB");
  app.listen(3000, () => {
    console.log("Server is listening on port: 3000...");
  });
}
main();
