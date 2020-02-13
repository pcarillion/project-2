const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");
const protectRoute = require("../middlewares/protectRoute");
const protectAdminRoute = require("../middlewares/protectAdminRoute");
const userModel = require("../models/User")


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

router.get("/my-collection", (req, res) => {
  if (req.session.currentUser){
    userModel
      .findById(req.session.currentUser._id)
      .populate("favorites")
      .then(user => {console.log(user, req.session.currentUser.favorites);
        res.render("mycollection", {bikes:user.favorites})})
      .catch(err => console.log(err))
  } else {
    res.redirect("/auth/signin");
  }
})

router.post("/add-to-favorite/:id", (req, res, next) => {
  if (req.session.currentUser){
  userModel
    .findByIdAndUpdate(req.session.currentUser._id, {$push: {favorites: req.params.id}},{new:true})
    .then (user => {
          console.log(user, req.session.currentUser)
          res.redirect('/collection')}
    )
    .catch(err => {console.log(err)})
} else (res.redirect("/auth/signin"))
})



module.exports = router;