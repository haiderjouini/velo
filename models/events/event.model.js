const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventSchema = new Schema({
  titre:  { type: String, default: "" },
  price:  { type: Number, default: 0 },
  nb:  { type: Number, default: 0 },
},{timestamps: true});

let Event = mongoose.model('Event',EventSchema);

module.exports = Event;
