const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");


const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://lakshan:1993@cluster0-hemaw.mongodb.net/test?retryWrites=true", { useNewUrlParser: true })
  .then(() => { console.log("MongoDB Connected")
   });

  app.use("/api", routes);
  

  app.listen(5000, () => {
    console.log("Server has started!");
  });
