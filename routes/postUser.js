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
    CouponApi.getCouponData().then(function (data) {
        res.status(200).json({result:data});
    },function (err) {
        res.status(300).json({result:err});
    })

});

module.exports = router;