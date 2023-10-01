var mongoose = require("mongoose");

var countrySchema = new mongoose.Schema({
	name: String,
	flag: String,
	description: String,
	lesson: String,
	routeName: String,
	capital: String,
	yearFounded: String,
	population: String,
	gdp: String,
	gdpPerCapita: String
});

module.exports = mongoose.model("country", countrySchema);