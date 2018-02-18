/**
 * Created by nikhi on 7/31/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhonicSchema = new Schema({
  name: {type: String},
  imageUrl: {type: String},
  imageData: {type: String},
  family: {type: String},
});
module.exports = mongoose.model('phonicDetailsList',PhonicSchema);
