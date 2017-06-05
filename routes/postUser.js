/**
 * Created by Jack on 2017/4/27.
 */
let express = require('express');
let router = express.Router();
let CouponApi = require('../api/coupon');
let mysql = require('mysql');
let crawler = require('../js/crawler');
let fileUpload = require('../js/fileUpload');
var multer  = require('multer');
var multerUtil = require('../js/multerUtil.js');
var upload = multer(multerUtil);

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

router.get('/crawler',function (req,res) {
    crawler.startCrawler(req.query.url);
    res.status(200).json('done');
});

router.post('/file-upload',upload.single('fileUpload'),(req,res) => {
    fileUpload.dataInput(req,res);
    res.status(200).json('success');
});


module.exports = router;