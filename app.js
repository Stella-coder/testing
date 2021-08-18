require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const studentData = [
  { id: 1, name: "Ella", course: "comp sci" },
  { id: 2, name: "Judith", course: "Biotech" },
  { id: 3, name: "Lucky", course: "Economics" },
  { id: 4, name: "Esther", course: "Proj Management" },
  { id: 5, name: "Romanus", course: "Mech Engineering" },
];
console.log(studentData[1].id);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/post", (req, res) => {
  if (!studentData) {
    console.log("no data found");
  }
  const newEntry = {
    id: studentData.length + 1,
    name: req.body.name,
    course: req.body.course,
  };
  studentData.push(newEntry);
  res.json(studentData);
});

app.get("/api/students", (req, res) => {
  res.json(studentData);
});
app.get("/api/student/:id", (req, res) => {
  const findID = studentData.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (!findID) {
    res.json(`No user with this id : ${req.params.id}`);
  }
  res.status(200).json(findID);
});

app.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
