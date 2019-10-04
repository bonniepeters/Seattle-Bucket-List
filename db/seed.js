const Activities = require("../models/Activity");

const activitySeeds = require('./activities.json');

Activities.deleteMany({})
  .then(() => {
    return Activities.insertMany(activitySeeds);
  })
  .then(() => {
    console.log("We got activities!");
    process.exit();
  });
