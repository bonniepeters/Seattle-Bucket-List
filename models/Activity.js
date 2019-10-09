const mongoose = require("../db/connection");

const ActivitySchema = new mongoose.Schema({
    name: String,
    address: String,
    type: String,
    cost: Number,
    days: String,
    open: String,
    close: String,
    duration: String,
    url: String,
    img: String,
    user: String,
    done: Boolean
})

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;