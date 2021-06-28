import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSemester } from "../../FormCreation/Redux/SemesterOpen/Action";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import {
  Card,
  CardActions,
  CardContent,
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
  Typography,
  Checkbox,
} from "@material-ui/core";
import "./SemesterReport.scss";

function SemesterReport(props) {
  const dispatch = useDispatch();
  // const { open } = useSelector((state) => state.SemesterOpen);
  const [open, setOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const data = props.data;

  useEffect(() => {
    const label = [];
    // data.map((elment, index) => {
    //   console.log(elment, index);
    // });
  }, []);
  // data.shift();
  // console.log(props.semester, props.data, open);
  if (data.length !== 0) {
    return (
      <div className="semester">
        <Card
          raised="true"
          onClick={() => {
            // dispatch(openSemester(true));
            setOpen(true);
          }}
        >
          <h2> Semester :- {props.semester}</h2>
        </Card>
        <div className="customDialogueBox">
          <Dialog
            open={open}
            onClose={() => {
              dispatch(openSemester(false));
              setOpen(false);
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title"></DialogTitle>
            <DialogContent>
              {data.map((semester, index) => (
                <div>{semester.course}</div>
              ))}
            </DialogContent>
            {/* <DialogContentText id="alert-dialog-description">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h4>Course</h4>
                </div>
                <div className="inputSearch">
                  <InputBase
                    value={coursename}
                    // type="email"
                    // classes={{
                    //   root: classes.root,
                    // }}
                    onChange={(e) => setCourse(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
         
         </DialogContent> */}

            <DialogActions>
              <Button
              // style={{ background: "#3742fa", color: "white" }}
              // onClick={async () => {
              //   await axios
              //     .post("http://localhost:8000/student/addStudent", {
              //       name,
              //       rollNo,
              //       email,
              //       course: coursename,
              //       semester,
              //       internalMarks,
              //       externalMarks,
              //       attendance,
              //       totalClasses,
              //     })
              //     .then((res) => {
              //       console.log(res);
              //       if (res.data.payload.message) {
              //         setMessage(res.data.payload.message);
              //         setIsError(res.data.payload.success);
              //         setOpenSnackbar(true);
              //       }

              //       // setCourseCode("");
              //       // setCourseName("");
              //       // setSemester("");
              //       setOpen(false);
              //     })
              //     .catch((err) => console.log(err));
              // }}
              // color="primary"
              >
                Add
              </Button>
              <Button
                style={{ background: "#3742fa", color: "white" }}
                // onClick={() => setOpen(false)}
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
  } else {
    return <div>No Semester Record Available</div>;
  }
}

export default SemesterReport;
