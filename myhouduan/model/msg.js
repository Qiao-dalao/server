const mongoose = require('mongoose')
var mongooseSchema = new mongoose.Schema({
	touxiang:String,
	password:String,
	username:String,
	friendsList:Array
});
var mongooseModel = mongoose.model('msg', mongooseSchema);
module.exports = mongooseModel


