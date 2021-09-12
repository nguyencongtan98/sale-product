const express = require("express");
const router = express.Router();
const loginServices = require("../services/login_services");
const cors = require("cors");

router.use(cors());

router.post("/", (req, res) => {
  const { userName, password } = req.body;
  loginServices.checkLogin(userName, password, (result) => {
    res.send(result);
  });
});

router.post("/getUserId", (req, res) => {
  const { userId } = req.body;
  loginServices.getUserId(userId, (result) => {
    res.send(result);
  });
});

router.post("/register", (req, res) => {
  const { userName, password = "" } = req.body;
  console.log(userName);
  loginServices.registerUser(userName, password, (result) => {
    res.send(result);
  });
});

module.exports = router;
