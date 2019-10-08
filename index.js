const express = require("express");
const hbs = require("hbs");
const parser = require('body-parser');
const methodOverride = require('method-override');

const activityController = require("./controllers/Activity");

const app = express();
app.set("view engine", "hbs");
app.use(methodOverride('_method'));
app.use("/public", express.static("public"));


// Comparison Helper From  https://gist.github.com/TastyToast/5209670
hbs.registerHelper('compare', function(lvalue, rvalue, options) {

	if (arguments.length < 3)
	    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

	operator = options.hash.operator || "==";

	var operators = {
	    '==':       function(l,r) { return l == r; },
	    '===':      function(l,r) { return l === r; },
	    '!=':       function(l,r) { return l != r; },
	    '<':        function(l,r) { return l < r; },
	    '>':        function(l,r) { return l > r; },
	    '<=':       function(l,r) { return l <= r; },
	    '>=':       function(l,r) { return l >= r; },
	    'typeof':   function(l,r) { return typeof l == r; }
	}

	if (!operators[operator])
	    throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

	var result = operators[operator](lvalue,rvalue);

	if( result ) {
	    return options.fn(this);
	} else {
	    return options.inverse(this);
	}
});

app.use(parser.urlencoded({ extended: true }));

app.use("/", activityController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});