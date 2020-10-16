const express = require("express");
const Eductions = require("./models/Eductions")
const router = express.Router();

// education get
router.get("/education", async (req, res) => {
  const education = await Eductions.find();
  res.send(education);
});

// education post
router.post("/education", async (req, res) => {
  const education = new Eductions({
    institute: req.body.institute,
    duration: req.body.duration
  });
  await education.save();
  res.send(education);
});

// education delete
router.delete("/education/:id", async (req, res) => {
  try {
    await Eductions.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = router;









