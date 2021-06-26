const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../model/User");

router.post(
  "/",
  [
    // check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, password, confirmPassword, isTeacher } =
      req.body;
    try {
      let user = await User.findOne({
        email,
      });
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      }

      user = new User({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        isTeacher,
      });

      if (password === confirmPassword) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        user.confirmPassword = await bcrypt.hash(password, salt);
        await user.save();

        return res.json({
          payload: {
            message: "User Added",
            success: true,
          },
        });
      } else {
        return res.status(400).json({
          password: "Password does not match with confirm Password",
        });
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

module.exports = router;
