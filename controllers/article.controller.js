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

exports.FormAddArticle = (req, res) => {
    Categorie.find()
    .then( ( lesCategories )=>{
        res.render('add-article' , { Categories: lesCategories})
    })
    .catch( (  ) =>{
        res.redirect('/')
    }) ;
}


exports.AddArticle = (req, res) => {
   
    console.log(req.file)

    var article = new articles({
        ...req.body,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` ,
        date: new Date() 
    });
    console.log(article) ;
    article.save()
    .then(() =>{
        console.log("ajoue avec succes");
        res.redirect('/')
    })
    .catch(err => {
        console.log("erreur dajoue " + err);
    } )

}



