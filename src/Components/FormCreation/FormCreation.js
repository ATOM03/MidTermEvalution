import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Tabs, Tab, Typography, Box } from "@material-ui/core/";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BasicInfo from "./BasicInfo/BasicInfo";
import Academic from "./AcademicQualification/Academic";
import Activity from "./Teaching&uniActivity/Activity";
import ResearchandAcad from "./Research&Acadmic/Research&Acad";
import PropTypes from "prop-types";
import "./FormCreation.css";
import store from "../FormCreation/Redux/Store";
import { changeValue } from "../FormCreation/Redux/Value/ValueAction";
import { useSelector, useDispatch } from "react-redux";
import ReportGenerater from "./ReportGenerater/ReportGenerater";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography style={{ textAlign: "left" }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1d2e3b",
    display: "flex",
    height: 224,
  },
  tabs: {
    backgroundColor: '"#1d2e3b',
    color: "white",
    width: "100%",
    textAlign: "left",
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function FormCreation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // console.log(store.getState());
  const tabValue = useSelector((state) => state.value.value);
  const dispatch = useDispatch();
  // console.log(tabValue);
  const handleChange = (event, newValue) => {
    dispatch(changeValue(newValue));
    // setValue(newValue);
  };

  return (
    <div>
      {/* <Header /> */}
      <Grid container style={{ width: "100%", height: "100vh" }}>
        <Grid
          item
          xs={2}
          style={{
            height: "100%",
            backgroundColor: "#1d2e3b",
            color: "white",
            position: "fixed",
          }}
        >
          <div className="center">
            <h2>
              <span style={{ color: "#00cec9" }}>Form</span>Creation
            </h2>
          </div>
          <div
            style={{
              marginTop: "10px",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div className={classes.root}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={tabValue}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab
                  label="Basic Information"
                  {...a11yProps(0)}
                  style={{ textAlign: "left" }}
                />
                <Tab label="Academic Qualification" {...a11yProps(1)} />
                <Tab label="Teaching & University Activity" {...a11yProps(2)} />
                <Tab label="Academic/Research Purpose" {...a11yProps(3)} />
                <Tab label="Generate Report" {...a11yProps(4)} />
                {/* <Tab label="Item Six" {...a11yProps(5)} /> */}
                {/* <Tab label="Item Seven" {...a11yProps(6)} />  */}
              </Tabs>
            </div>
            <div className="setting">
              <h4>
                <HelpOutlineIcon />
                Help
              </h4>
              <h4>
                <SettingsIcon />
                Settings
              </h4>
              <h4>
                <ExitToAppIcon />
                Sign out
              </h4>
            </div>
          </div>
        </Grid>

        <Grid item xs={10} style={{ marginLeft: "250px" }}>
          <TabPanel value={tabValue} index={0}>
            <BasicInfo />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Academic />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Activity />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <ResearchandAcad />
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            <ReportGenerater />
          </TabPanel>
          {/* <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel> */}
        </Grid>
      </Grid>
    </div>
  );
}
