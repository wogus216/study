var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CityPost = new Schema({
  name: String,
});

const City = mongoose.model('city', CityPost);

router.post('/', async function (req, res, next) {
  const body = req.body;

  const cityPosts = await City.create(body);

  res.json(cityPosts);
});

/* GET users listing. */
router.get('/', async function (req, res, next) {
  // 비지니스 로직
  const getCitys = await City.find().lean();

  res.json(getCitys);
});
module.exports = router;

/* PATCH users listing. */
router.patch('/:id', async function (req, res, next) {
  const id = req.params.id;
  const body = req.body;
  const patchPosts = await City.findByIdAndUpdate(id, body);

  res.json(patchPosts);
});

/* DELETE users listing. */
router.delete('/:id', async function (req, res, next) {
  const id = req.params.id;

  const patchPosts = await City.findByIdAndDelete(id);

  res.json(patchPosts);
});

module.exports = router;
