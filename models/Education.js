const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Education Sheme
const EducationScheme = new Schema({
  institute: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
 
});

module.exports = Education = mongoose.model("education", EducationScheme);
