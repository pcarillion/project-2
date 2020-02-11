const express = require("express");
const router = express.Router();
const userModel = require("../models/User");
const bcryptjs = require("bcryptjs"); // intro to bcrypt hashing algorithm https://www.youtube.com/watch?v=O6cmuiTBZVs
const session = require("express-session");

// GO TO THE SIGNUP FORM TO REGISTER
router.get("/signup", (req, res) => {
  res.render("signup");
});

/* GO TO THE SIGNIN FORM TO LOG IN */
router.get("/signin", (req, res, next) => {
  res.render("auth/signin");
});

/* ACTION : REGISTER */
router.post("/signup", (req, res, next) => {
  const user = req.body // req.body contains submited infos

  if (!user.mail || !user.password) {
    console.log("ERROR! You have to fill the form entirely!")
    return res.redirect("/auth/signup");
  } else {
    userModel
    .findOne({mail: user.mail})
    .then(dbRes => {
      if (dbRes) {
        console.log("ERROR! Sorry, this email is already taken!");
        return res.redirect("/auth/signup");
      }

      const salt = bcryptjs.genSaltSync(10);
      // more on salt: https://en.wikipedia.org/wiki/Salt_(cryptography)
      const hashed = bcryptjs.hashSync(user.password, salt);
      // generated a secured random hashed password
      user.password = hashed; 
      // new password is ready for database

      userModel
      .create(user).then(() => res.redirect("/auth/signin"));
      console.log("SUCCESS! A new user has been created!");
    })
    .catch(dbErr => {
      console.log("ERROR! ", dbErr);
    })
  }
})

/* ACTION : LOGIN */
router.post("/signin", (req, res, next) => {
  const user = req.body;
  console.log(user);
  console.log(user.mail);
  console.log(user.password);

  if (!user.mail || !user.password){
    console.log("ERROR! Wrong credentials.")
    return res.redirect("/auth/signin");
  }

  
})

module.exports = router;