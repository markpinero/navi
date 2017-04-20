const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HighlightSchema = new Schema({
  highlightId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  event: {
    type: String,
    encrypted: true
  },
  private: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Highlight', HighlightSchema);
