const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");
const protectRoute = require("../middlewares/protectRoute");
const protectAdminRoute = require("../middlewares/protectAdminRoute");

/* GET home page */
router.get(["/", "/index"], (req, res, next) => {
  res.render("index");
});

/* GET all-bikes page */
router.get(["/collection", "/bikes"], (req, res, next) => {
  bikeModel
  .find()
  .then(bikes => {
    console.log(bikes);
    res.render("collection", {bikes})
  })
  .catch(next)
})

// GET one bike page

router.get("/one-bike-:id", (req, res, next)=> {
  bikeModel
  .findById(req.params.id)
  .then(bike => {
    res.render("one-bike", {bike : bike})
  })
  .catch(next)
  }
)

// GET myCollection (private route)

router.get("/private", protectRoute, (req, res) => {
  if (req.session.currentUser){
    res.render("private");
  } else {
    res.redirect("/auth/signin");
  }
})



module.exports = router;