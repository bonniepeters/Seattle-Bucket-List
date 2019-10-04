const mongoose = require("../db/connection");

const ActivitySchema = new mongoose.Schema({
    name: String,
    type: String,
    address: String,
    cost: String,
    hours: String,
    duration: String,
    url: String,
    user: String,
    done: Boolean
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;