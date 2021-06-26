var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var login = require("./routes/login");
var register = require("./routes/register");
var course = require("./routes/course");
var form = require("./routes/form");
var student = require("./routes/student");
var cors = require("cors");
var port = process.env.PORT || 8000;
var mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/user";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/login", login);
app.use("/register", register);
app.use("/course", course);
app.use("/form", form);
app.use("/student", student);

app.listen(port, () => {
  console.log(`The server is running on this port ${port}`);
});
