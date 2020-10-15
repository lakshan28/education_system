const express = require("express");
const router = express.Router();
const Education = require("../models/Education");

router.get("/test", (req, res) => res.json({ msg: "Users Work" }));

router.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    avatar,
    password: req.body.password
  });
  newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
      });
      
 router.get("/", (req, res) => {
   Education.find()
   .then(education => res.json(education))
     .catch(err =>
    res.status(404).json({ nopostsfound: "no education" })
        );
  });
  
 

module.exports = router;



 





