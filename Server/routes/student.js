const express = require("express");
const { check, validationResult } = require("express-validator/check");
const router = express.Router();

const Student = require("../model/Student");
const Course = require("../model/Course");

// router.get("/", async (req, res) => {
//   try {
//     const result = await Course.find({});
//     return res.json({
//       payload: {
//         course: result,
//       },
//     });
//   } catch (err) {
//     res.status(500).send("Error in the Server");
//   }
// });

router.get("/:email", async (req, res) => {
  var email = req.params.email;
  const studentData = await Student.find({ email }, { _id: 0 }).sort({
    semester: 1,
  });
  console.log(studentData);

  return res.json({
    payload: studentData,
  });
});

router.get("/getStudents/:semester/:course", async (req, res) => {
  var semester = req.params.semester;
  var course = req.params.course;
  console.log(semester, course);

  const data = await Student.find({ course, semester: semester }, { _id: 0 });
  // console.log(data);
  return res.json({
    payload: data,
  });
});

router.post("/addStudent", async (req, res) => {
  const {
    name,
    rollNo,
    email,
    course,
    semester,
    internalMarks,
    externalMarks,
    attendance,
    totalClasses,
  } = req.body;
  // console.log(Semester);

  try {
    let student = await Student.findOne({
      rollNo,
      course,
    });
    // console.log(user);
    if (student) {
      return res.json({
        payload: {
          message: "Student Already Existed",
          success: false,
        },
      });
    }
    // const numberOfStudent = 10;
    student = new Student({
      name,
      rollNo,
      email,
      course,
      semester,
      internalMarks,
      externalMarks,
      attendance,
      totalClasses,
    });

    await student.save();

    let numberOfStudentArray = await Course.find({ courseCode: course });
    let numberOfStudent = numberOfStudentArray[0].numberOfStudent;

    // console.log(numberOfStudent + " Number of students");
    await Course.updateOne(
      { courseCode: course },
      { numberOfStudent: numberOfStudent + 1 }
    );
    let numberOfStudentArray1 = await Course.find({ courseCode: course });
    console.log(numberOfStudentArray1);
    return res.json({
      payload: {
        message: "Student Added",
        success: true,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in the Server");
  }
});

module.exports = router;
