/**
 * Created by Jack on 2017/4/27.
 */
var express = require('express');
var router = express.Router();

router.post('/',function (req,res) {
    res.json(200,{result:{name:"jack"}});
});

module.exports = router;