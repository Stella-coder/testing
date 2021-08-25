const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("department", schema);
