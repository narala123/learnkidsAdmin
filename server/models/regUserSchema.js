/**
 * Created by nikhi on 8/22/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegistersSchema = new Schema({
  UserName: {type: String},
  MobileNumber: {type: String},
  Email: {type: String},
  PassWord: {type: String},
});
module.exports = mongoose.model('registeredUsersList',RegistersSchema);
