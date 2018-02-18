/**
 * Created by nikhi on 8/26/2017.
 */
var categoriesList = require('../models/categoriesSchema');

var phonicList = require('../models/phonicSchema')
var mongoose = require('mongoose');
module.exports = function (app, express) {

  var api = express.Router();

  api.post('/savecatgoryname',function(req,res) {
    console.log(req.body);
    var userId = mongoose.Types.ObjectId(req.body.userId);
    var categoryNames = new categoriesList({
      categoryNumber:req.body.categoryNumber,
      detailes: req.body.detailes,
      value:req.body.value,
      phonemcode:req.body.phonemcode,
      Type:req.body.Type,
      //code:req.body.code,
      wordActive:req.body.wordActive,
      createdTime:Date.now(),
      userId:userId,

    })
    categoryNames.save(function(err, result) {
      if (err) {
        console.log(err);
      }
      res.json({success: true, message: "User registered", key: "", data:result,id:result._id});
    });
  });
  api.get('/getcategories',function(req,res){
    console.log('hello');
    categoriesList.find({},function(err,result){
      if(err){
        console.log(err);
      }else{
        res.json({success: true, message: "User registered", key: "", data:result})
      }
    })
  });
  api.get('/getphoniclist',function(req,res){
    phonicList.find({},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log(result);
        res.json({success: true, message: "User registered", key: "", data:result})
      }
    })
  });
  api.post('/getCategoriNumber',function(req,res){
    console.log(req.body.categoryNo);
    categoriesList.findOne({categoryNumber:parseInt(req.body.categoryNo)},function(err,result){
      if(err){
        console.log(err)
      }else if(result) {
        console.log(result);
        res.json({success: true, message: "Number Already Entered Please Enter another indexNumber", key: ""});
      }
      else{
        res.json({success: false, message: "proceed", key: ""});
        }

    })

  });
  return api;
};
