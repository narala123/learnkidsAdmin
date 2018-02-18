/**
 * Created by nikhi on 8/22/2017.
 */
var registerUsers = require('../models/regUserSchema');
var mongoose = require('mongoose');

/*console.log(mongoose);*/
module.exports = function (app, express) {

  var api = express.Router();

  api.post('/saveusers', function (req, res) {
    console.log(req.body);
    registerUsers.findOne({
      Email: req.body.Email,
      PassWord: req.body.PassWord,
      MobileNumber: req.body.MobileNumber
    }, function (err, result) {
      if (err) {
        console.log(err)
      } else if (result) {
        res.json({success: false, message: "user already registered please login"});
      } else {
        var regUsers = new registerUsers({
          UserName: req.body.UserName,
          MobileNumber: req.body.MobileNumber,
          Email: req.body.Email,
          PassWord: req.body.PassWord
        })
        regUsers.save(function (err, result) {
          if (err) {
            console.log(err);
          }
          res.json({success: true, message: "User registered successfully", key: ""});
        });

      }

    })

  });

  api.post('/loginusers', function (req, res) {
    console.log(req.body);
    registerUsers.findOne({Email: req.body.Email, PassWord: req.body.PassWord}, function (err, result) {
      if (err) {
        console.log(err);
      } else if (result) {
        res.json({success: true, message: "User registered successfully"})
      } else {
        res.json({success: false, message: "user not registered please register"});
      }
    });
  });
  api.get('/getUsers', function (req, res) {
    registerUsers.find({}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json({success: true, message: "User registered", key: "", data: result})
      }
    })
  })

  return api;
};
