const Event = require("../models/event");
const User = require("../models/user");

exports.saveEvent = function(req, res, next) {
  if (!req.body.title) {
    return res.status(422).send({ error: "Please enter an event title." });
  }

  if (!Date.parse(req.body.date) || req.body.date > new Date()) {
    return res.status(422).send({ error: "Please enter a valid date." });
  }

  if (!req.body.category) {
    return res.status(422).send({ error: "Please enter a category." });
  }

  const newEvent = {
    user: req.user._id,
    date: req.body.date,
    category: req.body.category,
    title: req.body.title,
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
  if (req.params.eventId === "all") {
    let query = { user: req.user._id };
    Event.find(query).sort("date").exec(function(err, events) {
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
    .where("date")
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
  console.log(req.body);
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

    res.status(200).json({ message: "updated" });
  });
};

exports.getDemo = function(req, res, next) {
  let query = { user: "5916bad6fdaa3e0d015091c7", private: false };
  Event.find(query).sort("date").exec(function(err, events) {
    if (err) {
      res.status(400).send({ error: err });
    }
    console.log(events);
    res.status(200).json(events);
  });
};
