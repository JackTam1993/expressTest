var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('public/chess.html',function (err,html) {
        if(err){
            throw err
        }
    });

});

module.exports = router;
