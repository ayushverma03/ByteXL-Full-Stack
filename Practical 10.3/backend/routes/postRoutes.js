const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Get all posts
router.get("/", async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
});

// Create new post
router.post("/", auth, async (req, res) => {
  const { text, imageUrl } = req.body;
  const post = await Post.create({ author: req.user, text, imageUrl });
  res.json(post);
});

// Like a post
router.post("/:id/like", auth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user)) post.likes.push(req.user);
  await post.save();
  res.json({ message: "Liked" });
});

module.exports = router;
