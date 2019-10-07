const mongoose = require("../db/connection");

const ActivitySchema = new mongoose.Schema({
    name: String,
    address: String,
    type: String,
    cost: Number,
    days: String,
    hours: String,
    duration: Number,
    url: String,
    imgUrl: String,
    user: String,
    done: Boolean
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;