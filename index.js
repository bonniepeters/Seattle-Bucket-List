const express = require("express");
const hbs = require("hbs");
const userController = require("./controllers/User");
const activityController = require("./controllers/Activity");

const app = express();

app.set("view engine", "hbs");

app.use("/user/", userController);
app.use("/activity/", activityController);

app.listen(8080, () => console.log("Can't touch this"));