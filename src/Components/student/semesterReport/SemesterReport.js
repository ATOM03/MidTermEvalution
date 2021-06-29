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
  makeStyles,
} from "@material-ui/core";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./SemesterReport.scss";

const useStyle = makeStyles(() => ({
  root: {
    // width: "1100px",
  },
  paperScrollPaper: {
    width: "1200px",
  },
  paperWidthSm: {
    maxWidth: "1300px",
  },
}));

function SemesterReport(props) {
  const classes = useStyle();
  const dispatch = useDispatch();
  // const { open } = useSelector((state) => state.SemesterOpen);
  const [open, setOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const data = props.data;

  var totalMarks = 0;
  data.map((elmenet, index) => {
    totalMarks += elmenet.externalMarks + elmenet.internalMarks;
  });
  var overalpercentage = (totalMarks / (data.length * 100)) * 100;
  overalpercentage = overalpercentage.toFixed(2);
  console.log(overalpercentage);

  const downloadData = () => {
    const doc = new jsPDF("p", "pt", "a2");

    doc.html(document.querySelector("#semesterTable"), {
      callback: function (pdf) {
        pdf.save(`${data[0].name}_semester_${data[0].semester}.pdf`);
      },
    });
  };

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
        <div className="studentSemesterDailogueBox">
          <Dialog
            open={open}
            onClose={() => {
              dispatch(openSemester(false));
              setOpen(false);
            }}
            classes={{
              root: classes.root,
              paperScrollPaper: classes.paperScrollPaper,
              paperWidthSm: classes.paperWidthSm,
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <div
                style={{
                  display: "flex",
                  // flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3 style={{ fontFamily: "Poppins", marginBottom: "0px" }}>
                  Semester :- {data[0].semester}
                </h3>
                <h4 style={{ fontFamily: "Poppins", marginBottom: "0px" }}>
                  Semester Percentage :-{" "}
                  <span style={{ color: "#3742fa" }}>{overalpercentage} %</span>
                </h4>
              </div>
            </DialogTitle>
            <DialogContent id="semesterTable">
              <Table data={data} autoHeight="true">
                <Column width={140} resizable>
                  <HeaderCell>Course</HeaderCell>
                  <Cell dataKey="course" />
                </Column>
                <Column width={250} resizable>
                  <HeaderCell>CourseName</HeaderCell>
                  <Cell dataKey="courseName" />
                </Column>
                <Column width={100} resizable>
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
            </DialogContent>

            <DialogActions style={{ marginTop: "10px" }}>
              <Button
                style={{ background: "#3742fa", color: "white" }}
                onClick={downloadData}
                color="primary"
              >
                Download Data
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
        </div>
      </div>
    );
  } else {
    return <div>No Semester Record Available</div>;
  }
}

export default SemesterReport;
