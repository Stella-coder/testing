const express = require("express");
const router = express.Router();
const model = require("./model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadImage = multer({ storage }).single("image");

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
router.get("/:id", async (req, res) => {
  try {
    const getData = await model.findById(req.params.id);
    res.status(200).json(getData);
  } catch (error) {
    res.send(error.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const getData = await model.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(getData);
  } catch (error) {
    res.send(error.message);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const getData = await model.findByIdAndRemove(req.params.id, req.body);
    res.status(200).json(getData);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
