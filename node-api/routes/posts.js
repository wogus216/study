var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  title: String,
  body: String,
});

const Post = mongoose.model('post', BlogPost);

/* POST users listing. */
router.post('/', async function (req, res, next) {
  const body = req.body;
  // 비지니스 로직
  const postPosts = await Post.create(body);

  res.json(postPosts);
});

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // 비지니스 로직
  const getPosts = await Post.find().lean();

  res.json(getPosts);
});

/* PATCH users listing. */
router.patch('/:id', async function (req, res, next) {
  const id = req.params.id;
  const body = req.body;
  const patchPosts = await Post.findByIdAndUpdate(id, body);

  res.json(patchPosts);
});

/* DELETE users listing. */
router.delete('/:id', async function (req, res, next) {
  const id = req.params.id;

  const patchPosts = await Post.findByIdAndDelete(id);

  res.json(patchPosts);
});

module.exports = router;
