const mongoose = require('mongoose')
var mongooseSchema = new mongoose.Schema({
	msg:String
});
var mongooseModel = mongoose.model('msg', mongooseSchema);
module.exports = mongooseModel


