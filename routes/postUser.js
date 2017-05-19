/**
 * Created by Jack on 2017/4/27.
 */
var express = require('express');
var router = express.Router();
var CouponApi = require('../api/coupon');
var mysql = require('mysql');

router.post('/',function (req,res) {
    res.json(200,{result:{name:"jack"}});
});

router.get('/coupon-data',function(req,res) {
    res.json(200,{result:CouponApi.getCouponData()});
});

module.exports = router;