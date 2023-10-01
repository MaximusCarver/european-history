var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
	screenName: String,
	username: String,
	password: String,
	lessonsComplete: Array
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);
