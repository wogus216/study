var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'hello world' });
});

router.get('/api', function (req, res) {
  res.status(200).json({
    msg: 'hello world',
  });
});

router.post('/api/post', function (req, res) {
  res.status(200).json({
    msg: 'post hello world',
  });
});

module.exports = router;
