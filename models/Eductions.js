const mongoose = require("mongoose");

const educationSchema = mongoose.Schema({
    institute: String,
    duration: String
});

module.exports = mongoose.model("Eductions", educationSchema)