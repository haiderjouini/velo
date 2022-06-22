const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommandeSchema = new Schema({
  date_commande:  { type: Date, default:  null},
  moyen_paiement:  { type: String, default: "" },
  statu:  { type: String, default:  ""},
  id_client:  Schema.Types.ObjectId,
},{timestamps: true});

let Commande = mongoose.model('Commande',CommandeSchema);

module.exports = Commande;
