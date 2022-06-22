const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriePublicationSchema = new Schema({
  titre:  { type: String, default: "" },
  id_parent:  Schema.Types.ObjectId ,
},{timestamps: true});

let CategoriePublication = mongoose.model('CategoriePublication',CategoriePublicationSchema);

module.exports = CategoriePublication;
