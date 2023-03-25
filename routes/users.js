const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.set({ "Access-Control-Allow-Origin": "*" });
  res.json({ message: "users" });
});

/* GET users listing. */
router.post("/", function (req, res, next) {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send("update message");
  // res.render("users", data);
});

module.exports = router;
