const router = require("express").Router();
const Category = require("../models/Category");

//router for POST an island
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    return res.status(201).json(savedCat);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//router to GET an island
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
