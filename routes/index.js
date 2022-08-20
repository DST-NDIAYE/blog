var express = require('express');
var router = express.Router();
var articles = require('../models/article.model.ts')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  articles.find()
  .then( articleRecu => 
    res.render('index', { title: 'DST NDAYE' , 'articles' : articleRecu}))
  .catch(err => console.log(err))

});


router.get('/article/:articleId', (req, res) => {
    articleId  = req.params.articleId ;

    articles.findOne({_id: articleId})
    .then( articleRecu => 
      console.log(articleRecu)
      // res.render('index', { title: 'DST NDAYE' , 'articles' : articleRecu })
    )
    .catch(err => console.log(err))
  

    console.log(articleId);
})

module.exports = router;
