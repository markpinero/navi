const AuthenticationController = require('./controllers/authentication');
const EventController = require('./controllers/event');
const UserController = require('./controllers/user');
const express = require('express');
const passport = require('passport');

const passportService = require('./config/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  const apiRoutes = express.Router();
  const authRoutes = express.Router();
  const eventsRoutes = express.Router();
  const userRoutes = express.Router();

  apiRoutes.use('/auth', authRoutes);

  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);

  // Events

  apiRoutes.use('/events', eventsRoutes);

  eventsRoutes.get('/get/:eventId', requireAuth, EventController.getEvent);
  eventsRoutes.post('/create', requireAuth, EventController.saveEvent);
  eventsRoutes.delete('/delete', requireAuth, EventController.deleteEvent);
  eventsRoutes.put('/update', requireAuth, EventController.updateEvent);

  // User

  apiRoutes.use('/user', userRoutes);

  userRoutes.get('/get', requireAuth, UserController.getUser);

  app.use('/api', apiRoutes);
};
