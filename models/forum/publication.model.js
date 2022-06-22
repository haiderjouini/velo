const mongoose = require('mongoose');
const { Schema } = mongoose;

const PublicationSchema = new Schema({
  titre:  { type: String, default: "" },
  description:  { type: String, default: "" },
  image:  { type: String, default: "" },
  location:  { type: String, default: "" },
  commentaires: [{ 
    id_user:  Schema.Types.ObjectId,
    text:  { type: String, default: "" },
  }],
  id_cat:  Schema.Types.ObjectId,
  id_user:  Schema.Types.ObjectId,
},{timestamps: true});

let Publication = mongoose.model('Publication',PublicationSchema);

module.exports = Publication;
