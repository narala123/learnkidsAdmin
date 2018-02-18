/**
 * Created by nikhi on 8/22/2017.
 */
var express = require('express');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var registerUsers = require('./models/regUserSchema');
var wordList = require('./models/wordsSchema');
var phonicList = require('./models/phonicSchema');

var app = new express();
app.use(bodyParser.urlencoded({limit: '100mb',extended: true}));
app.use(bodyParser.json({limit: '100mb'}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", " * ");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");

  if (req.method == "OPTIONS") {
    res.statusCode = 204;
    return res.send();
  } else {
    return next();
  }

});

var regApi = require('./routes/regUserApi')(app, express);
app.use('/regApi', regApi);

var wordApi = require('./routes/wordsApi')(app, express);
app.use('/wordApi', wordApi);

var categoryApi = require('./routes/categoriesApi')(app, express);
app.use('/categoryApi', categoryApi);

/*app.get('/', function (reg, res) {S
  res.send('hello i am connected');

});*/
/*
app.get('/',function(req,res){
  console.log('hello');
  /!*   categoriesList.find({},function(err,result){
   if(err){
   console.log(err);
   }else{
   res.json({success: true, message: "User registered", key: "", data:result})
   }
   })*!/
});
*/

mongoose.connect('mongodb://ezreadadmin:ezread123@ds147034.mlab.com:47034/ezread-users', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log("database connected");
});

app.listen(3000, function (err, result) {

  if (err) {
    console.log(err);
  }
  console.log("i am listning at 3000");


});
