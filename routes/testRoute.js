var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('test');
})

router.get('/sub', function (req, res) {
  res.send('test > sub');
})

module.exports = router;
