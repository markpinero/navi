const User = require("../models/user");

exports.getUser = function(req, res, next) {
  let query = { _id: req.user._id };
  User.findOne(query).exec(function(err, user) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).json(user.profile);
  });
};

exports.getDemo = function(req, res, next) {
  let query = { _id: "5916bad6fdaa3e0d015091c7" };
  User.findOne(query).exec(function(err, user) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(200).json(user.profile);
  });
};
