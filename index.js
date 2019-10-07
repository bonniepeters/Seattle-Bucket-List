const express = require("express");
const hbs = require("hbs");
const parser = require('body-parser');
const methodOverride = require('method-override');

const activityController = require("./controllers/Activity");

const app = express();
app.set("view engine", "hbs");
app.use(methodOverride('_method'));
app.use("/public", express.static("public"));

app.use(parser.urlencoded({ extended: true }));

app.use("/", activityController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});