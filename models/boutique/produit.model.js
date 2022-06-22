const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProduitSchema = new Schema({
  titre:  { type: String, default: "" },
  image:  { type: String, default: "" },
  price:  { type: Number, default: 0 },
  stock:  { type: Number, default: 0 },
  id_categorie:  Schema.Types.ObjectId ,
},{timestamps: true});

let Produit = mongoose.model('Produit',ProduitSchema);

module.exports = Produit;
