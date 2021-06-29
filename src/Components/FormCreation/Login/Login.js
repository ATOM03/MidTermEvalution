import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Card,
  InputBase,
  makeStyles,
  fade,
  Snackbar,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import "./Login.scss";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyle = makeStyles((theme) => ({
  loginButton: {
    marginTop: "20px",
    display: "flex",
    width: "75%",
    justifyContent: "space-around",
  },

  MarginTop: {
    marginTop: "50px",
  },
  buttonStyle: {
    padding: "6px 16px",
    backgroundColor: "#1d2e3b",
    color: "white",
  },
  boxShadow: {
    height: "30%",
    boxShadow:
      "inset rgba(116, 116, 116, 0.5) -2px -1px 19px -3px,rgba(0, 0, 0, 0.5) 3px 7px 10px",
  },
  iconColor: {
    marginRight: "5px",
    color: "red",
  },
  input: {
    width: "100%",
    height: "10px",
    padding: "7px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "arial",
    "&::placeholder": {
      fontSize: "15px",
      fontFamily: "arial",
    },
    // backgroundColor: "#DEE8FF",
  },
  inputRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  errorDiv: {
    display: "flex",
    alignItems: "center",
    paddingRight: "10px",
  },
  inputFlexColumn: {
    width: "70%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    // alignItems: "center",
    marginTop: "15px",
    "& h3": {
      margin: "0 0 4px 5px",
      fontSize: "12px",
      fontWeight: 400,
    },
  },
  root: {
    width: "100%",
    // height: "80%",
    // marginLeft: "10%",
  },
  rootInput: {
    width: "100%",
    color: "inherit",
    paddingLeft: "10px",
    fontFamily: "poppins",
  },
  LoginButton: {
    marginTop: "40px",
    width: "40%",
    display: "flex",
    justifyContent: "center",
  },
  loginbuttonStyle: {
    width: "100%",
    height: "50px",
    padding: "6px 16px",
    backgroundColor: " #2CFFEF",
    color: "black",
    borderRadius: "20px",
    fontFamily: "arial",
  },
  orFooter: {
    display: "flex",
    flexBasis: "100%",
    alignItems: "center",
    color: "white",
    margin: "40px 0 30px 0",
    width: "100%",
    "&::before,&::after": {
      content: "''",
      flexGrow: "1",
      background: "grey",
      height: "1px",
      fontSize: "0px",
      lineHeight: "1px",
      margin: "0px 8px",
    },
  },
  RegImg: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    height: "89%",
    marginTop: "35px",
    "& img": {
      width: "80%",
      height: "79%",
      marginLeft: "50px",
    },
  },
  Flexbox: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "san-serif",
    backgroundColor: "#1d2e3b;",
  },
  Card: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d2e3b",
    color: "white",
    border: "0",
    boxShadow: "none",
    fontFamily: "arial",
  },
  loginForm: {
    width: "100%",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    height: "92%",
    "& h1": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: "20px 0 10px 0",
      letterSpacing: "2px",
    },
  },
  search: {
    // width: "50%",
    height: "40px",
    display: "flex",
    borderRadius: "8px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
}));

function Login(props) {
  const inClassStyle = useStyle();

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [openError, setOpenError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const getData = () => {
    if (email === "") {
      setOpenError(true);
      setMessageError("Enter the Email");
    } else if (password === "") {
      setOpenError(true);
      setMessageError("Enter the Password");
    }
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:8000/login", { email, password })
        .then((res) => {
          if (!res.data.payload.success) {
            setMessage(res.data.payload.message);
            setOpen(true);
          } else {
            setIsTeacher(res.data.payload.isTeacher);
            setStatus(res.data.payload.success);
            localStorage.setItem("token", res.data.payload.token);
            localStorage.setItem("email", email);
          }
        })
        .catch((res) => {
          console.log(res);
          setMessage(res);
          setOpen(true);
        });
    }
  };
  const texttopassword = () => {
    var x = document.getElementById("loginpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  console.log(isTeacher, status);
  if (status === false) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div className="outerLoginForm">
          <Card raised="true">
            <div className="innerloginform">
              <div className="innerLoginFormText">
                <div>
                  <h3>Hello Everyone and Welcome :)</h3>
                  <p>
                    Students and Teacher can use their email id for the login
                  </p>

                  <div
                    className="SignUP"
                    style={{
                      flexDirection: "row",
                      width: "85%",
                      justifyContent: "space-between",
                    }}
                  >
                    {" "}
                    <p>Don't have an Account ?</p>
                    <Link to="/register">
                      <Button>
                        {" "}
                        <ArrowForwardIosIcon />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <form className={inClassStyle.loginForm}>
                <h1>Login </h1>
                <div className={inClassStyle.inputFlexColumn}>
                  <h3>Email</h3>
                  <div className={inClassStyle.search}>
                    <InputBase
                      placeholder="Username"
                      classes={{
                        root: inClassStyle.rootInput,
                        input: inClassStyle.input,
                      }}
                      value={email}
                      inputProps={{ "aria-label": "search" }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={inClassStyle.inputFlexColumn}>
                  <h3>Password</h3>
                  <div className={inClassStyle.search}>
                    <InputBase
                      id="loginpassword"
                      placeholder="Password"
                      classes={{
                        root: inClassStyle.rootInput,
                        input: inClassStyle.input,
                      }}
                      value={password}
                      type="password"
                      inputProps={{ "aria-label": "password" }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />

                    {passwordVisible ? (
                      <div className={inClassStyle.errorDiv}>
                        <Visibility
                          onClick={() => {
                            setPasswordVisible(false);
                            texttopassword();
                          }}
                          classes={{
                            root: inClassStyle.passwordColor,
                          }}
                        />
                      </div>
                    ) : (
                      <div className={inClassStyle.errorDiv}>
                        <VisibilityOff
                          onClick={() => {
                            setPasswordVisible(true);
                            texttopassword();
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className={inClassStyle.LoginButton}>
                  <Button onClick={getData}>Login</Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert onClose={() => setOpen(false)} severity="error">
            {message}
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={() => setOpenError(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert onClose={() => setOpenError(false)} severity="error">
            {messageError}
          </Alert>
        </Snackbar>
      </div>
    );
  } else if (status === true && isTeacher === false) {
    return <Redirect to="/student" />;
  } else if (status === true && isTeacher === true) {
    return <Redirect to="/teacher" />;
  }
}

export default Login;
