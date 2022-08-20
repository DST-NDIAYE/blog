const mongoose = require('mongoose');
const ArticleSchema = mongoose.Schema({
  name:  String,
  content: String,
  date: Date,

});


module.exports = mongoose.model('Article', ArticleSchema);

