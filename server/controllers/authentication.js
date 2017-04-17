const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/user');
const config = require('../config/main');

function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 10080
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
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  if (!email) {
    return res.status(422).send({ error: 'email' });
  }

  if (!password) {
    return res.status(422).send({ error: 'pass' });
  }

  User.findOne({ email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res.status(422).send({ error: 'exsting' });
    }

    const user = new User({
      email,
      password
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
