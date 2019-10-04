const mongoose = require("..db/connection");

const ActivitySchema = new mongoose.Schema({
    name: String,
    type: String,
    location: String,
    cost: Number,
    duration: Number,
    user: String,
    done: Boolean
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;