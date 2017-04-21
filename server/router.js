const AuthenticationController = require('./controllers/authentication');
const EventController = require('./controllers/event');
const express = require('express');
const passport = require('passport');

const passportService = require('./config/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  const apiRoutes = express.Router();
  const authRoutes = express.Router();
  const userRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);

  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  // User;

  apiRoutes.use('/user', userRoutes);

  userRoutes.post(
    '/post',
    passport.authenticate('jwt', { session: false }),
    EventController.saveEvent
  );

  app.use('/api', apiRoutes);
};
