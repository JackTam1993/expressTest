var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(1);
  next();
});

router.get('/',function (req,res,next) {
  console.log(2);
  next();
});

router.get('/',function (req,res,next) {
  console.log(3);
});

module.exports = router;