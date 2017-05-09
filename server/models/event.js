const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const config = require("../config/main");

const connection = mongoose.createConnection(config.database);
autoIncrement.initialize(connection);

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
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
    type: String
    // encrypted: true
  },
  private: {
    type: Boolean,
    default: false
  }
});

EventSchema.plugin(autoIncrement.plugin, "Event");

module.exports = mongoose.model("Event", EventSchema);
