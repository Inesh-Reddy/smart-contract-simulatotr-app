const express = require("express");
const router = express.Router();
const contractController = require("../controllers/contractController");

router.get("/", contractController.getContract);
router.delete("/", contractController.deleteContract);
router.post("/", contractController.createContract);

module.exports = router;
