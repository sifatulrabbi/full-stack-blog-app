const router = require('express').Router();
const Post = require('../models/Post');

const checkOwner = async (req) => {
  const post = await Post.findById(req.params.id);

  const ownerShip = post.username === req.body.username;
  return ownerShip;
};

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.username !== req.body.username) {
    res.status(404).json('You cannot update this post!');
    return;
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json('Failed to update post!');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post && post.username !== req.body.username) {
    res.status(404).json('You cannot delete this post!');
    return;
  }

  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json('Post deleted');
  } catch (err) {
    res.status(500).json('Unable to delete the post!');
  }
});

// router.get('/?user=username', function() {})
router.get('/', async (req, res) => {
  const username = req.query.user;
  const catName = req.query.category;

  try {
    let posts;

    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({ categories: { $in: [catName] } });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (err) {}
});

module.exports = router;
