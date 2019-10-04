const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/seattle_bucket_list");

mongoose.Promise = Promise;

module.exports = mongoose;