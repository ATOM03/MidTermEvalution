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

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email,
      });
      // console.log(user);
      if (!user)
        return res.status(200).json({
          payload: {
            message: "User does not exist",
            success: false,
          },
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(200).json({
          payload: {
            message: "Incorrect Password",
            success: false,
          },
        });

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            payload: {
              token,
              success: true,
              isTeacher: user.isTeacher,
            },
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in the Server");
    }
  }
);

module.exports = router;
