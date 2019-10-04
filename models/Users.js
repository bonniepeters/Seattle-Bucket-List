const mongoose = require("..db/connection");

const UserSchema = new mongoose.Schema({
    name: String,
    favorites: {
        food: Array,
        drink: Array,
        activities: Array,
        season: Array
    },
    occupation: String,
    hometown: String
})

const User = mongoose.model("User", UserSchema);

module.exports = User;