const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  event: {
    type: String
    // encrypted: true
  },
  private: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Event', EventSchema);
