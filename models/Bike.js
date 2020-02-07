const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ref: {
        type: String,
        required: true
    },
    sizes: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Men", "Women", "Kids"],
    },
    image: { type: String },
    id_tags: {
        type: Schema.Types.ObjectId,
        ref: 'Tags'
    }
})

const bikeModel = mongoose.model("Bike", bikeSchema)

module.exports = bikeModel;