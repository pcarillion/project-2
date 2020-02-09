const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    engine: {
        type: Number,
    },
    horsepower: {
        type: Number,
    },
    price: {
        type: Number,
    },
    type: {
        type: String,
        enum: ["cruiser", "touring", "roadster", "sportbike", "dual-sport", "standard-retro"],
    },
    usage: {

    },
    A2: String,
    description: String,
    image: String,
    gallery: Array,
    link: String
})

const bikeModel = mongoose.model("Bike", bikeSchema)

module.exports = bikeModel;