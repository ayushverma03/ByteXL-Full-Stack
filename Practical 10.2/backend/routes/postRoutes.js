const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Create post
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.send("Post created!");
});

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
});

module.exports = router;
