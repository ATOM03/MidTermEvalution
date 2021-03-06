import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../sideBar/Sidebar";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputBase,
  CircularProgress,
} from "@material-ui/core";
import "./Dashboard.scss";
import Courses from "./Courses";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(255, 255, 255, 0.15);",
  },
  paperScrollPaper: {
    background: "#1d2e3b",
    color: "white",
    fontFamily: "Poppins",
    borderRadius: "10px",
    padding: "20px",
  },
}));

function Dashboad(props) {
  const classes = useStyle();
  const [status, setStatus] = useState(false);
  const [courses, setCourses] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [semester, setSemester] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:8000/course/${localStorage.getItem("email")}`)
      .then((res) => {
        setStatus(true);
        const courses = res.data.payload.course;

        setCourses(courses);
      })
      .catch((res) => {
        console.log(res);
      });
  }, [open]);

  console.log(courses);
  if (status === false) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  } else if (status === true) {
    return (
      <div className="dashBoardcontainer">
        <Sidebar />
        <div className="outerDashBoard">
          <div className="innerDashboard">
            <div>
              <h2>Dashboard</h2>
            </div>
            <div className="courseDiv">
              <h3> My Courses</h3>
              <Button onClick={() => setOpen(true)}>Add New Course</Button>
            </div>
            <div className="courseDashboard">
              {courses.length === 0 ? (
                <div className="nocourseAvailable">
                  <h5>No Course Available</h5>
                </div>
              ) : (
                courses.map((course, index) => (
                  <Courses
                    courseCode={course.courseCode}
                    courseName={course.courseName}
                    numberOfStudents={course.numberOfStudent}
                    semester={course.semester}
                    index={index}
                  />
                ))
              )}
              {/* {courses.map((course, index) => (
                <Courses
                  courseCode={course.courseCode}
                  courseName={course.courseName}
                  numberOfStudents={course.numberOfStudent}
                  index={index}
                />
              ))} */}
            </div>
          </div>
        </div>
        <div className="customDialogueBox">
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            classes={{ paperScrollPaper: classes.paperScrollPaper }}
          >
            <DialogTitle id="alert-dialog-title">
              <h3 style={{ margin: "0" }}>Add a New Course</h3>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  <div>
                    <h4>Course Name</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={courseName}
                      classes={{
                        root: classes.root,
                      }}
                      onChange={(e) => setCourseName(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  <div>
                    <h4>Course Code</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={courseCode}
                      classes={{
                        root: classes.root,
                      }}
                      onChange={(e) => setCourseCode(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                >
                  <div>
                    <h4>Semester</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={semester}
                      type="Number"
                      classes={{
                        root: classes.root,
                      }}
                      onChange={(e) => setSemester(e.target.value)}
                    />
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                style={{ background: "#2cffef", color: "black" }}
                onClick={async () => {
                  await axios
                    .post("http://localhost:8000/course/addCourse", {
                      courseCode,
                      courseName,
                      semester,
                      email: localStorage.getItem("email"),
                    })
                    .then((res) => {
                      console.log(res);
                      setCourseCode("");
                      setCourseName("");
                      setSemester("");
                      setOpen(false);
                    });
                }}
                color="primary"
              >
                Add
              </Button>
              <Button
                style={{ background: "#2cffef", color: "black" }}
                onClick={() => setOpen(false)}
                color="primary"
                autoFocus
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default Dashboad;
