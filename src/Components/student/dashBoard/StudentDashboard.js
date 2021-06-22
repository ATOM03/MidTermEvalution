import axios from "axios";
import React, { useEffect, useState } from "react";
import SemesterReport from "../semesterReport/SemesterReport";

function StudentDashboard(props) {
  const [semesters, setSemester] = useState([[{}]]);
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
    <div>
      <div>Semester Wise Result</div>
      <div>
        {semesters.map((semester, index) => {
          if (semester.length !== 0)
            return <SemesterReport semester={index} data={semester} />;
        })}
      </div>
    </div>
  );
}

export default StudentDashboard;
