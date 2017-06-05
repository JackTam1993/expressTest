/**
 * Created by w3719 on 2017/6/1.
 */

let fs = require('fs');
let muilter = require('./multerUtil');

class fileUpload {
    dataInput(req,res) {
        let upload = muilter.single('fileUpload');
        upload(req,res,function (err) {
            if(err) {
                console.log(err);
            }

            console.log(req);
        })
    }

}

module.exports = new fileUpload;