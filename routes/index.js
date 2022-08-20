var express = require('express');
var router = express.Router();
var article = require('../models/article.model.ts')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  article.find()
  .then( articleRecu => 
    res.render('index', { title: 'DST NDAYE' , 'articles' : articleRecu}))
  .catch(err => console.log(err))

});

module.exports = router;
