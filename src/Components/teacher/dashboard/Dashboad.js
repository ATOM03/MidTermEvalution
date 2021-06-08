import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../sideBar/Sidebar";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import "./Dashboard.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

function Dashboad(props) {
  const classes = useStyles();
  return (
    <div className="dashBoardcontainer">
      <Sidebar />
      <div className="outerDashBoard">
        <div className="innerDashboard">
          <div>
            <h2>Dashboad</h2>
          </div>
          <div>
            <h3> My Courses</h3>
          </div>
          <div>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  {/* be{bull}nev{bull}o{bull}lent */}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboad;
