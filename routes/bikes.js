const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");
// const A2 = document.querySelector("#checkA2").value;

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

module.exports = router;