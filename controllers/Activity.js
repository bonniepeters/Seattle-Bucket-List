const express = require("express")
const router = express.Router()

const Activity = require("../models/Activity");

router.get("/", (req, res) => {
    Activity.find({}).then(Activity => {
        res.render("index", {Activity});
    });
});

module.exports = router;