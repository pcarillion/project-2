const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");

router.get("/create", (req, res, next) => {
    res.render("add-bike");
})

router.post("/create", (req, res, next) => {
    const {name, brand, engine, horsepower, price, type, A2, description, link, image} = req.body;
    bikeModel
    .create({
        name, brand, engine, horsepower, price, type, description, link, image, A2: Boolean(A2)
    })
    .then(dbRes => {
        res.render("collection");
        console.log("SUCCESS! A new bike has been added to the db!")
        console.log(brand, name, engine);
    })
    .catch(dbErr => {
        console.log("ERROR! AHAHA YOU FAILED WHILE ADDING A BIKE");
        res.render("add-bike");
    });
});

// GET TO THE DASHBOARD
router.get("/dashboard", (req, res, next) => {
    bikeModel
    .find()
    .then(bikes => {
        res.render("dashboard", {bikes});
    })
    .catch(dbErr => {
        console.log("ERROR while accessing the db: ", dbErr);
    });
});

// GET TO THE EDITING FORM
router.get("/edit/:id", (req, res, next) => {
    bikeModel
    .findById(req.params.id)
    .then(bike => {
        res.render("edit-bike", {bike})
    })
    .catch(dbErr => {
        console.log("ERROR! ", dbErr);
    });
})

// EDIT A BIKE 
router.post("/edit/:id", (req, res, next) => {
    const {name, brand, engine, horsepower, price, type, A2, description, link, image} = req.body;
    bikeModel
    .findByIdAndUpdate(req.params.id, {
        name, brand, engine, horsepower, price, type, A2, description, link, image
    })
    .then(dbRes => {
        console.log(`SUCCESS! ${name} has been updated`);
    })
    .catch(dbErr => {
        console.log("ERROR! AHAHA YOU FAILED WHILE UPDATING! ", dbErr);
    })

})

module.exports = router;