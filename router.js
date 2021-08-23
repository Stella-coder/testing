const express = require("express");
const router = express.Router();
const model = require("./model");

router.post("/", async (req, res) => {
  try {
    const entry = await model.create({
      name: req.body.name,
      department: req.body.department,
    });
    res.status(200).json(entry);
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const getData = await model.find();
    res.status(200).json(getData);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
