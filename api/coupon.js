var mysql = require('mysql');
var query = require('../mysql');

class CouponApi{
    getCouponData() {
        return new Promise(function (resolve,reject) {
            query('select coupon_data from `al_aud_wallet`',function(err, rows, fields){
                if(err){
                    reject(err)
                }
                resolve(rows);
            });
        })

    }
}
module.exports = new CouponApi();