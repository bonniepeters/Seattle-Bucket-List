const express = require("express");
const hbs = require("hbs");
const parser = require('body-parser');
const methodOverride = require('method-override');

const activityController = require("./controllers/Activity");

const app = express();
app.set("view engine", "hbs");
app.use(methodOverride('_method'));
app.use("/public", express.static("public"));

hbs.registerHelper('checked', function (currentValue) {
    return currentValue == true ? ' checked ' : '';
});

app.use(parser.urlencoded({ extended: true }));

app.use("/", activityController);

app.listen(8080, () => console.log("Can't touch this"));