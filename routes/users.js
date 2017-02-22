var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  var promise = new Promise(function (resolve,reject) {
    resolve();
  });
  var step1 = function () {
    setTimeout(function () {
      console.log(1);
    },0);
  };
  var step2 = function () {
    setTimeout(function () {
      console.log(2);
    },0);
  };
  var step3 = function () {
    setTimeout(function () {
      console.log(3);
    },0);
  };
  var step4 = function () {
    setTimeout(function () {
      console.log(4);
    },0);
  };
  promise.then(step1).then(step2).then(step3).then(step4);
});



module.exports = router;
