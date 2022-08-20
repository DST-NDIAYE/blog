const articles = require('../models/article.model.ts');
const Categorie = require('../models/categorie.model');

exports.listesDesArticle = (req, res, next) => {
    // res.render('index', { title: 'Express' });
    articles.find()
        .then(articleRecu =>
            res.render('index', { title: 'DST NDAYE', 'articles': articleRecu }))
        .catch(err => console.log(err))

}

exports.getArticleById = (req, res) => {
    articleId = req.params.articleId;
    articles.findOne({ _id: articleId })
        .then((singleArticleRecu) => {
            res.render('single-article', { article: singleArticleRecu })
            // res.render('index', { title: 'DST NDAYE' , 'articles' : articleRecu })}
        }
        )
        .catch((err) => {
            console.log(err);
            res.redirect('/')
        })

    // console.log(articleId);
}

exports.addArticle = (req, res) => {
    Categorie.find()
    .then( ( lesCategories )=>{
        res.render('add-article' , { Categories: lesCategories})
    })
    .catch( (  ) =>{
        res.redirect('/')
    }) ;
}
