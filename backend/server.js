const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running port ${port}`));