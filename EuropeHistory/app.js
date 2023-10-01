// Variables

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var Country = require("./models/country");
var User = require("./models/user");
var Comment = require("./models/comment");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var methodOverride = require("method-override");
var flash = require("connect-flash");


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Andy2436:FaronBokoblin2436@cluster0.nqyom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(flash());


// Passport Extensions

app.use(require("express-session")({
	secret: "The history of Europe",
	resave: false,
	saveUnitiliazed: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});


passport.use(new LocalStrategy(User.authenticate()));


// Get Requests

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/homepage", function(req, res){
	res.render("homepage");
});

app.get("/countries", function(req, res){
	countryList = [];
	counter = 1;
	Country.find({}, function(err, countries){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		
		else {
			var topCountry = countries[Math.round(Math.random() * (countries.length - 1))];
			while(counter < countries.length){
				countries.forEach(function(country){
					if(country.lesson == counter){
						countryList.push(country);
						counter++;
					}
				});
			}
			res.render("countries/countries", {countries: countryList, topCountry: topCountry, lessonComplete: false});
		}
	})
});

// app.get("/countries/new", function(req, res){
// 	res.render("countries/new");
// });

// app.get("/countries/:id", function(req, res){
// 	Country.findById(req.params.id, function(err, country){
// 		if(err){
// 			console.log(err);	
// 			res.redirect("back");
// 		}
		
// 		else {
// 			res.render("countries/show", {country: country});
// 		}
// 	})
// });

app.get("/countries/andorra", function(req, res){
	Country.find({routeName: "andorra"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
				res.render("countries/andorra", {country: country, lessonComplete: false});
			}
	});
});

app.get("/countries/austria", function(req, res){
	Country.find({routeName: "austria"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/austria", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/belgium", function(req, res){
	Country.find({routeName: "belgium"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/belgium", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/bulgaria", function(req, res){
	Country.find({routeName: "bulgaria"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/bulgaria", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/denmark", function(req, res){
	Country.find({routeName: "denmark"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/denmark", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/estonia", function(req, res){
	Country.find({routeName: "estonia"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/estonia", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/finland", function(req, res){
	Country.find({routeName: "finland"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/finland", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/france", function(req, res){
	Country.find({routeName: "france"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/france", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/germany", function(req, res){
	Country.find({routeName: "germany"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/germany", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/greece", function(req, res){
	Country.find({routeName: "greece"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/greece", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/hungary", function(req, res){
	Country.find({routeName: "hungary"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/hungary", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/iceland", function(req, res){
	Country.find({routeName: "iceland"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/iceland", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/ireland", function(req, res){
	Country.find({routeName: "ireland"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/ireland", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/italy", function(req, res){
	Country.find({routeName: "italy"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/italy", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/latvia", function(req, res){
	Country.find({routeName: "latvia"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/latvia", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/liechtenstein", function(req, res){
	Country.find({routeName: "liechtenstein"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/liechtenstein", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/lithuania", function(req, res){
	Country.find({routeName: "lithuania"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/lithuania", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/luxembourg", function(req, res){
	Country.find({routeName: "luxembourg"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/luxembourg", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/monaco", function(req, res){
	Country.find({routeName: "monaco"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/monaco", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/netherlands", function(req, res){
	Country.find({routeName: "netherlands"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/netherlands", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/norway", function(req, res){
	Country.find({routeName: "norway"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/norway", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/portugal", function(req, res){
	Country.find({routeName: "portugal"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/portugal", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/romania", function(req, res){
	Country.find({routeName: "romania"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/romania", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/russia", function(req, res){
	Country.find({routeName: "russia"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/russia", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/sanMarino", function(req, res){
	Country.find({routeName: "sanMarino"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/sanMarino", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/spain", function(req, res){
	Country.find({routeName: "spain"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/spain", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/sweden", function(req, res){
	Country.find({routeName: "sweden"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/sweden", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/switzerland", function(req, res){
	Country.find({routeName: "switzerland"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/switzerland", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/turkey", function(req, res){
	Country.find({routeName: "turkey"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/turkey", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/unitedKingdom", function(req, res){
	Country.find({routeName: "unitedKingdom"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/unitedKingdom", {country: country, lessonComplete: false});
		}
	});
});

app.get("/countries/vaticanCity", function(req, res){
	Country.find({routeName: "vaticanCity"}, function(err, country){
		if(err){
			console.log(err);
		}
		
		else {
			res.render("countries/vaticanCity", {country: country, lessonComplete: false});
		}
	});
});

app.get("/comments", isLoggedIn, function(req, res){
	Comment.find({}, function(err, comments){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		
		else {
			res.render("comments/comments", {comments: comments})
		}
	})
});

app.get("/comments/new", isLoggedIn, function(req, res){
	res.render("comments/new");
});

app.get("/account", isLoggedIn, function(req, res){
	res.render("account/account");
});

app.get("/account/edit",isLoggedIn, function(req, res){
	res.render("account/edit");
});

app.get("/comments/:id/edit", isCommentAuthor, function(req, res){
	Comment.findById(req.params.id, function(err, comment){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		
		else {
			res.render("comments/edit", {comment: comment});
		}
	})
});

app.get("/login", function(req, res){
	res.render("login");
});

app.get("/register", function(req, res){
	res.render("register");
});

app.get("/logout", isLoggedIn, function(req, res){
	req.logout();
	res.redirect("/");
});


// Post Requests

// app.post("/countries", function(req, res){
// 	Country.create({
// 		name: req.body.name,
// 		flag: req.body.flag,
// 		description: req.body.description,
// 		lesson: req.body.lessonNumber,
// 		routeName: req.body.routeName,
// 		capital: req.body.capital,
// 		yearFounded: req.body.yearFounded,
// 		population: req.body.population,
// 		gdp: req.body.gdp,
// 		gdpPerCapita: req.body.gdpPerCapita
// 	});
	
// 	res.redirect("/");
// });

app.post("/comments", isLoggedIn, function(req, res){
	Comment.create({
		comment: req.body.comment,
		author: {
			id: req.user._id,
			screenName: req.user.screenName
		}
	}, function(err, comment){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		
		else {
			comment.author.screenName = req.user.screenName;
			comment.save();
			res.redirect("/comments");
		}
	})
});


app.post("/countries/:country/account", isLoggedIn, function(req, res){
	req.user.lessonsComplete.push(req.params.country);
	req.user.save();
	res.redirect("/countries");
});

app.post("/register", function(req, res){
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.redirect("back");
		}
		
		else {
			passport.authenticate("local")(req, res, function(){
				user.screenName = req.body.screenname;
				user.lessonsComplete.push("seed");
				user.lessonsComplete.push("seed2");
				user.save();
				res.redirect("/countries");
			})
		}
	})
});

app.post("/login", passport.authenticate("local", {
	successRedirect: "/countries",
	failureRedirect: "/login"
}), function(req, res){
	
});



// Put Requests

app.put("/account", isLoggedIn, function(req, res){
	User.findByIdAndUpdate(req.user._id, req.body.user, function(err, user){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		
		else {
			res.redirect("/login");
		}
	})
});

app.put("/comments/:id", isCommentAuthor, function(req, res){
	Comment.findByIdAndUpdate(req.params.id, req.body.comment, function(err, comment){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		
		else {
			res.redirect("/comments");
		}		
	})
});



// Delete Routes

app.delete("/comments/:id", isCommentAuthor, function(req, res){
	Comment.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
			res.redirect("back");
		}
		
		else {
			res.redirect("/comments");
		}
	})
});





// Functions

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		next();
	}
	
	else {
		res.redirect("/login");
	}
}


function isCommentAuthor(req, res, next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.id, function(err, foundComment){
			if(err){
				res.redirect("/comments");
			}
			
			else {
				if(foundComment.author.id.equals(req.user._id)){
					next();
				}
				
				else {
					res.redirect("back");
				}
			}
		})
	}
	
	else {
		res.redirect("back");
	}
}


// app.listen(3000, function(err, success){
// 	if(err){		
// 		console.log(err);
// 	}
	
// 	else {
// 		console.log("The server has started");
// 	}
// });



app.listen(process.env.PORT, function(err, success){
	if(err){
		console.log(err);
	}
	
	else {
		console.log("The server has started");
	}
});