import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  Card,
  InputBase,
  makeStyles,
  fade,
  Checkbox,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios from "axios";
import "./Register.scss";

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
    borderRadius: "8px",
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
      margin: "0 0 4px 8px",
      fontSize: "12px",
      fontWeight: "400",
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
    marginTop: "15px",
    width: "40%",
    display: "flex",
    justifyContent: "center",
  },
  loginbuttonStyle: {
    width: "140px",
    height: "45px",
    padding: "6px 16px",
    backgroundColor: " #2CFFEF",
    color: "black",
    borderRadius: "8px",
    fontFamily: "Poppins",
    fontWeight: "600",
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
    "& h1": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      margin: "20px 0 10px 0",
      letterSpacing: "1px",
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

function Register(props) {
  const inClassStyle = useStyle();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  const [status, setStatus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const getData = () => {
    if (firstName === "") {
      setOpen(true);
      setMessage("Enter The First Name");
    } else if (lastName === "") {
      setOpen(true);
      setMessage("Enter The Last Name");
    } else if (email === "") {
      setOpen(true);
      setMessage("Enter The Email");
    } else if (password === "") {
      setOpen(true);
      setMessage("Enter The First Name");
    } else if (confirmPassword === "") {
      setOpen(true);
      setMessage("Enter The First Name");
    } else {
      axios
        .post("http://localhost:8000/register", {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          isTeacher,
        })
        .then((res) => {
          console.log(res);
          if (res.data.payload) {
            setStatus(res.data.payload.success);
          } else {
            setOpen(true);
            setMessage(res.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const texttopassword = (id) => {
    var x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  if (status === false) {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div className="outerRegisterForm">
          <Card raised="true">
            <div className="innerRegisterForm">
              <div className="innerRegisterFormText">
                <div style={{ padding: "0 40px" }}>
                  <h3>Hello Everyone and Welcome :)</h3>
                  <ul style={{ padding: "5px 0 0 16px" }}>
                    <li>
                      <p>
                        If you are a Student don't tick mark the checkbox of
                        'Are you teacher'
                      </p>
                    </li>
                    <li>
                      <p>
                        If you are a Teacher ,Please tick mark the checkbox of
                        'Are you teacher'
                      </p>
                    </li>
                  </ul>

                  <div className="LogIN">
                    {" "}
                    <p>Already have a Account ?</p>
                    <Link to="/">
                      <Button>
                        {" "}
                        <ArrowBackIosIcon />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <form className={inClassStyle.loginForm} id="registerForm">
                <h1>Register</h1>
                <div className={inClassStyle.inputFlexColumn}>
                  <h3>First Name</h3>
                  <div className={inClassStyle.search}>
                    <InputBase
                      placeholder="First Name"
                      classes={{
                        root: inClassStyle.rootInput,
                        input: inClassStyle.input,
                      }}
                      value={firstName}
                      inputProps={{ "aria-label": "search" }}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={inClassStyle.inputFlexColumn}>
                  <h3>Last Name</h3>
                  <div className={inClassStyle.search}>
                    <InputBase
                      placeholder="Last Name"
                      classes={{
                        root: inClassStyle.rootInput,
                        input: inClassStyle.input,
                      }}
                      value={lastName}
                      inputProps={{ "aria-label": "search" }}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={inClassStyle.inputFlexColumn}>
                  <h3>Email</h3>
                  <div className={inClassStyle.search}>
                    <InputBase
                      placeholder="Email"
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
                      id="registerPassword"
                      placeholder="********"
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
                            texttopassword("registerPassword");
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
                            texttopassword("registerPassword");
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className={inClassStyle.inputFlexColumn}>
                  <h3>Confirm Password</h3>
                  <div className={inClassStyle.search}>
                    <InputBase
                      id="registerConfirmPassword"
                      placeholder="*********"
                      classes={{
                        root: inClassStyle.rootInput,
                        input: inClassStyle.input,
                      }}
                      value={confirmPassword}
                      type="password"
                      inputProps={{ "aria-label": "password" }}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />

                    {confirmPasswordVisible ? (
                      <div className={inClassStyle.errorDiv}>
                        <Visibility
                          onClick={() => {
                            setConfirmPasswordVisible(false);
                            texttopassword("registerConfirmPassword");
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
                            setConfirmPasswordVisible(true);
                            texttopassword("registerConfirmPassword");
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="teacherCheckbox">
                  <Checkbox
                    checked={isTeacher}
                    onChange={() => setIsTeacher((prev) => !prev)}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  Are you a Teacher?
                </div>
                <div className={inClassStyle.LoginButton} id="RegisterButton">
                  <Button
                    // variant="contained"
                    // classes={{
                    //   root: inClassStyle.loginbuttonStyle,
                    // }}
                    onClick={getData}
                  >
                    Register
                  </Button>
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
      </div>
    );
  } else if (status === true) {
    return <Redirect to="/" />;
  }
}

export default Register;
