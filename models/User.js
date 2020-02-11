const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    mail: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 2},
    role: {type: String, enum: ['user', 'admin']},
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
