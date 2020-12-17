import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Switch,
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainBackgroundColor = darkState ? "#1d2e3b" : "#FFFFFF";
  const mainPrimaryColor = darkState ? "#1d2e3b" : "#2076D2";
  const mainSecondaryColor = darkState ? "#1D2C3C" : "#FFFFFF";
  const ThemeChange = () => {
    setDarkState(!darkState);
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      background: {
        default: mainBackgroundColor,
        paper: mainBackgroundColor,
      },
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
    typography: {
      subtitle1: {
        fontSize: 12,
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        fontStyle: "italic",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Form - Creation
            </Typography>
            <span>Light</span>
            <Switch
              checked={darkState}
              onChange={ThemeChange}
              name="lighttodark"
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <span>Dark</span>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
