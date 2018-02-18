/**
 * Created by nikhi on 8/24/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var categoriesList = require('./categoriesSchema');

var WordsSchema = new Schema({
  Word: {type: String},
  ImageUrl: {type: String},
  WordFamily: {type: String},
  Description: {type: String},
  imageData: {type:String},
  categoryData:{type:Object},
  createdTime:{type:Date},
  //categoryId:{type:Schema.Types.ObjectId,ref:'categoriesList'},

});
module.exports = mongoose.model('wordsList',WordsSchema);
