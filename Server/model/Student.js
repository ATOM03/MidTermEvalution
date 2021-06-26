const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  internalMarks: {
    type: Number,
    min: 0,
    max: 25,
    required: true,
  },
  externalMarks: {
    type: Number,
    min: 0,
    max: 75,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
  totalClasses: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("student", StudentSchema);
