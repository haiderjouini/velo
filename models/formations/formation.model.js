const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormationSchema = new Schema({
  titre:  { type: String, default: "" },
  description:  { type: String, default: "" },
  image:  { type: String, default: "" },
  formateur:  { type: String, default: "" },
  location:  { type: String, default: "" },
  id_cat:  Schema.Types.ObjectId,
  id_user:  Schema.Types.ObjectId,
},{timestamps: true});

let Formation = mongoose.model('Formation',FormationSchema);

module.exports = Formation;
