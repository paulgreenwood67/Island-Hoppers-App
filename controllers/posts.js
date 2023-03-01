const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//POST router to create a post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//PUT router to update a post
router.put("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.username === req.body.username || req.body.isAdmin){
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json("Post updated successfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your posts!");
  }
});


//DELETE router to delete a post
router.delete("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
 
    try {
      await post.delete();
      return res.status(200).json("Post Deleted successfully!");
    } catch (err) {
      return res.status(500).json(err);
    }
  
});

//GET router to get a single post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET router to get all posts
router.get("/", async (req, res) => {
  const username = req.query.username;
  const categoryName = req.query.category;
  try {
    let posts;
    if (username && categoryName) {
      posts = await Post.find({
        categories: {
          $in: [categoryName],
        },
      });
      posts = posts.filter((p) => p.username === username);
    } else if (username) {
      posts = await Post.find({ username });
    } else if (categoryName) {
      posts = await Post.find({
        category: categoryName,
      });
    } else {
      posts = await Post.find();
    }
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
