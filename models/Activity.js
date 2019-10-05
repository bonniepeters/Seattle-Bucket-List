const mongoose = require("../db/connection");

const ActivitySchema = new mongoose.Schema({
    name: String,
    type: String,
    address: String,
    cost: Number,
    hours: String,
    duration: Number,
    url: String,
    imgUrl: String,
    user: String,
    done: Boolean
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;