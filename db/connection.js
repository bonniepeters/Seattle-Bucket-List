const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost/seattle_bucket_list",
    { useNewUrlParser: true },
    () => {
      console.log("Activities for days!");
    }
    );

mongoose.Promise = Promise;

module.exports = mongoose;