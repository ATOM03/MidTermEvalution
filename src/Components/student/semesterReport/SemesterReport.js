import React from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import "./SemesterReport.scss";

function SemesterReport(props) {
  console.log(props.semester, props.data);
  return (
    <div className="courses">
      <Card raised="true">
        <h2> Semester :- {props.semester}</h2>
      </Card>
    </div>
  );
}

export default SemesterReport;
