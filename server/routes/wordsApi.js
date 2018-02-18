/**
 * Created by nikhi on 8/24/2017.
 */
var wordList = require('../models/wordsSchema');
var categoriesList = require('../models/categoriesSchema');
var mongoose = require('mongoose');
module.exports = function (app, express) {

  var api = express.Router();

  api.post('/saveword', function (req, res) {
    console.log(req.body);
    wordList.findOne({Word: req.body.Word,
      ImageUrl: req.body.ImageUrl,
      WordFamily: req.body.WordFamily,
      Description: req.body.Description,
      imageData: req.body.imageData,
      categoryData:req.body.categoryData},function(err,result){
      if(err){
        console.log(err)
      }else if(result){
        res.json({success:false,message:"data already submitted"})
      }else{
        var savewords = new wordList({
          Word: req.body.Word,
          ImageUrl: req.body.ImageUrl,
          WordFamily: req.body.WordFamily,
          Description: req.body.Description,
          imageData: req.body.imageData,
          categoryData:req.body.categoryData,
          createdTime:Date.now(),

        });
        savewords.save(function (err, result) {
          if (err) {
            console.log(err);
          }
          res.json({success: true, message: "User registered", key: "", data: result});
        });
      }
    })

  });
  api.get('/wordlist', function (req, res) {
    wordList.find({}, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json({success: true, message: "User registered", key: "", data: result})
      }
    })
  });
  return api;
}
