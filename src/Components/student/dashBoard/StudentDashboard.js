import axios from "axios";
import React, { useEffect, useState } from "react";
import SemesterReport from "../semesterReport/SemesterReport";
import { Switch } from "@material-ui/core";

function StudentDashboard(props) {
  const [semesters, setSemester] = useState([[{}]]);
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/student/${localStorage.getItem("email")}`)
      .then((res) => {
        if (res.data.payload.length !== 0) {
          const tempArray = res.data.payload;
          const name = tempArray[0].name;
          const rollNo = tempArray[0].rollNo;

          const semesters = [[]];
          tempArray.map((array, item) => {
            const temp = semesters[array.semester] || [];
            temp.push(array);
            semesters[array.semester] = temp;
          });
          setSemester(semesters);
          console.log(semesters);
        }
      });
  }, []);
  return (
    <div
      className={
        darkTheme ? "outerStudentDashboardDark" : "outerStudentDashboard"
      }
    >
      <div>
        <h3>Semester Wise Result</h3>
        <div>
          <span>Light </span>
          <Switch
            checked={darkTheme}
            onChange={() => setDarkTheme((prev) => !prev)}
            name="checkedA"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          <span>Dark</span>
        </div>
      </div>
      <div className="Semesters">
        {semesters.map((semester, index) => {
          if (semester.length !== 0)
            return <SemesterReport semester={index} data={semester} />;
        })}
      </div>
    </div>
  );
}

export default StudentDashboard;
