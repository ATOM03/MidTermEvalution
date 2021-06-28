import axios from "axios";
import React, { useEffect, useState } from "react";
import SemesterReport from "../semesterReport/SemesterReport";
import { Bar } from "react-chartjs-2";

import { Switch, CircularProgress } from "@material-ui/core";

function StudentDashboard(props) {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [semesters, setSemester] = useState([[{}]]);
  const [darkTheme, setDarkTheme] = useState(false);
  const [label, setLabel] = useState([]);
  const [data, setData] = useState();
  const [overalPercentage, setOveralPercentage] = useState();
  const temp = "";

  useEffect(() => {
    axios
      .get(`http://localhost:8000/student/${localStorage.getItem("email")}`)
      .then((res) => {
        if (res.data.payload.length !== 0) {
          const tempArray = res.data.payload;
          const name = tempArray[0].name;
          const rollNo = tempArray[0].rollNo;
          setName(name);
          setRollNo(rollNo);
          setStatus(true);

          const semesters = [[]];
          tempArray.map((array, item) => {
            const temp = semesters[array.semester] || [];
            temp.push(array);
            semesters[array.semester] = temp;
          });
          setSemester(semesters);
          const temp = [];

          semesters.map((semester, index) => {
            if (semester.length !== 0) {
              const semesterValue = "Semester " + semester[0].semester;
              setLabel([...label, semesterValue]);
              // console.log(semesterValue);
              label.push(semesterValue);
              console.log(semester);
              var totalMarkPerSemester = 0;
              let semesterLength = semester.length * 100;
              semester.map((data, index) => {
                totalMarkPerSemester += data.externalMarks + data.internalMarks;
              });
              const totalPercentage =
                (totalMarkPerSemester / semesterLength) * 100;
              console.log((totalMarkPerSemester / semesterLength) * 100);
              temp.push(totalPercentage);
            }
          });
          setData(temp);
          console.log(semesters);

          const totalSemester = temp.length * 100;
          var totalMarks = 0;
          temp.map((element, index) => {
            totalMarks += element;
          });
          var overalScore = (totalMarks / totalSemester) * 100;
          overalScore = overalScore.toFixed(2);
          // console.log(overalScore);
          setOveralPercentage(overalScore);
        }
      });
  }, [temp]);

  const chartData = {
    labels: label,
    datasets: [
      {
        label: "Semester Wise Report",
        backgroundColor: "lightblue",
        borderColor: "royalblue",
        data: data,
      },
    ],
  };

  console.log(label, data);
  if (status) {
    return (
      <div>
        <div className={darkTheme ? "headerDark" : "header"}>
          <div>
            <h1>IPU RESULT</h1>
          </div>
          <div>
            <span>Light </span>
            <Switch
              checked={darkTheme}
              onChange={() => setDarkTheme((prev) => !prev)}
              name="checkedA"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <span>Dark</span>{" "}
          </div>
        </div>
        <div
          className={
            darkTheme ? "outerStudentDashboardDark" : "outerStudentDashboard"
          }
        >
          <div className="innerStudentDashboard">
            <div className="personalDetailDiv">
              <h4>
                Name:- <span>{name}</span>
              </h4>
              <h4>
                Roll Number:- <span>{rollNo}</span>
              </h4>
              <h4>
                Overall Percentage :- <span>{overalPercentage} %</span>{" "}
              </h4>
            </div>
            <div className="BarChart">
              <Bar data={chartData} />
            </div>
          </div>
          <div>
            {" "}
            <div>
              <h3>Semester Wise Result</h3>
            </div>
            <div className="Semesters">
              {semesters.map((semester, index) => {
                if (semester.length !== 0)
                  return <SemesterReport semester={index} data={semester} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="circularProgress">
        <CircularProgress size={60} />
      </div>
    );
  }
}

export default StudentDashboard;
