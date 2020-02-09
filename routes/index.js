const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");

/* GET home page */
router.get(["/", "/index"], (req, res, next) => {
  res.render("index");
});

/* GET all-bikes page */
router.get("/collection", (req, res, next) => {
  bikeModel
  .find()
  .then(bikes => {
    console.log(bikes);
    res.render("collection", {bikes})
  })
})

module.exports = router;