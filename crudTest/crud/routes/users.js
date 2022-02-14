var express = require('express');
const blog = require('../model/blog');
var router = express.Router();
console.log('blog', blog);
/* GET users listing. */
router.get('/', function (req, res, next) {
  blog.find({ title: 'wj' }).exec();
  res.send('respond with a resource');
});

module.exports = router;
