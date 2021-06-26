import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ReactTable from "react-table";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputBase,
  CircularProgress,
  Snackbar,
  Breadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
// import "rsuite-table/dist/css/rsuite-table.css";
import "./Student.scss";
import axios from "axios";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Student(props) {
  const [status, setStatus] = useState(false);
  const { courseName, semester, courseCode } = useParams();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [semesterfield, setSemesterField] = useState("");
  const [internalMarks, setInternalMarks] = useState("");
  const [externalMarks, setExternalMarks] = useState("");
  const [attendance, setAttendance] = useState("");
  const [totalClasses, setTotalClasses] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState("");
  const [opensnackBar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/student/getStudents/${semester}/${courseCode}`
      )
      .then((res) => {
        setStatus(true);
        console.log(res.data.payload);
        setData(res.data.payload);
      })
      .catch((res) => {
        setStatus(false);
        console.log(res);
      });
  }, [open]);
  console.log(isError);

  function handleClick(event) {}

  if (status === false) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </div>
    );
  } else {
    return (
      <div className="outerContainerStudentBlock">
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              style={{
                color: "black",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
              color="inherit"
              href="/teacher"
              onClick={handleClick}
            >
              Courses
            </Link>

            <Typography
              style={{
                color: "#3742fa",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
              color="textPrimary"
            >
              {courseCode}
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="headertablediv">
          <h3>Number of Students :- {data.length}</h3>
          <Button onClick={() => setOpen(true)}>Add New Student</Button>
        </div>
        <div>
          {data.length === 0 ? (
            <div className="noStudentiv">
              <h4>No Student Available</h4>
            </div>
          ) : (
            <Table data={data} autoHeight="true">
              <Column width={150} resizable>
                <HeaderCell>Name</HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={150} resizable>
                <HeaderCell>Roll number</HeaderCell>
                <Cell dataKey="rollNo" />
              </Column>

              <Column width={250} resizable>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
              </Column>

              <Column width={100} resizable>
                <HeaderCell>Course</HeaderCell>
                <Cell dataKey="course" />
              </Column>
              <Column width={200} resizable>
                <HeaderCell>CourseName</HeaderCell>
                <Cell dataKey="courseName" />
              </Column>
              <Column width={150} resizable>
                <HeaderCell>Semseter</HeaderCell>
                <Cell dataKey="semester" />
              </Column>
              <Column width={170} resizable>
                <HeaderCell>Internal Marks (25)</HeaderCell>
                <Cell dataKey="internalMarks" />
              </Column>
              <Column width={170} resizable>
                <HeaderCell>External Marks (75)</HeaderCell>
                <Cell dataKey="externalMarks" />
              </Column>
              <Column width={150} resizable>
                <HeaderCell>Attendance</HeaderCell>
                <Cell dataKey="attendance" />
              </Column>
              <Column width={170}>
                <HeaderCell>Total Classes</HeaderCell>
                <Cell dataKey="totalClasses" />
              </Column>
            </Table>
          )}
        </div>
        <div className="customDialogueBox">
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <h3 style={{ margin: "0" }}>Add a New Student</h3>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Student Name</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={name}
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Roll Number</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={rollNo}
                      // classes={{
                      //   root: classes.root,
                      // }}
                      type="Number"
                      onChange={(e) => setRollNo(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Email</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={email}
                      type="email"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Course</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={courseCode}
                      // type="email"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Course Name</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={courseName}
                      // type="email"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Semester</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={semester}
                      type="number"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setSemesterField(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Internal Marks</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={internalMarks}
                      type="number"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setInternalMarks(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>External Marks</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={externalMarks}
                      type="number"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setExternalMarks(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Attendance</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={attendance}
                      type="number"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setAttendance(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Total Classess</h4>
                  </div>
                  <div className="inputSearch">
                    <InputBase
                      value={totalClasses}
                      type="number"
                      // classes={{
                      //   root: classes.root,
                      // }}
                      onChange={(e) => setTotalClasses(e.target.value)}
                    />
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                style={{ background: "#3742fa", color: "white" }}
                onClick={async () => {
                  await axios
                    .post("http://localhost:8000/student/addStudent", {
                      name,
                      rollNo,
                      email,
                      course: courseCode,
                      courseName,
                      semester,
                      internalMarks,
                      externalMarks,
                      attendance,
                      totalClasses,
                    })
                    .then((res) => {
                      console.log(res);
                      if (res.data.payload.message) {
                        setMessage(res.data.payload.message);
                        setIsError(res.data.payload.success);
                        setOpenSnackbar(true);
                      }

                      // setCourseCode("");
                      // setCourseName("");
                      // setSemester("");
                      setOpen(false);
                    })
                    .catch((err) => console.log(err));
                }}
                color="primary"
              >
                Add
              </Button>
              <Button
                style={{ background: "#3742fa", color: "white" }}
                onClick={() => setOpen(false)}
                color="primary"
                autoFocus
              >
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          {isError ? (
            <Snackbar
              open={opensnackBar}
              autoHideDuration={6000}
              onClose={() => {
                setOpenSnackbar(false);
                setIsError("");
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Alert onClose={() => setOpenSnackbar(false)} severity="success">
                {message}
              </Alert>
            </Snackbar>
          ) : (
            <Snackbar
              open={opensnackBar}
              autoHideDuration={6000}
              onClose={() => {
                setOpenSnackbar(false);
                setIsError("");
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Alert onClose={() => setOpenSnackbar(false)} severity="error">
                {message}
              </Alert>
            </Snackbar>
          )}
        </div>
      </div>
    );
  }
}

export default Student;
