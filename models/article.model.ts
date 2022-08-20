
const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
  title: String ,
  categorie:  String,
  content: String,
  image: String ,
  date: Date
})

module.exports = mongoose.model('Article', ArticleSchema);

