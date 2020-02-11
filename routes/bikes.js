const express = require("express");
const router = express.Router();
const bikeModel = require("../models/Bike");

router.get("/create", (req, res, next) => {
    res.render("add-bike");
})

module.exports = router;