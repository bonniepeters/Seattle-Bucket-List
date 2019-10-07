const mongoose = require("mongoose");

mongoose.Promise = Promise;

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/seattle_bucket_list";
}


mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    () => {
      console.log("Activities for days!");
    }
    );


module.exports = mongoose;