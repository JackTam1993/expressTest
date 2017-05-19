var mysql = require('mysql');

class CouponApi{
    getCouponData() {
        let connection = mysql.createConnection({
            host:'***',
            user:'***',
            password:'***',
            database:'***'
        });
        connection.connect();
        connection.query('select coupon_data from `al_aud_wallet`',function(err, rows, fields){
            if(err){
                throw err;
            }
            return rows;
        });
        connection.end();
    }
}
export default CouponApi();