import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { MenuList, MenuItem, Icon, Button } from "@material-ui/core";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AssessmentIcon from "@material-ui/icons/Assessment";
import "./Sidebar.scss";

function Sidebar(props) {
  const [courseActive, setCourseActive] = useState(false);
  const [addStudentActive, setAddStudentActive] = useState(false);
  const [generateReportActive, setGenerateReportActive] = useState(false);
  const [temp, setTemp] = useState(false);

  useEffect(() => {
    setTemp(true);
  }, [temp]);

  if (localStorage.getItem("token")) {
    return (
      <div className="outerSideBar">
        <div className="innerSideBar">
          <h2>IPU</h2>
          <div className="MenuItems">
            <MenuList>
              <MenuItem
                onClick={() => {
                  setCourseActive(false);
                  setAddStudentActive(false);
                  setGenerateReportActive(!generateReportActive);
                }}
              >
                <Link to="/form">
                  <AssessmentIcon
                    className={generateReportActive ? "active" : ""}
                  />

                  <h4>Generate Report</h4>
                </Link>
              </MenuItem>
            </MenuList>
          </div>
        </div>
        <div className="loggout">
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("email");
              setTemp(false);
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default Sidebar;
