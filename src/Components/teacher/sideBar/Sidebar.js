import React, { useState } from "react";
import { MenuList, MenuItem, Icon } from "@material-ui/core";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AssessmentIcon from "@material-ui/icons/Assessment";
import "./Sidebar.scss";

function Sidebar(props) {
  const [courseActive, setCourseActive] = useState(false);
  const [addStudentActive, setAddStudentActive] = useState(false);
  const [generateReportActive, setGenerateReportActive] = useState(false);
  return (
    <div className="outerSideBar">
      <div className="innerSideBar">
        <h2>IPU</h2>
        <div className="MenuItems">
          <MenuList>
            <MenuItem
              onClick={() => {
                setCourseActive(!courseActive);
                setAddStudentActive(false);
                setGenerateReportActive(false);
              }}
            >
              <ImportContactsIcon className={courseActive ? "active" : ""} />
              <h4>Add Course</h4>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCourseActive(false);
                setAddStudentActive(!addStudentActive);
                setGenerateReportActive(false);
              }}
            >
              <PersonAddIcon className={addStudentActive ? "active" : ""} />
              <h4>Add Student</h4>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setCourseActive(false);
                setAddStudentActive(false);
                setGenerateReportActive(!generateReportActive);
              }}
            >
              <AssessmentIcon
                className={generateReportActive ? "active" : ""}
              />
              <h4>Generate Report</h4>
            </MenuItem>
          </MenuList>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
