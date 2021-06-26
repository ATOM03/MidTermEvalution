const express = require("express");
const router = express.Router();

var formData;

router.get("/selfAprraisalReport", async (req, res) => {
  try {
    return res.json({
      payload: {
        data: formData,
      },
    });
  } catch (err) {
    res.status(500).send("Error in the Server");
  }
});

router.post("/post", async (req, res) => {
  const data = req.body;
  //   console.log(data);
  try {
    formData = data;
    console.log(formData);
    return res.json({
      payload: {
        message: "Data Saved Succesfully",
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      payload: {
        message: "Error Connecting to the Server",
      },
    });
  }
});

module.exports = router;
