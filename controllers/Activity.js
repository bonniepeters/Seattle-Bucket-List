const express = require("express")
const router = express.Router()

const Activity = require("../models/Activity");

router.get("/", (req, res) => {
    Activity.find({}).then(activity => {
        res.render("index", {activity});
    });
});

router.get("/new", (req, res) => {
    res.render("new");
});

router.post("/", (req, res) => {
    Activity.create(req.body)
    .then(newActivity => {
        res.redirect("/")
    });
});

router.get('/edit/:id', (req, res) => {
    Activity.findOne({_id: req.params.id})
      .then(activity => {
        res.render("edit", { activity });
      });
  });

router.put('/:id', (req, res) => {
    Activity.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(activity => {
        res.redirect('/');
    });
});

router.get("/:id", (req, res) => {
    Activity.findOne({ _id: req.params.id }).then(activity => {
        res.render("single-activity", activity);
    });
});

module.exports = router;