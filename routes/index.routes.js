const express = require('express');
const router = express.Router();
// const npsAPI = require("../db/index")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
