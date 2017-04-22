const Event = require('../models/event');
const User = require('../models/user');

exports.saveEvent = function(req, res, next) {
  const event = new Event({
    user: req.user._id,
    date: req.body.date,
    category: req.body.category,
    event: req.body.event,
    private: req.body.private
  });

  event.save(function(err, newEvent) {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    return res
      .status(200)
      .json({ message: 'Event created', eventId: newEvent._id });
  });
};

exports.getEvent = function(req, res, next) {
  let query = { _id: req.body._id };
  Event.findOne(query, function(err, event) {
    res.status(200).json(event);
  });
};

exports.getAllEvents = function(req, res, next) {
  let query = { user: req.user._id };
  Event.find(query, function(err, events) {
    console.log(events);
    res.status(200).json(events);
  });
};

exports.updateEvent = function(req, res, next) {
  const query = { _id: req.body._id };
  const update = {
    $set: {
      date: req.body.date,
      category: req.body.category,
      event: req.body.event,
      private: req.body.private
    }
  };
  Event.findOneAndUpdate(query, update, { upsert: true, new: false }, function(
    err,
    updatedEvent
  ) {
    if (err) {
      res.send({ error: err });
      return next(err);
    }

    res.status(201).json({ message: 'updated' });
  });
};

// TODO: NOT WORKING YET
exports.deleteEvent = function(req, res, next) {
  let query = { _id: req.body._id };
  let update = { $pull: { _id: req.body._id } };
  Event.findOneAndUpdate(query, update, function(err, event) {
    res.status(200).json(event);
  });
};
