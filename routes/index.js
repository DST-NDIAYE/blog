var express = require('express');
var router = express.Router();
// var articles = require('../models/article.model.ts') ;
var articlesControllers = require('../controllers/article.controller.js') ;
const multerConfig = require('../middlewares/multer.config.js');


/* GET home page. */
router.get('/', articlesControllers.listesDesArticle  );

router.get('/article/:articleId', articlesControllers.getArticleById )

router.get('/add-article' , articlesControllers.FormAddArticle)

router.post('/add-article' , multerConfig , articlesControllers.AddArticle )

module.exports = router;
