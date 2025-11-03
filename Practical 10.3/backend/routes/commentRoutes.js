const express = require("express");
const Comment = require("../models/Comment");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Get comments for a post
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate("author", "username");
  res.json(comments);
});

// Add comment
router.post("/:postId", auth, async (req, res) => {
  const comment = await Comment.create({
    post: req.params.postId,
    author: req.user,
    text: req.body.text,
  });
  res.json(comment);
});

module.exports = router;
