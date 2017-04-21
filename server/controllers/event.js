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
  // const userHighlight = new Event({
  //   highlightId: req.params.highlightId,
  //   user: req.user._id
  // });
};
