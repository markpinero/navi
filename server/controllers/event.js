const Event = require('../models/event');
const User = require('../models/user');

exports.saveEvent = function(req, res, next) {
  const newEvent = {
    user: req.user._id,
    date: req.body.date,
    category: req.body.category,
    event: req.body.event,
    private: req.body.private
  };

  Event.create(newEvent, function(err, event) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(201).json(event);
  });
};

exports.getEvent = function(req, res, next) {
  if (req.params.eventId === 'all') {
    let query = { user: req.user._id };
    Event.find(query).sort('date').exec(function(err, events) {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).json(events);
    });
  } else {
    let query = { _id: parseInt(req.params.eventId, 10) };
    Event.findOne(query, function(err, event) {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).json(event);
    });
  }
};

exports.getWeekEvents = function(req, res, next) {
  let query = { user: req.user._id };
  let filter = {
    weekStart: req.body.weekStart,
    weekEnd: req.body.weekEnd
  };

  Event.find(query)
    .where('date')
    .gte(filter.weekStart)
    .lte(filter.weekEnd)
    .exec(function(err, events) {
      if (err) {
        res.status(400).send({ error: err });
      }
      res.status(200).json(events);
    });
};

exports.deleteEvent = function(req, res, next) {
  let query = { _id: req.body._id };
  Event.remove(query, function(err, event) {
    if (err) {
      res.status(400).send({ error: err });
    }
    res.status(204).json(event);
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
      res.status(400).send({ error: err });
      return next(err);
    }

    res.status(200).json({ message: 'updated' });
  });
};
