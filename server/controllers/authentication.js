const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/user");
const config = require("../config/main");

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: "7d"
  });
}

function setUserInfo(request) {
  return {
    _id: request._id,
    email: request.email
  };
}

exports.login = function(req, res, next) {
  const userInfo = setUserInfo(req.user);
  const userToken = generateToken(userInfo);

  res.status(200).json({
    token: `JWT ${userToken}`,
    user: userInfo
  });
};

exports.register = function(req, res, next) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const born = new Date(req.body.born);
  const email = req.body.email;
  const password = req.body.password;
  console.log(req.body);
  if (!email) {
    return res.status(422).send({ error: "You must enter an e-mail address." });
  }

  if (!password) {
    return res.status(422).send({ error: "You must enter a password." });
  }

  if (!firstName || !lastName) {
    return res.status(422).send({ error: "You must enter your full name." });
  }

  const today = new Date();
  if (!Date.parse(born) || born > today) {
    return res
      .status(422)
      .send({ error: "You must enter a valid birth date." });
  }

  User.findOne({ email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res
        .status(422)
        .send({ error: "That e-mail address is already in use." });
    }

    const user = new User({
      email,
      password,
      profile: { firstName, lastName, born }
    });

    user.save(function(err, user) {
      if (err) {
        return next(err);
      }
      const userInfo = setUserInfo(user);
      const userToken = generateToken(userInfo);

      res.status(201).json({
        token: `JWT ${userToken}`,
        user: userInfo
      });
    });
  });
};
