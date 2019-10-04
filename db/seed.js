const Activities = require("../models/Activity");
const Users = require("../models/User");

const activitySeeds = require('./activities.json');
const userSeeds = require('./users.json');

Activities.deleteMany({})
  .then(() => {
    return Activities.insertMany(activitySeeds);
  })
  .then(() => {
    console.log("We got activities!");
  });

Users.deleteMany({})
  .then(() => {
    return Users.insertMany(userSeeds);
  })
  .then(() => {
    console.log("We got peeps!");
    process.exit();
  });
