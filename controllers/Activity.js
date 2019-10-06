const express = require("express")
const router = express.Router()
const Activity = require("../models/Activity");

// Route to meet Lucas and Bonnie page
router.get("/about", (req, res) => {
      res.render("about");
});

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

// Route to edit form for a specific activity by id
router.get('/edit/:id', (req, res) => {
    Activity.findOne({_id: req.params.id})
      .then(activity => {
        res.render("edit", { activity });
      });
  });

// Route to delete a specific activity by id
router.delete("/:id", (req, res) => {
    Activity.findOneAndDelete({ _id: req.params.id }).then(() => {
      res.redirect("/");
    });
  });

// Route to edit a specific activity by id
router.put('/:id', (req, res) => {
    Activity.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
      .then(activity => {
        res.redirect('/');
    });
});

// Route to view a specific activity by id
router.get("/:id", (req, res) => {
    Activity.findById({ _id: req.params.id }).then(activity => {
        res.render("single-activity", activity);
    });
});

module.exports = router;