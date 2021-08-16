require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready to run");
});

app.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
