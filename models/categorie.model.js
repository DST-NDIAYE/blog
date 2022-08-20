const mongoose = require('mongoose');
const CategorieSchema = mongoose.Schema({
  title: String ,
  description:  String,
})

module.exports = mongoose.model('Categorie',  CategorieSchema);