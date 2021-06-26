const express = require("express");
const { check, validationResult } = require("express-validator/check");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const router = express.Router();

const Course = require("../model/Course");
const Student = require("../model/Student");

router.get("/", async (req, res) => {
  try {
    const result = await Course.find({});
    return res.json({
      payload: {
        course: result,
      },
    });
  } catch (err) {
    res.status(500).send("Error in the Server");
  }
});

router.post("/addCourse", async (req, res) => {
  const { courseCode, courseName, semester } = req.body;
  // console.log(Semester);
  try {
    let course = await Course.findOne({
      courseCode,
    });
    // console.log(user);
    if (course) {
      return res.json({
        payload: {
          message: "Course Already Existed",
        },
      });
    }
    const numberOfStudent = await Student.find(
      { course: courseCode, semester: semester },
      { _id: 0 }
    );
    const totalStudents = numberOfStudent.length;
    console.log(totalStudents);
    course = new Course({
      courseName,
      courseCode,
      semester,
      numberOfStudent: totalStudents,
    });

    await course.save();
    return res.json({
      payload: {
        message: "Course Added",
        success: true,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in the Server");
  }
});

module.exports = router;
