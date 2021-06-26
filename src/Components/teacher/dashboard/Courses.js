import React from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import "./Courses.scss";

function Courses(props) {
  console.log(props.index);
  return (
    <div className="courses">
      <Link
        to={`/courses/${props.courseCode}/${props.semester}/${props.courseName}`}
      >
        <Card raised="true">
          <h2>{props.courseCode}</h2>
          <p>{props.courseName}</p>
          <p>
            Semester : <span>{props.semester}</span>
          </p>
          <p>
            Number of Students : <span>{props.numberOfStudents}</span>
          </p>
        </Card>
      </Link>
    </div>
  );
}

export default Courses;
