const express = require("express");
const router = express.Router();
const Student = require("../models/studentModel");

// Create
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send("Student Added");
});

// Read
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Update
router.put("/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send("Student Updated");
});

// Delete
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Student Deleted");
});

module.exports = router;
