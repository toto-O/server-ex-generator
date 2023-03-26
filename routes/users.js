const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ message: "users" });
});

/* GET users listing. */
router.post("/", function (req, res, next) {
  res.send("update message");
});

module.exports = router;
