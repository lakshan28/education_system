const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const education = require("./routes/education");


const app = express();

//Body parser  middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/education", education);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running port ${port}`));