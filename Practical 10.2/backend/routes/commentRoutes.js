const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

router.post("/", async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.send("Comment added!");
});

router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate("author", "username");
  res.json(comments);
});

module.exports = router;
