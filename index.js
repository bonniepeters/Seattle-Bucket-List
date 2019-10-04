const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");

app.listen(8080, () => console.log("Can't touch this"));