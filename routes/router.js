const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

router.get("/", async (req, res) => {
  try {
    const images = await Image.find({});
    res.status(200).json(images);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      res.status(404).json({ error: "Image does not exist" });
      return;
    }
    res.status(200).json(image);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, imageUrl, caption } = req.body;
    if (!name || !imageUrl) {
      res
        .status(404)
        .json({ error: "Please fill the name and image url field" });
      return;
    }

    const image = await Image.create({ name, imageUrl, caption });
    if (!image) {
      res
        .status(404)
        .json({ error: "Something went wrong while creating image object" });
      return;
    }
    res.status(200).json(image);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const imageExist = await Image.findById(req.params.id);
    if (!imageExist) {
      res.status(404).json({ error: "Image does not exist" });
      return;
    }
    const updatedImage = await Image.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedImage) {
      res
        .status(404)
        .json({ error: "Something went wrong while updaing image object" });
      return;
    }
    res.status(200).json(updatedImage);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const imageExist = await Image.findById(req.params.id);
    if (!imageExist) {
      res.status(404).json({ error: "Image does not exist" });
      return;
    }
    const image = await Image.findByIdAndDelete(req.params.id);
    res.status(200).json(image);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
