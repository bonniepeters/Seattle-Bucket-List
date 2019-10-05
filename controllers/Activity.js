const express = require("express")
const router = express.Router()

const Activity = require("../models/Activity");

// Route to index/list of activities
router.get("/", (req, res) => {
    Activity.find({}).then(activity => {
        res.render("index", {activity});
    });
});

// Route to form to create new activity
router.get("/new", (req, res) => {
    res.render("new");
});

// Route to post a new activity
router.post("/", (req, res) => {
    Activity.create(req.body)
    .then(newActivity => {
        res.redirect("/")
    });
});

// Route to 
router.get('/edit/:id', (req, res) => {
    Activity.findOne({_id: req.params.id})
      .then(activity => {
        res.render("edit", { activity });
      });
  });

router.delete("/:id", (req, res) => {
    Activity.findOneAndRemove({ _id: req.params.id }).then(() => {
      res.redirect("/");
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