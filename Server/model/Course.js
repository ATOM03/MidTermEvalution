const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  numberOfStudent: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("course", CourseSchema);
