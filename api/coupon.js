var mysql = require('mysql');
var query = require('../mysql');

class CouponApi{
    getCouponData() {
        return new Promise(function (resolve,reject) {
            query('select * from `user`',function(err, rows, fields){
                if(err){
                    reject(err)
                }
                resolve(rows);
            });
        })

    }
}
module.exports = new CouponApi();